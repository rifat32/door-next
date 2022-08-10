import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { IoIosSearch, IoIosClose } from "react-icons/io";

const SearchOverlay = ({ activeStatus, getActiveStatus }) => {
  const [term, setTerm] = useState("")
  const router = useRouter()
  const searchProduct = (e) => {
e.preventDefault();
getActiveStatus(false);
router.push(`/shop/search/${term}`)
  }
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
        <form onSubmit={searchProduct}>
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            id="search-input"
            onChange={(e) => {
setTerm(e.target.value)
            }}
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
