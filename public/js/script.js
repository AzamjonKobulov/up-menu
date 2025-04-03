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

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Header adjustments
      header.classList.add("bg-white", "py-5", "shadow-md");
      header.classList.remove(
        "md:bg-brand-orange-100",
        "py-8",
        "md:pt-10",
        "lg:pt-14",
        "md:pb-10"
      );

      // Mobile menu adjustments
      mobileMenu.classList.add("pt-5");
      mobileMenu.classList.remove("pt-8");
    } else {
      // Header adjustments
      header.classList.remove("bg-white", "py-5", "shadow-md");
      header.classList.add(
        "md:bg-brand-orange-100",
        "py-8",
        "md:pt-10",
        "lg:pt-14",
        "md:pb-10"
      );

      // Mobile menu adjustments
      mobileMenu.classList.remove("pt-5");
      mobileMenu.classList.add("pt-8");
    }
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
