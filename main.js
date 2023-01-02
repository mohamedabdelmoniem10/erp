let menuItems = document.querySelectorAll(".main-menu__item");
let subParentItems = document.querySelectorAll(".sub-menu__parent-item");
let subsOfSub = document.querySelectorAll(".sub-menu__item.has-sub");
let mainElement = document.querySelector("main");

let headerBtns = document.querySelectorAll(".header__btn");

// for tabs menu
let tabsContainer = document.querySelector(".header-tabs__container ul");
let tabs = document.querySelectorAll(".header__tab");
let tabsNavRight = document.querySelector(".header-tabs__navigation-btn.right");
let tabsNavLeft = document.querySelector(".header-tabs__navigation-btn.left");
let tabsNav = document.querySelector(".header-tabs__navigation-btn");
let tabsScrollValue = 0;
// for tabs menu
tabsNavLeft.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    Math.abs(tabsContainer.scrollLeft) >
    tabsContainer.scrollWidth -
      document.querySelector(".header-tabs__container").clientWidth
  ) {
    tabsScrollValue = tabsScrollValue;
  } else {
    tabsScrollValue -= tabs[0].clientWidth;
  }
  console.log("this is clicked", tabsScrollValue);
  tabsContainer.scroll({
    top: 0,
    left: tabsScrollValue,
    behavior: "smooth",
  });
});

tabsNavRight.addEventListener("click", (e) => {
  e.preventDefault();
  if (tabsContainer.scrollLeft < 0) tabsScrollValue += tabs[0].clientWidth;
  tabsContainer.scroll({
    top: 0,
    left: tabsScrollValue,
    behavior: "smooth",
  });
});
// ./end tabs menu

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (item.classList.contains("active")) {
      menuItems.forEach((i) => i.classList.remove("active"));
      mainElement.classList.remove("shrinked");
    } else {
      menuItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      mainElement.classList.add("shrinked");
    }
  });
});
subParentItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    let parentLi = item.parentElement.parentElement.parentElement;
    console.log(parentLi);
    parentLi.querySelector(".active").classList.remove("active");
    mainElement.classList.remove("shrinked");
  });
});
subsOfSub.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    item.classList.toggle("active");
  });
});

headerBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (btn.classList.contains("active")) {
      headerBtns.forEach((b) => b.classList.remove("active"));
    } else {
      headerBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    }
  });
});

$(document).on(".main-menu__item", "click", function () {
  if (item.classList.contains("active")) {
    menuItems.forEach((i) => i.classList.remove("active"));
    mainElement.classList.remove("shrinked");
  } else {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    mainElement.classList.add("shrinked");
  }
});

let mobileMenuBtn = document.querySelector(".header__btn.header__menu-btn");
let sidebar = document.querySelector(".sidebar");
mobileMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.toggle("show-menu");
});
