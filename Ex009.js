/*

Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero. Para isso, utilize uma função.

*/

verificarNumero(10)//positivo

verificarNumero(-5)//negativo

verificarNumero(0)//zero

function verificarNumero(num) {
    if (num > 0) {
        
        console.log("O número é positivo");
    
    } else if (num < 0) {

        console.log("O número é negativo");

    } else {

        console.log("O número é zero")

    }
}

/*
    A função verificarNumero verifica se o número passado 
    
    como argumento é maior que 0, menor que 0 ou igual a 
    
    0, usando uma estrutura de controle if / else if / 
    
    else. Se o número for maior que 0, ela imprime "O 
    
    numero e positivo". Se for menor que 0, imprime "O 
    
    numero é negativo". Se for igual a 0, imprime "O 
    
    numero é zero". Ao chamar a função com os números 10, 
    
    -5 e 0, podemos ver essa lógica em ação.
*/