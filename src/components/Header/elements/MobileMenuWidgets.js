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

const MobileMenuWidgets = () => {
  return (
    <div className="offcanvas-mobile-menu__widgets space-mb--30">
      <div className="contact-widget space-mb--30">
        <ul>
          <li>
            <IoMdPerson />
            <Link href="/other/login">
              <a>Login</a>
            </Link>
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
