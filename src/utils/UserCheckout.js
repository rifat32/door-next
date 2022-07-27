import React, { useEffect } from 'react'
import { useRouter } from "next/dist/client/router";
import { BACKENDAPI } from "../../config";
import { apiClient } from "./apiClient";

const UserCheckout = ({children}) => {
    const router = useRouter()
    useEffect(() => {
        apiClient()
        .get(`${BACKENDAPI}/v1.0/user`)
        .then((response) => {
            console.log(response);
        router.push("/other/user-checkout");
          
        })
        .catch((err) => {
            console.log(err);
            if (err.response) {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
            }
          
        });
    },[])
    
  return (
    <>
    {children}
    </>
  )
}

export default UserCheckout


