let icons = document.querySelectorAll("i");

icons.forEach(function (icon) {
  icon.addEventListener("mouseover", function () {
    icon.nextElementSibling.classList.add("activeNear");
    icon.previousElementSibling.classList.add("activeNear");
    icon.parentElement.parentElement.nextElementSibling
      .querySelector("div")
      .querySelector(`[data-id='${icon.getAttribute("data-id")}']`)
      .classList.add("activeNear");
    icon.parentElement.parentElement.previousElementSibling
      .querySelector("div")
      .querySelector(`[data-id='${icon.getAttribute("data-id")}']`)
      .classList.add("activeNear");
  });
});

icons.forEach(function (icon) {
  icon.addEventListener("mouseout", function () {
    icon.nextElementSibling.classList.remove("activeNear");
    icon.previousElementSibling.classList.remove("activeNear");
    icon.parentElement.parentElement.nextElementSibling
      .querySelector("div")
      .querySelector(`[data-id='${icon.getAttribute("data-id")}']`)
      .classList.remove("activeNear");
    icon.parentElement.parentElement.previousElementSibling
      .querySelector("div")
      .querySelector(`[data-id='${icon.getAttribute("data-id")}']`)
      .classList.remove("activeNear");
  });
});
