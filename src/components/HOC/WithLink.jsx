import React from "react";
import { Link } from "gatsby";

export const WithLink = ({ link, children, className }) =>
  link ? (
    <Link href={link} className={className}>
      {children}
    </Link>
  ) : (
    <article className={className}>{children}</article>
  );
