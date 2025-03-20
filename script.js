const Body = document.querySelector("body");
const headerPrev = document.querySelector(".header-prev");
const headerNext = document.querySelector(".header-next");
const sliderHeader = document.querySelector(".slider-header");
let i = 1;
headerPrev.addEventListener("click", () => {
  if (i == 1) {
    sliderHeader.scrollTo({ left: 1000, behavior: "smooth" });
    i++;
  } else {
    sliderHeader.scrollTo({ left: 0, behavior: "smooth" });
    i--;
  }
});
headerNext.addEventListener("click", () => {
  if (i == 2) {
    sliderHeader.scrollTo({ left: 0, behavior: "smooth" });
    i--;
  } else {
    sliderHeader.scrollTo({ left: 1000, behavior: "smooth" });
    i++;
  }
});

const LegoLogin = document.querySelector(".lego-login");
const CloseLogin = document.querySelector(".close-login");
const Login = document.querySelector(".login");
LegoLogin.addEventListener("click", () => {
  Login.classList.add("flex");
  Login.classList.remove("hidden");
  Body.classList.add("overflow-hidden");
});
CloseLogin.addEventListener("click", () => {
  Login.classList.add("hidden");
  Login.classList.remove("flex");
  Body.classList.remove("overflow-hidden");
});

const submenuContainer = document.querySelector(".submenu-container");
const navLink = document.querySelectorAll(".navLink");
const subMenuUl = document.querySelectorAll(".submenu-ul");
const subMenu = document.querySelector(".submenu");
const closeSubmenu = document.querySelector(".closesubmenu");
let isOpensubmenu = false;
navLink.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (!isOpensubmenu) {
      subMenu.classList.replace("-translate-x-[100%]", "translate-x-0");
      submenuContainer.classList.replace(
        "-translate-x-[100%]",
        "translate-x-0"
      );
      isOpensubmenu = true;
    }
    Body.classList.add("overflow-hidden");
    item.classList.replace("after:w-0", "after:w-full");
    subMenuUl[index].classList.replace("hidden", "block");
    navLink.forEach((remove, removeIndex) => {
      if (removeIndex != index) {
        remove.classList.replace("after:w-full", "after:w-0");
        subMenuUl[removeIndex].classList.replace("block", "hidden");
      }
    });
  });
});

closeSubmenu.addEventListener("click", () => {
  isOpensubmenu = false;
  submenuContainer.classList.replace("translate-x-0", "-translate-x-[100%]");
  subMenu.classList.replace("translate-x-0", "-translate-x-[100%]");
  Body.classList.remove("overflow-hidden");
  navLink.forEach((item) => {
    item.classList.replace("after:w-full", "after:w-0");
  });
});

const submenuContainerMd = document.querySelector(".submenu-md-container");
const submenuMd = document.querySelector(".submenu-md");
const closeSubmenuMd = document.querySelector(".closesubmenu-md");
const openSubmenuMd = document.querySelector(".openSubmenu");
const submenuMdLiContainer = document.querySelector(".submenuli-container");
const submenuMdLi = document.querySelectorAll(".submenu-li");
const submenuMdLiEl = document.querySelectorAll(".submenuli-el");
const closesubmenuLi = document.querySelectorAll(".closesubmenuli-md");
let lastSubmenuindex;
let isOpensubmenuLi = false;
openSubmenuMd.addEventListener("click", () => {
  Body.classList.add("overflow-hidden");
  submenuContainerMd.classList.replace("-translate-x-[100%]", "translate-x-0");
  submenuMd.classList.replace("-translate-x-[100%]", "translate-x-0");
});
closeSubmenuMd.addEventListener("click", () => {
  Body.classList.remove("overflow-hidden");
  submenuContainerMd.classList.replace("translate-x-0", "-translate-x-[100%]");
  submenuMd.classList.replace("translate-x-0", "-translate-x-[100%]");
});
submenuMdLi.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (!isOpensubmenuLi) {
      submenuMdLiContainer.classList.replace(
        "-translate-x-[100%]",
        "translate-x-0"
      );
      isOpensubmenuLi = true;
    }
    submenuMdLiEl[index].classList.replace(
      "-translate-x-[100%]",
      "translate-x-0"
    );
  });
});
closesubmenuLi.forEach((item, index) => {
  item.addEventListener("click", () => {
    submenuMdLiContainer.classList.replace(
      "translate-x-0",
      "-translate-x-[100%]"
    );
    submenuMdLiEl[index].classList.replace(
      "translate-x-0",
      "-translate-x-[100%]"
    );
    isOpensubmenuLi = false;
  });
});
