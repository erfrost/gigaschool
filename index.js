document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const container2 = document.querySelector(".container-2");
  const moreBtn = document.querySelector(".btn");
  const arrow = document.querySelector(".arrow");

  //появление стрелки при наведении на кнопку
  moreBtn.addEventListener("mouseenter", () => {
    arrow.classList.add("showArrow");
  });
  moreBtn.addEventListener("mouseleave", () => {
    arrow.classList.remove("showArrow");
  });

  //скролл при нажатии на кнопку
  moreBtn.addEventListener("click", () => {
    // window.scrollBy({
    //   top: window.innerHeight,
    //   behavior: "smooth",
    // });
    container.style.opacity = "0";
    setTimeout(() => {
      container.style.display = "none";
      container2.style.display = "flex";
      setTimeout(() => {
        container2.style.opacity = "1";
        container2.style.transform = "translateX(0)";
      }, 150);
    }, 300);
  });

  //скролл на главную
  const toMainPageBtn = document.querySelector("#toMainPage");
  toMainPageBtn.addEventListener("click", () => {
    container2.style.transform = "translateX(-300%)";
    setTimeout(() => (container2.style.display = "none"), 150);
    setTimeout(() => {
      container.style.display = "flex";
      container.style.transform = "transform: translateY(-300%)";
      container.style.opacity = "1";
    }, 300);
    console.log(container, container2);
  });
});
