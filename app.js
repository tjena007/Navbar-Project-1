console.log("hi");
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  console.log(navLinks);

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");

    //animate links

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        console.log(index);
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 2
        }s`;
        //console.log(index / 5 + 0.1);
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();
