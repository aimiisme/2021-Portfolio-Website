const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");
    // apply the animation but make sure the
    // positioning doesnt change when viewport changes
    if (nav.classList.contains("nav-active")) {
      nav.style.animation = `navSlide 0.5s forwards`;
    } else {
      nav.style.animation = `navSlideOut 0.5s`;
    }
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navFade 0.5s ${index / 5 + 0.5}s ease forwards`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();
