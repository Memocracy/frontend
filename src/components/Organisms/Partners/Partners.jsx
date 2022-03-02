import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LogoGrid } from "../../Molecules/LogoGrid";
import * as partnerStyles from "./Partners.module.scss";

const logoPath = "../../../assets/images/logos/";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Partners = ({ additionalClasses = [] }) => {
  return (
    <div className={[partnerStyles.main].join(" ")}>
      <h3>Sponsor</h3>
      <LogoGrid
        additionalClasses={[partnerStyles.sponsor]}
      >
        <StaticImage
          placeholder="blurred"
          src={`${logoPath}logo-volkswagen@2x.png`}
          alt="Volkswagen Stiftung"
          className="volkswagen"
        />
      </LogoGrid>
      <h3>Forming the research consortium</h3>
      <LogoGrid
        additionalClasses={[partnerStyles.consortium]}
      >
        <StaticImage
          placeholder="blurred"
          src={`${logoPath}logo-asser@2x.png`}
          alt="Asser Institute"
          className="asser"
        />
        <StaticImage
          placeholder="blurred"
          src={`${logoPath}logo-kopehagen@2x.png`}
          alt="University of Kopenhagen"
          className="kopenhagen"
        />
        <StaticImage
          placeholder="blurred"
          src={`${logoPath}logo-university-of-cologne@2x.png`}
          alt="University of Cologne"
          className="cologne"
        />
        <StaticImage
          placeholder="blurred"
          src={`${logoPath}logo-pan@2x.png`}
          alt="PAN"
          className="pan"
        />
      </LogoGrid>
    </div>
  );
};
