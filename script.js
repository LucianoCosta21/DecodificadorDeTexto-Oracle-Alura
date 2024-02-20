const cripto = document.querySelector('.btn-cripto');
const descript = document.querySelector('.btn-descript');
const text = document.querySelector('.textarea');
const info = document.querySelector('.sidebar_right-itens');
const sidebarText = document.querySelector('.sidebar_right_result');
const textCript = document.querySelector('.sidebar_right_result-text');
const btnCopiar = document.querySelector('.btn-copiar');

const criptografar = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

// criptografar

function encrypt() {
  info.classList.add('hidden');
  sidebarText.classList.remove('hidden');
  const result = text.value;
  const letrasMinuscula = result.toLowerCase();

  const newStr = letrasMinuscula.replace(/e|i|a|o|u/gi, (matched) => {
    return criptografar[matched];
  });

  textCript.innerHTML = newStr;
  text.value = '';
}

cripto.addEventListener('click', encrypt);

//Descriptografar
const descriptografar = {
  enter: 'e',
  imes: 'i',
  ai: 'a',
  ober: 'o',
  ufat: 'u',
};

function decrypt() {
  text.value = '';
  info.classList.remove('hidden');
  sidebarText.classList.add('hidden');
  const result2 = textCript.innerText;

  const newStr2 = result2.replace(/enter|imes|ai|ober|ufat/gi, (matched) => {
    return descriptografar[matched];
  });
  text.value = newStr2;
}

descript.addEventListener('click', decrypt);

// botão copiar

function copyButton() {
  navigator.clipboard.writeText(textCript.innerText);
}

btnCopiar.addEventListener('click', copyButton);
