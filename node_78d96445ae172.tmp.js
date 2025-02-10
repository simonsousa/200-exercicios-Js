/*
    Usando um laço for, imprima todos os números primos de 1 a 100.

    Neste exercício, você precisa percorrer todos os números de 1 a 100 e imprimir apenas aqueles que são primos. Lembre-se, um número primo é um numero natural maior do que 1 que não tem divisores positivos, apenas 1, e ele mesmo.
*/

for(let i = 1; i <= 100; i++) { // minha solução
    let primo = true;
    for(let j = 2; j < i; j++) {
        if( i % j == 0) {
            primo = false;
        }
    }
    if(primo == true) {
        console.log(i);
    } else {
        continue;
    }
}