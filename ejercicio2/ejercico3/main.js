const d = document;

d.addEventListener("DOMContentLoaded", () => {
  const estiloAltoContrasteBtn = d.getElementById("estilo-alto-contraste");
  const estilo1SinAltoContrasteBtn = d.getElementById("estilo-1");
  const body = d.querySelector("body")
  const header = d.querySelector("header");
  const main = d.querySelector("main");
  const footer = d.querySelector("footer");

  estiloAltoContrasteBtn.addEventListener("click", () => {
    body.classList.add("dark")
    header.classList.add("dark");
    main.classList.add("dark");
    footer.classList.add("dark");
  });

  estilo1SinAltoContrasteBtn.addEventListener("click", () => {
    body.classList.remove("dark")
    header.classList.remove("dark");
    main.classList.remove("dark");
    footer.classList.remove("dark");
  });
});
