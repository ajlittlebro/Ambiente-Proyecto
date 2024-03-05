const submenuItems = document.querySelectorAll(".relative");

submenuItems.forEach((item) => {
  const submenu = item.querySelector(".submenu");

  item.addEventListener("mouseenter", () => {
    submenu.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    submenu.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
