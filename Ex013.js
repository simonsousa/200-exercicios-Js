/*
    Escreva um programa que calcula o IMC(índice de massa corporal) de uma pessoa e imprime uma mensagem, indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

*/

calcularIMC( 60 , 1.7 );
calcularIMC( 80 , 1.7 );
calcularIMC( 90 , 1.7 );

function calcularIMC( peso , altura ) {
    let IMC = peso / ( Math.pow( altura , 2));
    if ( IMC < 18.5) {

        console.log("Abaixo do peso");

    } else if( IMC >= 18.5 && IMC < 25) {

        console.log("Peso normal");

    } else if ( IMC >= 25 && IMC < 30) {

        console.log("Sobrepeso")

    } else {

        console.log("Obesidade")

    }
}