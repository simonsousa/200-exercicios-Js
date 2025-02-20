/*
    Usando um laço do-while, crie um jogo de "Pedra, papel e tesoute" contra o computador.

    Neste exercício, você vai simular um jogo de "Pedra, papel e tesoura" contra o computador. Para simplificar, vamos supoer que a escolha do usuário é "pedra".
*/ 

//não consegui uma solução para esse problema.

let escolhaUsuario = "pedra";
let escolhaComputador;
let resultado;

do {
    let aleatorio = Math.floor(Math.random() * 3);
    switch(aleatorio) {
        case 0:
            escolhaComputador = "pedra";
            break;
        case 1:
            escolhaComputador = "papel";
            break;
        default:
            escolhaComputador = "tesoura";
    }
    if((escolhaUsuario === "pedra" && escolhaComputador === "tesoura") || (escolhaUsuario === "papel" && escolhaComputador === "pedra") || (escolhaUsuario === "tesoura" && escolhaComputador === "papel")) {
        resultado = "Usuário ganhou!";
    } else {
        if (escolhaUsuario === escolhaComputador) {
            resultado = "Empate!";
        } else {
            resultado = "Computador ganhou!";
        }
        console.log(`Usuário: ${escolhaUsuario} - Computador: ${escolhaComputador} - Resultado: ${resultado}`)
    }
}while(resultado === "Empate!");    

//este código inicia com a escolha do usuário("pedra") e escolhe uma opção aleatória para o computador("pedra","papel" ou "tesoura"). Depois, verifica qual opção ganha de acordo com as regras do jogo e define o resultado