let menuItems = document.querySelectorAll(".main-menu__item");
let subParentItems = document.querySelectorAll(".sub-menu__parent-item");
let subsOfSub = document.querySelectorAll(".sub-menu__item.has-sub");
let mainElement = document.querySelector("main");

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
