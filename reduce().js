/*
    Método reduce():
    É uma das ferramentas mais poderosas do JavaScript para manipular arrays. Ele permite que vc "reduza" um array a um único valor, aplicando uma função a cada elemento e acumulando o resultado.

    Como funciona:
        ACUMULADOR: Um valor inicial que será usado para acumular o resultado da função.

        ELEMENTO ATUAL: O elemento atual do array sendo processado.

        ÍNDICE(OPCIONAL): o índice do elemento atual no array.

        ARRAY ORIGINAL: o array completo.

A função que você passa para o reduce() recebe o acumulador e o elemento atual como argumentos, e deve retornar o novo valor do acumulador.        

    Sintaxe:

    array.reduce(function(acumulador, elementoAtual, índice, array) {
        
        Lógica para atualizar o acumulador
    
    }, valorInicial );
*/

const numeros = [1,2,3,4,5];

const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0);

console.log(soma);

//Encontrar o maior valor;

const maior = numeros.reduce((max, numero) => Math.max(max, numero), -Infinity);
console.log(maior)