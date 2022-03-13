export const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || "";

/**
 * Check type of a link.
 * @param {string} link
 * @returns
 */
export const getTypeOfLink = (link) => {
  if (link.includes("mailto:")) {
    return "mail";
    // eslint-disable-next-line no-else-return
  } else if (link === "#no") {
    return "non-clickable";
    // eslint-disable-next-line no-else-return
  } else if (link.match(/^https?:\/\//)) {
    return "external";
  } else {
    return "internal";
  }
};
