//navbar hamburger menu script
const menu = document.querySelector(".menu-container");
const menuList = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  menuList.classList.toggle("show-menu");
  menu.classList.toggle("active");
});

//scroll script
window.addEventListener("scroll", () => {
  var nav = document.querySelector("nav");
  nav.classList.toggle("fixed", window.scrollY > 0);
});

// Create a function to handle the resize event

// Remove a class from an element
const element = document.getElementById("list"); // Replace 'elementId' with the actual ID of the element
element.classList.remove("show-menu"); // Replace 'className' with the class you want to remove

// Add an event listener for the resize event
window.addEventListener("resize", () => {
  const element = document.getElementById("list"); // Replace 'elementId' with the actual ID of the element
  element.classList.remove("show-menu");

  const remove = document.querySelector(".menu-container");
  remove.classList.remove("active");
});

//faq scrript
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("click");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



//login

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  const prevArrow = document.querySelector(".arrow-prev");
  const nextArrow = document.querySelector(".arrow-next");

  prevArrow.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonialVisibility();
  });

  nextArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonialVisibility();
  });

  function updateTestimonialVisibility() {
    testimonials.forEach((testimonial, index) => {
      if (index === currentIndex) {
        testimonial.style.display = "flex";
      } else {
        testimonial.style.display = "none";
      }
    });
  }

  updateTestimonialVisibility();
});
