import {
  IoIosPhonePortrait,
  IoMdMail,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoMdPerson
} from "react-icons/io";


import Link from "next/link";
const logout = () => {
  apiClient()
  .post(`${BACKENDAPI}/v1.0/logout`)
  .then((response) => {
    console.log(response);
  
  })
  .catch((err) => {
    if (err.response) {
      console.log(err.response);
    }
  });
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  router.push(`/other/login`);

}

const MobileMenuWidgets = () => {
  return (
    <div className="offcanvas-mobile-menu__widgets space-mb--30">
      <div className="contact-widget space-mb--30">
        <ul>
        <li className={localStorage.getItem("token")?"d-inline-block":"d-none"}>
                  <Link href="/other/my-account">
                    <a>
                    <IoMdPerson />
                      <span>My Account</span>
                    </a>
                  </Link>
                </li>
          <li className={localStorage.getItem("token")?"d-none":"d-inline-block"}>
            <IoMdPerson />
            <Link href="/other/login">
              <a>Login</a>
            </Link>
          </li>
          <li id="web-logout" className={localStorage.getItem("token")?"d-inline-block":"d-none"}>
            
            <a onClick={logout}>
            <IoMdPerson />
              <span>Logout </span>
            </a>
         
        </li>
          <li>
            <IoIosPhonePortrait />
            <a href="tel://01452 924 200">01452 924 200 </a>
          </li>
          <li>
            <IoMdMail />
            <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
          </li>
        </ul>
      </div>

      <div className="social-widget">
        <a href="https://www.twitter.com" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <IoLogoInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <IoLogoFacebook />
        </a>
        <a href="https://www.pinterest.com" target="_blank">
          <IoLogoPinterest />
        </a>
      </div>
    </div>
  );
};

export default MobileMenuWidgets;
