/**
 * Very simple handler for lightbox handling.
 */
window.addEventListener("click", (e) => {
  if (e.target.matches(`img[data-wp-inline-image]`)) {
    const link = e.target.closest("a");
    e.preventDefault();
    window.togglePreview(true, link.getAttribute('href'));
  }
});
