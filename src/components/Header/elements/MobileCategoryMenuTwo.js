import { IoIosClose } from "react-icons/io";
import MobileCategoryMenuNavTwo from "./MobileCategoryMenuNavTwo";

const MobileCategoryMenuTwo = ({ activeStatus, getActiveStatus }) => {
  return (
    <div
      className={`offcanvas-mobile-menu offcanvas-mobile-menu--style-two ${
        activeStatus ? "active" : ""
      }`}
    >
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getActiveStatus(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getActiveStatus(false)}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">
            {/* mobile nav menu */}
            <MobileCategoryMenuNavTwo getActiveStatus={getActiveStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCategoryMenuTwo;
