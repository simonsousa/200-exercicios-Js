/*
    Escreva um programa que verifica se um número está dentro de um determinado intervalo

    Neste exercício, você vai criar uma função que recebe três números como argumentos: um número a ser verificado, o limite inferior e o limite superior do intervalo. A função deve imprimir se o número está dentro do intervalo ou não
*/

const verifIntervalo = (n1, n2, n3) => { // minha solução
    if (n2 >= n1 && n2 <= n3) {
        console.log(`${n2} está dentro do intervalo`);
    } else {
        console.log(`${n2} não está dentro do intervalo`);
    }
}
verifIntervalo( 20 , 25 , 30 );
verifIntervalo( 10 , 20 , 15 );

//solução do livro
function dentroDoIntervalo( numero, limiteInferior, limiteSuperior ) {
    if ( numero >= limiteInferior && numero <= limiteSuperior ) {
        console.log(`${numero} está dentro do intervalo`);
    } else {
        console.log(`${numero} não está dentro do intervalo`);
    }
}

dentroDoIntervalo(5,1,10);
dentroDoIntervalo(15,1,10);