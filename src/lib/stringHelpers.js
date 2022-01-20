export const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || "";
