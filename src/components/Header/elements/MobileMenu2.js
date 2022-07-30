import { IoIosClose } from "react-icons/io";
import MobileMenuSearch from "./MobileMenuSearch";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";
import { Sidebar } from "../../Shop";
import Sidebar2 from "../../Shop/Sidebar2";

const MobileMenu2 = ({ activeStatus2, getactiveStatus2,products, getSortParams }) => {

  return (
    <div className={`offcanvas-mobile-menu  ${activeStatus2 ? "active" : ""}`}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getactiveStatus2(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getactiveStatus2(false)}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">

          <Sidebar2 products={products} getSortParams={getSortParams} />
       
           

          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu2;
