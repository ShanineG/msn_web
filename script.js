// Function to add/remove the navbar-scrolled class
function handleScroll() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial check in case the page is already scrolled
handleScroll();
