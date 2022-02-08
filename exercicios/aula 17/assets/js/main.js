const $form = document.querySelector('#form');
const $peso = document.querySelector('#peso');
const $altura = document.querySelector('#altura');
const $response = document.querySelector('.show');

function handleImc(e) {
    e.preventDefault();
    const peso = +$peso.value;
    const altura = +$altura.value;

    if (!peso || !altura) {
        setImcResponse(`Peso ou Altura inválidos`, false);
        return
    }

    const imc = getImc(peso, altura);
    const imcResult = getImcResponse(imc);
    const msg = `Seu IMC é ${imc} (${imcResult})`

    setImcResponse(msg, true);
}

function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function getImcResponse(imc) {
    const imcResponse = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ]

    if (imc >= 39.9) return imcResponse[5];
    if (imc >= 34.9) return imcResponse[4];
    if (imc >= 29.9) return imcResponse[3];
    if (imc >= 24.9) return imcResponse[2];
    if (imc >= 18.5) return imcResponse[1];
    if (imc < 18.5) return imcResponse[0];
}

function setImcResponse(msg, isValid) {
    const p = document.createElement('p');
    $response.innerHTML = ''

    if (isValid) {
        p.classList.add('validImc')
    } else {
        p.classList.add('invalidImc')
    }

    p.innerHTML = msg;
    $response.appendChild(p);

}

$form.addEventListener('submit', handleImc);