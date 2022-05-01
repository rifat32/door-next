import { Fragment } from "react";
import { HeaderFive } from "../components/Header";
import { FooterFive } from "../components/Footer";

const LayoutFive = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderFive navPositionClass={navPositionClass} />
      {children}
      <FooterFive />
    </Fragment>
  );
};

export default LayoutFive;
