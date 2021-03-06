import React from "react";
import { Logo } from "../../Atoms/Logo";
import { ProjectBaner } from "../../Atoms/ProjectBaner";
import { NewsletterForm } from "../Form";
import * as heroStyles from "./Hero.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
// eslint-disable-next-line react/display-name
export const Hero = React.forwardRef((props, ref) => {
  return (
    <div className={heroStyles.base} ref={ref}>
      <div className={heroStyles.innerContainer}>
        <Logo additionalClasses={[heroStyles.logo]} width="150" height="150" />
        <ProjectBaner
          breakLine={true}
          additionalClasses={[heroStyles.projectBaner]}
        />
        <NewsletterForm />
      </div>
    </div>
  );
});
