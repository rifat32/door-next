import { Fragment } from "react";
import { HeaderThree } from "../components/Header";
import { FooterFour } from "../components/Footer";

const LayoutFour = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderThree navPositionClass={navPositionClass} />
      {children}
      <FooterFour />
    </Fragment>
  );
};

export default LayoutFour;
