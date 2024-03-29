import React from "react";
import * as banerStyles from "./ProjectBaner.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const ProjectBaner = ({ additionalClasses = [], breakLine = false }) => {
  const classes = `
    ${banerStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes}>
      <h1>Memocracy</h1>
      <p>
        The Challenge of Populist Memory Politics for Europe: { breakLine && <br />}
        Towards Effective Responses to Militant Legislation on the Past
      </p>
    </div>
  );
};
