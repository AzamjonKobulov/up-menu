const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
});

menuClose.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  let lastScrollY = window.scrollY;
  let isHeaderHidden = false;

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    // Add "shadow" and "py-5" classes when scrollY > 200px
    if (currentScrollY > 200) {
      header.classList.add("shadow", "py-5");
    } else {
      header.classList.remove("shadow", "py-5");
    }

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down - hide header
      if (!isHeaderHidden) {
        header.style.transform = "translateY(-100%)";
        isHeaderHidden = true;
      }
    } else {
      // Scrolling up - show header
      if (isHeaderHidden) {
        header.style.transform = "translateY(0)";
        isHeaderHidden = false;
      }
    }

    lastScrollY = currentScrollY;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  grid: {
    rows: 2,
    fill: "row",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    640: {
      slidesPerView: 3.3,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    1024: {
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },
});

// Accordion Func
document.addEventListener("DOMContentLoaded", () => {
  const accordionGroups = document.querySelectorAll(".hs-accordion-group");

  accordionGroups.forEach((group) => {
    const accordions = group.querySelectorAll(".hs-accordion");

    accordions.forEach((accordion) => {
      const toggleButton = accordion.querySelector(".hs-accordion-toggle");
      const content = accordion.querySelector(".hs-accordion-content");
      const icon = toggleButton.querySelector("svg"); // Select the SVG itself

      toggleButton.addEventListener("click", () => {
        const isOpen = accordion.classList.contains("active");

        // Close all other accordions in the group
        accordions.forEach((otherAccordion) => {
          if (
            otherAccordion !== accordion &&
            otherAccordion.classList.contains("active")
          ) {
            closeAccordion(otherAccordion);
          }
        });

        if (isOpen) {
          closeAccordion(accordion);
        } else {
          openAccordion(accordion);
        }
      });

      // Ensure initial state is set correctly
      if (accordion.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        accordion.classList.add("border-theme-primary");
        icon.style.transform = "rotate(45deg)";
      } else {
        content.style.maxHeight = "0px";
        icon.style.transform = "rotate(0deg)";
      }
    });

    function openAccordion(accordion) {
      const content = accordion.querySelector(".hs-accordion-content");
      const icon = accordion.querySelector("svg");

      accordion.classList.add("active", "border-theme-primary");
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(45deg)";
    }

    function closeAccordion(accordion) {
      const content = accordion.querySelector(".hs-accordion-content");
      const icon = accordion.querySelector("svg");

      accordion.classList.remove("active", "border-theme-primary");
      content.style.maxHeight = "0px";
      icon.style.transform = "rotate(0deg)";
    }
  });
});

const reqForm = document.querySelector("#request-form");
const reqFormToggle = document.querySelectorAll(".request-form-toggle");

reqFormToggle.forEach((btn) => {
  btn.addEventListener("click", () => reqForm.classList.toggle("hidden"));
});
