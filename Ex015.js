/*
    Um palindromo é uma palavra que tem a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita. Nesse exercício, vc irá criar uma função que recebe uma palavra como argumento e verifica se ela é um palíndromo.
*/ 

function isPalindromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('');
    if (palavra === palavraInvertida) {
        console.log(`${palavra} é um palíndromo`);
    } else {
        console.log(`${palavra} não é um palíndromo`)
    }
}

isPalindromo("arara")
isPalindromo("hannah")
isPalindromo("gato")

let teste = 'palavra'

let newTeste = teste.split('')//aqui, o split() separa cada letra, pois ele não acha nenhum critério de divisão dentro de 'palavra'

console.log(newTeste)