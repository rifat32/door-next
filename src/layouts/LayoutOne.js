import { Fragment } from "react";
import { HeaderOne } from "../components/Header";
import { FooterOne } from "../components/Footer";

const LayoutOne = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderOne navPositionClass={navPositionClass} />
      {children}
      <FooterOne />
    </Fragment>
  );
};

export default LayoutOne;
