import { Fragment } from "react";

const Renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <Fragment>
      <div className="single-countdown">
        <span className="single-countdown__time">{days}</span>
        <span className="single-countdown__text">:</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{hours}</span>
        <span className="single-countdown__text">:</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{minutes}</span>
        <span className="single-countdown__text">:</span>
      </div>
      <div className="single-countdown">
        <span
          className="single-countdown__time"
          suppressHydrationWarning={true}
        >
          {seconds}
        </span>
      </div>
    </Fragment>
  );
};

export default Renderer;
