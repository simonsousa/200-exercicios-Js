/*
    Escreva um programa que determina o número de dias em um mês

    Neste exercício, você criará uma função que recebe o número de um mês e imprime o número de dias desse mês

*/ 

let saberQuantosDias = (numMes) => {
    switch (numMes) { // minha solução
        case 1://janeiro
            console.log('31 dias')
            break;
        case 2://fevereiro
            console.log('28 ou 29 dias')
            break;
        case 3://Março
            console.log('31 dias')
            break;
        case 4://Abril
            console.log('30 dias')
            break;
        case 5://Maio
            console.log('31 dias')
            break;
        case 6://Junho
            console.log('30 dias')
            break;
        case 7://Julho
            console.log('31 dias')
            break;
        case 8://Agosto
            console.log('31 dias')
            break;
        case 9://Setembro
            console.log('30 dias')
            break;
        case 10://Outubro
            console.log('31 dias')
            break;
        case 11://Novembro
            console.log('30 dias')
            break;
        case 12://Dezembro
            console.log('31 dias')
            break;
        default:
            console.log('mes inválido')
            break;
    }
}
saberQuantosDias(2);
saberQuantosDias(4);
saberQuantosDias(1);



determinarDiasNoMes(2);
determinarDiasNoMes(4);
determinarDiasNoMes(1);

function determinarDiasNoMes(mes){
    switch (mes) { // solução do livro
        case 1://janeiro
            console.log('31 dias')
            break;
        case 2://fevereiro
            console.log('28 ou 29 dias')
            break;
        case 3://Março
            console.log('31 dias')
            break;
        case 4://Abril
            console.log('30 dias')
            break;
        case 5://Maio
            console.log('31 dias')
            break;
        case 6://Junho
            console.log('30 dias')
            break;
        case 7://Julho
            console.log('31 dias')
            break;
        case 8://Agosto
            console.log('31 dias')
            break;
        case 9://Setembro
            console.log('30 dias')
            break;
        case 10://Outubro
            console.log('31 dias')
            break;
        case 11://Novembro
            console.log('30 dias')
            break;
        case 12://Dezembro
            console.log('31 dias')
            break;
        default:
            console.log('mes inválido')
            break;
    }
}

