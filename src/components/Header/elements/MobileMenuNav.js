import { useEffect, useState } from "react";
import Link from "next/link";
import { apiClient } from "../../../utils/apiClient";
import { BACKENDAPI } from "../../../../config";

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  const [links,setLinks] = useState([])

  useEffect(() => {
    apiClient().get(`${BACKENDAPI}/v1.0/client/menus/all`)
    .then(response => {
console.log("menu",response)
setLinks(response.data.data)
    })
    .catch(err => {
      console.log(err.response)
    })

  },[])
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        {/* dynamic menu */}
        {
        links.length?  links.map(el => {
            if(el.type == "single") {
              return  <li key={el.id}>
              <Link href={el.url}>
                <a >{el.name}</a>
              </Link>
            </li>
            }
            else{
              return   <li key={el.id} className="menu-item-has-children">
              <Link href={el.url} >
                <a>
                {el.name} 
                </a>
              </Link>
              <ul className="mobile-sub-menu">
    {
      el.children.map(el2 => {
        return <li key={el2.id}>
        <Link href={el2.url}>
          <a>{el2.name}</a>
        </Link>
      </li>
      })
    }
             
               
                
                
              </ul>
            </li>
            }


          })
          :
          null
        }
        {/* end of dynamic menu */}
      

     

     
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
