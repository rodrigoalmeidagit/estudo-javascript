
function getDay() {
    const h1 = document.querySelector('.container h1')
    const data = new Date()
    // const options = {
    //     weekday: 'long',
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    //     hour: 'numeric', minute: 'numeric', second: 'numeric',
    // }
    const getDate = new Intl.DateTimeFormat('pt-BR',
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric',
        }).format(data)

    h1.innerHTML = getDate

    return getDate
}
// getDay()
setInterval(getDay, 1000)

// function showDate() {

//     function zeroAEsquerda(num) {
//         return num >= 10 ? num : `0${num}`
//     }

//     const h1 = document.querySelector('.container h1');
//     const date = new Date();
//     const day = date.getDay();
//     const weekDay = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     const hour = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     const days = {
//         1: 'Segunda',
//         2: 'Terça',
//         3: 'Quarta',
//         4: 'Quinta',
//         5: 'Sexta',
//         6: 'Sábado',
//         7: 'Domingo'
//     };
//     const months = {
//         1: 'Janeiro',
//         2: 'Fevereiro',
//         3: 'Março',
//         4: 'Abril',
//         5: 'Maio',
//         6: 'Junho',
//         7: 'Julho',
//         8: 'Agosto',
//         9: 'Setembro',
//         10: 'Outubro',
//         11: 'Novembro',
//         12: 'Dezembro'
//     }
//     const result = `${days[day]}, 
//     ${weekDay} de ${months[month]} de ${year} às 
//     ${zeroAEsquerda(hour)}:${zeroAEsquerda(minutes)}:${zeroAEsquerda(seconds)}`;

//     h1.innerHTML = result;

//     return result;
// }
// setInterval(showDate, 1000);