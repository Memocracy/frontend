import React from "react";
import { Link } from "gatsby";
import * as paginationStyles from "./Pagination.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Pagination = ({
  currentPage,
  pageCount,
  base,
  additionalClasses = [],
}) => {
  const classes = `
    ${paginationStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes}>
      <nav>
        {currentPage === 2 ? (
          <Link title="Go to previous page" to={`/${base}`}>
            ← Newest posts
          </Link>
        ) : (
          <span />
        )}
        {currentPage > 2 ? (
          <Link title="Go to previous page" to={`/${base}/${currentPage - 1}`}>
            ← Newer posts
          </Link>
        ) : (
          <span />
        )}
        Page {currentPage} of {pageCount}
        {currentPage < pageCount ? (
          <Link title="Go to next page" to={`/${base}/${currentPage + 1}`}>
            Older posts →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
};
