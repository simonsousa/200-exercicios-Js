/*
    Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.

    Neste exercício, você deve criar um loop usando a estrutura de repetição while, que percorra de 1 a 100, e calcule a soma de todos eles.

*/ 
let soma = 0;
let i = 1;
while(i <= 100) {
    soma += i;
    i++;
}

console.log(soma);
