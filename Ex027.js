/*
    Usando um laço for, imprima a tabuada de multiplicação do número 5.

    Neste exercício você deve criar uma estrutua de repetição for que percorra de 1 a 10, e imprima a tabuada de multiplicação do número 5
*/

for(let i = 1; i <= 10; i++) { // minha solução
    console.log(`${i} x 5 = ${i*5}`);
}

for(let j = 1; j <= 10; j++) { // solução do livro
    console.log("5 X " + j + " = " + 5*j);
}