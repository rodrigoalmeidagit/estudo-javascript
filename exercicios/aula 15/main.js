const num = Number(prompt('Digite um número: '));
const title = document.querySelector('.title');
let text = document.querySelector('.text');


title.innerHTML = num;
text.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(num)}</strong> <br />`
text.innerHTML += `${num} é inteiro? <strong>${Number.isInteger(num)}</strong> <br />`
text.innerHTML += `${num} é NaN? <strong>${Number.isNaN(num)}</strong> <br />`
text.innerHTML += `Arredondando para baixo: <strong>${Math.floor(num)}</strong> <br />`
text.innerHTML += `Arredondando para cima: <strong>${Math.ceil(num)}</strong> <br />`
text.innerHTML += `Com duas casas decimais: <strong>${num.toFixed(2)}</strong> <br />`
