const passwordInput = document.querySelector("#passwordInput");
passwordInput.addEventListener("input", function () {
  const password = this.value;
  const passwordNivelBarra = document.querySelector("#password-nivel-barra");
  const passwordTexto = document.querySelector("#password-texto");

  const forca = {
    0: "Muito fraca",
    1: "Fraca",
    2: "Moderada",
    3: "Forte",
    4: "Muito Forte",
  };

  let score = 0;

  let caracteres = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]$/;

  //Se for mais que 8 incrementa
  if (password.length >= 8) score++;
  //Se tiver na condição incrementa
  if (password.match(/[a-z]/)) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  // if (password.match(/[^a-zA-Z0-9]/)) score++;
  if (password.match(caracteres)) score++;

  const width = (score / 4) * 100;
  console.log(password)

  switch (score) {
    case 1:
      passwordNivelBarra.style.backgroundColor = "#e70b0b";
      break;
    case 2:
      passwordNivelBarra.style.backgroundColor = "#ffb74d";
      break;
    case 3:
      passwordNivelBarra.style.backgroundColor = "#fff176";
      break;
    case 4:
      passwordNivelBarra.style.backgroundColor = "#81C784";
      break;
    default:
      passwordNivelBarra.style.backgroundColor = "transparent";
  }

  passwordNivelBarra.style.width = `${width}%`;

  if (password.length > 0) {
    passwordTexto.innerHTML = `Senha:${forca[score]}`;
  } else {
    passwordTexto.innerHTML = "";
  }
});
