let body = document.body;
let buttonToggleTheme = document.querySelector(".js-buttonToggleTheme");
let themeName = document.querySelector(".js-themeName");
let solarSystemSection = document.querySelector(".js-solarSystemSection");
let planetsToHidden = document.querySelector(".js-planetsToHidden");
let buttonTogglePlanetsVisibility = document.querySelector(
  ".js-buttonTogglePlanetsVisibility"
);

buttonToggleTheme.addEventListener("click", () => {
  body.classList.toggle("body--dark");
  solarSystemSection.classList.toggle("section--dark");

  themeName.innerText = body.classList.contains("body--dark")
    ? "jasny"
    : "ciemny";
});

buttonTogglePlanetsVisibility.addEventListener("click", () => {
  planetsToHidden.hidden = !planetsToHidden.hidden;

  buttonTogglePlanetsVisibility.innerText = planetsToHidden.hidden
    ? "Pokaż planety"
    : "Schowaj planety";
});
