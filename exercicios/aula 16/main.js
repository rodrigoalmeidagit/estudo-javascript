const form = document.querySelector('.form')
const txt = document.querySelector('#text');

const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');

const btn = document.querySelector('#btn');

const array = [];

function handleClick(e) {
    e.preventDefault();

    txt.innerHTML += `
    ${nome.value}
    ${sobrenome.value}
    ${peso.value}
    ${altura.value}
    </br >`

    array.push(
        {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: +peso.value,
            altura: +altura.value
        }
    )
    console.log(array)
    form.reset()
    nome.focus()

    return array;
}


btn.addEventListener('click', handleClick);
