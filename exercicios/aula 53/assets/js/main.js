const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]

const container = document.querySelector('.container h1');

function createElement(element) {
    const newItem = document.createElement(element.tag)
    newItem.innerHTML = element.texto;
    container.appendChild(newItem)
}

elementos.forEach(elemento => createElement(elemento))