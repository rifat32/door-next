import { Fragment } from "react";
import { HeaderSix } from "../components/Header";
import { FooterSix } from "../components/Footer";

const LayoutSix = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderSix navPositionClass={navPositionClass} />
      {children}
      <FooterSix />
    </Fragment>
  );
};

export default LayoutSix;
