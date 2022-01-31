import React from "react";
import Spinner from "../../../assets/images/spinner.inline.svg";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Loader = () => {
  return <div className="loader loader--style2" title="1" role="alert" style={{lineHeight: "0"}}>
    <Spinner />
  </div>;
};
