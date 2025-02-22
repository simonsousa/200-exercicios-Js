/*
    Usando um laço for, imprima os primeiros 10 números da sequência de fibonnacci

*/ 

let numA = 0
let numB = 1
let numC = 0
let fibonnacci = ""

fibonnacci += numA + " " + numB

for (contador = 1; contador <= 8; contador++) {
    numC = numA + numB
    fibonnacci += " " + numC
    numA = numB
    numB = numC
}

console.log(fibonnacci);