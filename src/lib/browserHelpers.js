export const scrollToRef = (ref, navbarHeight = 60) =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - navbarHeight,
    behavior: "smooth",
  });
