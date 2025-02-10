/*
    Escreva um programa que verifica as cores de um semáforo

    Neste exercício, você deve criar uma função que recebe uma cor, e imprime no console o que essa cor representa, o console deve imprimir uma mensagem específica para cores que não existem em um semáforo
*/ 

corSemaforo('vermelho');
corSemaforo('amarelo');
corSemaforo('verde');
corSemaforo('roxo');

function corSemaforo(cor) { // minha solução
    switch (cor) {
        case "vermelho":
            console.log('Pare!!')
            break;

        case "amarelo":
            console.log('Atenção!!')
            break;
        
        case "verde":
            console.log('Siga!!')
            break;

        default:
            console.log('Esta cor não existe no semaforo')
            break;
    }
}

function verificaSemaforo(cor) { // solução do livro
    if (cor === "verde") {
        console.log("Siga em frente.");
    } else if (cor === "amarelo") {
        console.log("Atenção, diminua a velocidade.");
    } else if (cor === "vermelho") {
        console.log("Pare seu veículo.")
    } else {
        console.log("Envie uma cor válida");
    }
}

verificaSemaforo("verde");
verificaSemaforo("amarelo");
verificaSemaforo("vermelho");
verificaSemaforo("azul");