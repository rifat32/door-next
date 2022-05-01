import { Fragment } from "react";
import { HeaderTwo } from "../components/Header";
import { FooterTwo } from "../components/Footer";

const LayoutTwo = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderTwo navPositionClass={navPositionClass} />
      {children}
      <FooterTwo />
    </Fragment>
  );
};

export default LayoutTwo;
