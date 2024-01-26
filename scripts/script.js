function crip() {
  let textArea = document.querySelector(".program__textArea");
  let text = textArea.value;

  let errorMessage = document.querySelector(".error-message");

  if (!/^[a-z\s.,!?]+$/i.test(text) || /[A-ZÀ-ÚÂ-ÛÄ-Ü]/.test(text)) {
    errorMessage.textContent = "Por favor, digite apenas letras minúsculas, espaços e pontuações (.,!?)";
    return;
  }

  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/a/g, "ai");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");

  listaFrase = text.split("").map((letra) => {
    return letra;
  });

  exibirResultado();

  // Limpar mensagem de erro se não houver erro
  errorMessage.textContent = "";
}

function descrip() {
  let textArea = document.querySelector(".program__textArea");
  let text = textArea.value;

  let errorMessage = document.querySelector(".error-message");

  if (!/^[a-z\s.,!?]+$/i.test(text) || /[A-ZÀ-ÚÂ-ÛÄ-Ü]/.test(text)) {
    errorMessage.textContent = "Por favor, digite apenas letras minúsculas, espaços e pontuações (.,!?)";
    return;
  }

  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ai/g, "a");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");

  listaFrase = text.split("").map((letra) => {
    return letra;
  });

  exibirResultado();

  // Limpar mensagem de erro se não houver erro
  errorMessage.textContent = "";
}

function exibirResultado() {
  let image = document.querySelector(".program__img");
  let h1 = document.querySelector(".program__rec__h1");
  let p = document.querySelector(".program__rec__p");
  let btn = document.querySelector(".program__rec__btn");
  let hiddenText = document.querySelector(".program__rec__pHidden");

  if (listaFrase.length === 0) {
    image.src = "assets/nomessage.svg";
    h1.textContent = "Nenhuma mensagem encontrada";
    hiddenText.textContent = "";
    p.textContent = "Digite um texto que você deseja criptografar ou descriptografar";
    btn.setAttribute('hidden', true);
  } else {
    image.setAttribute('hidden',true);
    hiddenText.textContent = listaFrase.join("");
    p.textContent = "";
    h1.textContent = "";
    btn.removeAttribute('hidden');
    hiddenText.removeAttribute('hidden');
  }
}

function copyText() {
  let textToCopy = document.querySelector(".program__rec__pHidden").textContent;

  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Texto copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  }
}
