/*
    Escreva um programa que determina se um número é par ou impar

    descrição: nesse exercicio vc vai criar uma função que vai receber um número como argumento, e determinar se é um número par ou impar
*/

const parOuImpar = (num) => { // minha solução
    if( num % 2 == 0 ) {
        console.log(`${num} é um número par`)
    } else {
        console.log(`${num} é um número impar`)
    }
}

parOuImpar(2)
parOuImpar(3)

