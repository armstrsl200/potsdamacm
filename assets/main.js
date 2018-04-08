// Page links selectors.
const pageLinkSelectors = ['.about', '.org', '.blog'];

// Wait until the page finishes loading to handle page change.
window.addEventListener('load', handlePageChange);

function handlePageChange() {
  // Get page link elements.
  const pageLinks = pageLinkSelectors.map((selector) => {
    return document.querySelector(selector);
  });

  // For each page link element...
  pageLinks.forEach((pageLink, i) => {
    // If the link points to the current url...
    if (pageLink.href+'/' === window.location.href) {
      // Add the "current-page" css class to the element.
      pageLink.classList.add('current-page');
    } else {
      // Remove the "current-page" css class from the element if it has it.
      pageLink.classList.remove('current-page');
    }
  });
}
