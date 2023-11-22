const btn = document.querySelector(".contact__btn");
const btn2 = document.querySelector(".contact__btn-2");
const modal = document.querySelector(".pop-up");

modal.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms easy-in-out;
`;
const closeModal = (event) => {
  const target = event.target;

  if (target === modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
  }
};

const openModal = () => {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
};

btn.addEventListener("click", openModal);
btn2.addEventListener("click", openModal);
modal.addEventListener("click", closeModal);

/*   BURGER  */

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

/*     TABS  */

const tabs = document.getElementById("tabs");
const content = document.querySelectorAll(".content");

const changeClass = (el) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }
  el.classList.add("active");
};

tabs.addEventListener("click", (e) => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target);
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
    if (content[i].dataset.content === currTab) {
      content[i].classList.add("active");
    }
  }
});

/*     TABS Development */

const tabsDevelopment = document.getElementById("tabs__development");
const contentDevelopment = document.querySelectorAll(".content__development");

const changeClassDevelopment = (element) => {
  for (let i = 0; i < tabsDevelopment.children.length; i++) {
    tabsDevelopment.children[i].classList.remove("active");
  }
  element.classList.add("active");
};

tabsDevelopment.addEventListener("click", (ele) => {
  const currTabDevelopment = ele.target.dataset.btn;
  changeClassDevelopment(ele.target);
  for (let i = 0; i < contentDevelopment.length; i++) {
    contentDevelopment[i].classList.remove("active");
    if (contentDevelopment[i].dataset.content === currTabDevelopment) {
      contentDevelopment[i].classList.add("active");
    }
  }
});

/*     ACCORDEON   */
document.querySelectorAll(".accordion-item-triger").forEach((item) =>
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (item.parentNode.classList.contains("accordion-item--active")) {
      item.parentNode.classList.remove("accordion-item--active");
    } else {
      document
        .querySelectorAll(".accordion-item")
        .forEach((child) => child.classList.remove("accordion-item--active"));

      item.parentNode.classList.add("accordion-item--active");
    }
  })
);
