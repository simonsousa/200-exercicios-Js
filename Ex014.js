/*
    nesse exercício, vc vai criar uma função que recebe um ano e verifica se ele é bissexto. Um ano é bissexto se for divisível por 4, exceto os que são divisíveis por 100, mas não por 400
*/

isBissexto(2000)//imprime bissexto
isBissexto(2001)//imprime não é bissexto
isBissexto(2100)//imprime não é bissexto

function isBissexto(ano) {
    if ( (ano % 4 == 0 && ano % 100 != 0) || ( ano % 400 == 0) ) {
        console.log(`${ano} é um ano bissexto`)
    } else {
        console.log(`${ano} não é um ano bissexto`)
    }
}