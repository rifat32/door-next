import { Fragment } from "react";
import { IoIosSearch, IoIosClose } from "react-icons/io";

const SearchOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <Fragment>
      <div className={`search-wrap ${activeStatus ? "open" : ""}`}>
        <button
          className="close-search"
          onClick={() => {
            getActiveStatus(false);
          }}
        >
          <IoIosClose />
        </button>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            id="search-input"
          />
          <button type="submit" className="search-icon">
            <IoIosSearch />
          </button>
        </form>
      </div>
      <div className={`search-overlay  ${activeStatus ? "open" : ""}`} />
    </Fragment>
  );
};

export default SearchOverlay;
