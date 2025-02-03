/*
    Escreva um programa que determina o maior entre três números.

    descrição: Nesse exercício, você irá criar uma função que recebe três números como argumentos e imprime o maior deles
*/

verificarMaior(-17 , 0 , 50 )

function verificarMaior( n1 , n2 , n3 ) { // minha solução
    let vetor = [ n1 , n2 , n3 ]
    let maior = vetor[0];
    for( let i = 0; i < vetor.length; i++ ) {
        if( vetor[i] > maior ) {
            maior = vetor[i]
        }
    }
    console.log(`${maior} é o maior número\n`)
}

function maiorNumero( n1 , n2 , n3 ) { // solução do livro
    if(n1 > n2 && n1 > n3) {
        console.log(`${n1} é o maior número`)
    } else {
        if( n2 > n1 && n2 > n3 ) {
            console.log(`${n2} é o maior número`)
        } else {
            if ( n3 > n1 && n3 > n2 ) {
                console.log(`${n3} é o maior número`)
            }
        }
    }
}
maiorNumero(1,2,3)
maiorNumero(5,3,4)
maiorNumero(7,8,7)