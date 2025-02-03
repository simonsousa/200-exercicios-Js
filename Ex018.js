/*
    Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.

    descrição: Nesse exercício, você vai criar uma função que recebe a idade de uma pessoa e verifica se ela pode dirigir.
*/

const pdDirigir = (idade) => { // minha solução
    if ( idade < 18 ) {
        console.log('Não pode dirigir');
    } else {
        console.log('Pode dirigir');
    }
}
pdDirigir(15)
pdDirigir(18)
pdDirigir(36)

function podeDirigir (idade) { // solução do livro
    if( idade >= 18 ) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    } 
}

podeDirigir(15)
podeDirigir(18)
podeDirigir(36)