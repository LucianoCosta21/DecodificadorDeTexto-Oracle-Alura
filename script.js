let cripto = document.querySelector('.btn-cripto');
let descript = document.querySelector('.btn-descript');
let text = document.getElementById('textarea');
let info = document.querySelector('.sidebar_right-itens');
let sidebarText = document.querySelector('.sidebar_right_result');
let textCript = document.querySelector('.sidebar_right_result-text');
let btnCopiar = document.querySelector('.btn-copiar');

let criptografar = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

// criptografar

cripto.addEventListener('click', () => {
  info.classList.add('hidden');
  sidebarText.classList.remove('hidden');
  let result = text.value;
  let letrasMinuscula = result.toLowerCase();

  let newStr = letrasMinuscula.replace(/e|i|a|o|u/gi, (matched) => {
    return criptografar[matched];
  });

  textCript.innerHTML = newStr;
  text.value = '';
});

//Descriptografar
let descriptografar = {
  enter: 'e',
  imes: 'i',
  ai: 'a',
  ober: 'o',
  ufat: 'u',
};

descript.addEventListener('click', () => {
  text.value = '';
  info.classList.remove('hidden');
  sidebarText.classList.add('hidden');
  let result2 = textCript.innerText;

  let newStr2 = result2.replace(/enter|imes|ai|ober|ufat/gi, (matched) => {
    return descriptografar[matched];
  });
  console.log(newStr2);
  text.value = newStr2;
  console.log(text);
});

// botão copiar

btnCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(textCript.innerText);
});

/*
let str = 'I have a Lenovo Laptop, a Honor Phone, and a Samsung Tab.';
let Obj = {
  Lenovo: 'Dell',
  Honor: 'OnePlus',
  Samsung: 'Lenovo',
};

function GFG_Fun() {
  console.log(
    str.replace(/Lenovo|Honor|Samsung/gi, function (matched) {
      return Obj[matched];
    }),
  );
}
GFG_Fun();
 */
