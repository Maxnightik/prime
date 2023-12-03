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

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

/*    HEADER LINK   */

const menuLink = document.querySelector(".menu__link");
if (menuLink) {
  menuLink.addEventListener("click", function (e) {
    menuLink.classList.remove("_active");
  });
  menuLink.classList.add("_active");
}

/*    VALUES HOVER   */

document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы с классом .point
  const points = document.querySelectorAll(".point");

  // Получаем все элементы с классом .values__item_description
  const valuesItemDescriptions = document.querySelectorAll(
    ".values__item_description"
  );

  // Добавляем обработчики событий для каждого .point
  points.forEach((point, index) => {
    point.addEventListener("mouseover", () => {
      // Добавляем класс hover для соответствующего .values__item_description
      valuesItemDescriptions[index].classList.add("hover");
    });

    point.addEventListener("mouseout", () => {
      // Удаляем класс hover для соответствующего .values__item_description
      valuesItemDescriptions[index].classList.remove("hover");
    });
  });
});

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
  const currTabDevelopment = element.dataset.btn;

  // Переключаем класс .active для вкладок
  for (let i = 0; i < tabsDevelopment.children.length; i++) {
    tabsDevelopment.children[i].classList.remove("active");
  }
  element.classList.add("active");

  // Переключаем класс .active для соответствующего контента
  for (let i = 0; i < contentDevelopment.length; i++) {
    if (contentDevelopment[i].dataset.content === currTabDevelopment) {
      contentDevelopment[i].classList.add("active");
    } else {
      contentDevelopment[i].classList.remove("active");
    }
  }
};

// Добавляем обработчик событий для клика по документу
document.addEventListener("click", (event) => {
  const clickedTab = event.target.closest(".tab-btn__development");

  // Если клик был внутри вкладки, обрабатываем событие
  if (clickedTab) {
    changeClassDevelopment(clickedTab);
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
