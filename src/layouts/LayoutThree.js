import { Fragment } from "react";
import { HeaderOne } from "../components/Header";
import { FooterThree } from "../components/Footer";

const LayoutThree = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderOne navPositionClass={navPositionClass} />
      {children}
      <FooterThree />
    </Fragment>
  );
};

export default LayoutThree;
