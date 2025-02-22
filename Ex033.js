/*
    Usando um laço for, imprima os primeiros 10 números da sequência de fibonnacci

    Neste exercício, você precisa imprimir os primeiros 10 números da sequência de Fibonacci. A sequência de Fibonacci é uma sequência de números onde cada número subsequente é a soma dos dois anteriores. Ela começa assim: 0, 1, 1, 2, 3, 5, 8, 13...

*/ 

let numA = 0
let numB = 1
let numC = 0
let fibonnacci = ""

// fibonnacci += numA + " " + numB

//minha solução
for (contador = 1; contador <= 8; contador++) { 
    numC = numA + numB
    fibonnacci += " " + numC
    numA = numB
    numB = numC
}
console.log(fibonnacci);


//solução do livro
let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
for(let i = 2; i < 10; i++) {
    let nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
}

/*
    Este código inicia com os dois primeiros números da sequência de Fibonacci(0 e 1) e os imprime. Depois, entra em um laço for que será executado 8 vezes(para imprimir os próximos 8 números da sequência). A cada iteração do laço, calcula o próximo número como a soma dos dois
*/