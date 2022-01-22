import React from "react";
import uuid from "react-uuid";
import { scrollToRef } from "../../../lib/browserHelpers";
import { Button } from "../../Atoms/Button";
import { ContentHeader } from "../Content";
import * as tableOfContentsStyles from "./TableOfContents.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const TableOfContents = ({ additionalClasses = [], elements }) => {
  const classes = `
    ${tableOfContentsStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes}>
      <ContentHeader title="Table of contents" as="h3" paddingBottom="sm" size="h6" />
      <ul>
        {elements.map((element) => (
          <li key={uuid()}>
            <Button type="transparent" onClick={() => scrollToRef(element.ref)}>
              <span>{element.name}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
