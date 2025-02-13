/*
    Usando um laço for, imprima todos os números primos de 1 a 100.

    Neste exercício, você precisa percorrer todos os números de 1 a 100 e imprimir apenas aqueles que são primos. Lembre-se, um número primo é um numero natural maior do que 1 que não tem divisores positivos, apenas 1, e ele mesmo.
*/

for( let i = 2; i <= 100; i++ ) { // minha solução
    let primo = true;
    for( let j = 2; j < i; j++ ) {
        if( i % j == 0 ) {
            primo = false;
        }
    }
    if( primo ) {
        console.log(i);
    }
}

console.log('--------------------------')

for( let num = 2; num <= 100; num++ ) // solução do livro
{
    let isPrime = true;
    for( let div = 2; div < num; div++ ) {
        if(num % div == 0) {
            isPrime = false;
            break;
        }
    }
    if( isPrime ) {
        console.log(num);
    }
}
/*

    Aqui temos um laço for externo que percorre os números de 2 a 100 e um laço for interno que verifica se algum número entre 2 e o número em questão(excluindo-0) é divisor desse número. Se encontrar algum divisor, a variável isPrime é definida como false e o laço interno é interrompido. Se nenhum divisor for encontrado, isPrime permanecerá true e o número será impresso.

*/ 