const email = document.getElementById("email"),
  asunto = document.getElementById("asunto"),
  mensaje = document.getElementById("mensaje"),
  btnEnviar = document.getElementById("enviar"),
  formularioEnviar = document.getElementById("enviar-mail"),
  btnReset = document.getElementById("resetBtn");

function enventListenrs() {
  document.addEventListener("DOMContentLoaded", inicioApp);
  email.addEventListener("blur", validarCampo);
  asunto.addEventListener("blur", validarCampo);
  mensaje.addEventListener("blur", validarCampo);
  formularioEnviar.addEventListener("submit", enviarEmail);
  btnReset.addEventListener("click", resetFormulario);
}

function inicioApp() {
  btnEnviar.disabled = true; //Deshabilita el botón enviar al cargar la pagina
}

function validarCampo() {
  validarLongitud(this);
  if (this.type === "email") {
    validarEmail(this);
  }

  let errores = document.querySelectorAll(".error");
  if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    //Se habilita el botón enviar cuando los campos tienen contenido
    if (errores.length === 0) {
      // Se comprueba que no exista absolutamente ningún error
      btnEnviar.disabled = false;
    }
  }
}

function validarLongitud(campo) {
  //Se valida que haya algo escrito en los inputs del formulario
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "green"; //borderBottomColor por Materialize
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

function validarEmail(campo) {
  const inputEmail = campo.value;
  if (inputEmail.indexOf("@") !== -1 && inputEmail.indexOf(".") !== -1) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

function enviarEmail(e) {
  const spinnerGif = document.querySelector("#spinner");
  spinnerGif.style.display = "block";
  const enviado = document.createElement("img");
  enviado.src = "img/mail.gif";
  enviado.style.display = "block";

  setTimeout(() => {
    spinnerGif.style.display = "none";
    document.querySelector("#loaders").appendChild(enviado);
    setTimeout(() => {
      enviado.remove();
      formularioEnviar.reset();
    }, 3000);
  }, 3000);
  e.preventDefault();
}

function resetFormulario(e) {
  e.preventDefault();
  formularioEnviar.reset();
}

enventListenrs();
