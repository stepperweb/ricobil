function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("mouseenter", () => {
      clearActiveClasses();

      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin();

const toggleMenu = document.querySelector(".nav_hamburger");
const toggleMenu_color = document.querySelector(".nav_hamburger_color");
const menu = document.querySelector(".nav_menu");
const header = document.querySelector("header")

toggleMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  header.classList.toggle('active')
})

toggleMenu_color.addEventListener('click', () => {
  menu.classList.toggle('active');
  header.classList.toggle('active')
})

