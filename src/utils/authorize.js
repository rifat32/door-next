import { useRouter } from "next/dist/client/router";

import React, { useEffect } from 'react'
import { BACKENDAPI } from "../../config";
import { apiClient } from "./apiClient";


const Authorize = ({children,setUserFunction}) => {
    
    const router = useRouter()
    useEffect(() => {
        apiClient()
        .get(`${BACKENDAPI}/v1.0/user`)
        .then((response) => {
            console.log(response);
            setUserFunction(response.data.user)
        })
        .catch((err) => {
         
            console.log(err);
            if (err.response) {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
            }
            // logoutFunction();
            // setUserLoading(false);
            router.push("/other/login");
        });
    },[])
   
  return (
    <> {children}</>
  )
}

export default Authorize




