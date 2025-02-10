/*
    Usando um laço do-while, imprima todos os números ímpares de 1 a 20.

    Neste exercício, você deve criar um loop usando a estrutura de repetição do-while que percorra todos os números ímpares de 1 a 20.
*/

let i = 1; 
do {        // minha solução
    console.log(i);
    i += 2;
} while (i <= 20);


let j = 1;  // solução do livro
do {
    if (j % 2 != 0) {
        console.log(j);
    }
    j++;
}while(j <= 20);