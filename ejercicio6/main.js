(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Get all the input values
  const firstNameInput = document.getElementById("inputFirstName");
  const lastNameInput = document.getElementById("inputLastName");
  const emailInput = document.getElementById("inputEmail");
  const birthDateInput = document.getElementById("inputBirthDate");
  const nationalityInput = document.getElementById("inputNationality");
  const alert = document.getElementById("liveAlertPlaceholder");

  const clearAlert = () => {
    setTimeout(() => {
      alert.innerHTML = "";
    }, 5000);
  };

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // If validation it's ok, prevent default submit
          event.preventDefault();

          // Send data
          fetch("https://formsubmit.co/ajax/costamariaeugenia1@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Nombre: firstNameInput.value,
              Apellido: lastNameInput.value,
              "Correo electrónico": emailInput.value,
              "Fecha de nacimiento": birthDateInput.value,
              Nacionalidad: nationalityInput.value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                alert.innerHTML = `<p class="alert alert-success"><svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> Formulario enviado</p>`;
                form.reset();
                form.classList.remove("was-validated");
                clearAlert();
              } else {
                alert.innerHTML = `<p class="alert alert-danger"><svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg> Hubo un error al enviar el formulario</p>`;
                clearAlert();
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              alert.innerHTML = `<p class="alert alert-danger"><svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg> Hubo un error al enviar el formulario</p>`;
              clearAlert();
            });
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();