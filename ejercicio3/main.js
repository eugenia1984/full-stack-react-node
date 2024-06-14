const d = document;

/* RegExp to check input data */
const namePattern = /^[A-Za-z\s]{2,60}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;

/* Constants for High - Low contrast CSS */
const estiloAltoContrasteBtn = d.getElementById("estilo-alto-contraste");
const estilo1SinAltoContrasteBtn = d.getElementById("estilo-1");
const body = d.querySelector("body");
const header = d.querySelector("header");
const main = d.querySelector("main");
const footer = d.querySelector("footer");


/* Constants to check form data */
const form = d.querySelector("form");
const firstNameInput = d.getElementById("first-name");
const lastNameInput = d.getElementById("last-name");
const emailInput = d.getElementById("email");
const countryInput = d.getElementById("country");


/* Inputs validation */
const validateInput = (input, pattern, errorElementId) => {
  const value = input.value.trim();
  const errorElement = d.getElementById(errorElementId);
  if (!pattern.test(value)) {
    errorElement.textContent = "Datos incorrectos";
    errorElement.style.display = "block";
    return false;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
    return true;
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const isFirstNameValid = validateInput(firstNameInput, namePattern, "first-name-error");
  const isLastNameValid = validateInput(lastNameInput, namePattern, "last-name-error");
  const isEmailValid = validateInput(emailInput, emailPattern, "email-error");
  const isCountryValid = validateInput(countryInput, namePattern, "country-error");

  if (isFirstNameValid && isLastNameValid && isEmailValid && isCountryValid) {
    fetch("https://formsubmit.co/ajax/costamariaeugenia1@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "Nombre": firstNameInput.value,
        "Apellido": lastNameInput.value,
        "Correo electrónico": emailInput.value,
        "País de residencia": countryInput.value,
        "Fecha de nacimiento": d.getElementById("birth-date").value
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert("Formulario enviado");
          form.reset();
        } else {
          alert("Hubo un error al enviar el formulario");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error al enviar el formulario");
      });
  }
};

const addValidationListeners = () => {
  firstNameInput.addEventListener("input", () => validateInput(firstNameInput, namePattern, "first-name-error"));
  lastNameInput.addEventListener("input", () => validateInput(lastNameInput, namePattern, "last-name-error"));
  emailInput.addEventListener("input", () => validateInput(emailInput, emailPattern, "email-error"));
  countryInput.addEventListener("input", () => validateInput(countryInput, namePattern, "country-error"));
};

const addStyleToggleListeners = () => {
  estiloAltoContrasteBtn.addEventListener("click", () => {
    body.classList.add("dark");
    header.classList.add("dark");
    main.classList.add("dark");
    footer.classList.add("dark");
  });

  estilo1SinAltoContrasteBtn.addEventListener("click", () => {
    body.classList.remove("dark");
    header.classList.remove("dark");
    main.classList.remove("dark");
    footer.classList.remove("dark");
  });
};

d.addEventListener("DOMContentLoaded", () => {
  addValidationListeners();
  addStyleToggleListeners();
  form.addEventListener("submit", handleSubmit);
});