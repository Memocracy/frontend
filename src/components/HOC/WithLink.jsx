import React from "react";
import { Link } from "gatsby";

export const WithLink = ({ link, children, className, ...props }) =>
  link ? (
    <Link href={link} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <article className={className} {...props}>
      {children}
    </article>
  );
