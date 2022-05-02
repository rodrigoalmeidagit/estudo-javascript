const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]

const container = document.querySelector('.container h1');
const div = document.createElement('div');

function createElement(element) {
    const newItem = document.createElement(element.tag)
    const newItemText = document.createTextNode(element.texto);
    newItem.appendChild(newItemText)
    div.appendChild(newItem)
    container.appendChild(div)
}

elementos.forEach(elemento => createElement(elemento))