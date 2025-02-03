/* 
    Escreva um programa que verifica a analisarSituação de um estudante de acordo com sua média final;

    ->aprovado(media igual ou superior a 7), se em 
    
    ->recuperação(média entre 5 e 6.9) ou se 
    
    ->reprovado (média abaixo de 5).
*/

analisarSituação(7);

analisarSituação(6.91); // esse tipo de argumento pode cair no else da função que eu criei, melhore nos intervalos, na segunda condição.

analisarSituação(4);

function analisarSituação( media )  //minha resolução
{
    if( media >= 7 ) {

        console.log('Aprovado');

    } else if ( media >= 5 && media <= 6.9 ) {//cuidado

        console.log('Recuperação');

    } else {

        console.log('Reprovado');

    }
}

console.log('\n')

function situaçaoEstudante( mediaFinal ) { // resolução do livro
    if( mediaFinal >= 7 ) {

        console.log("Aprovado.");

    } else if ( mediaFinal >= 5 && mediaFinal < 7) {

        console.log("Em Recuperação.");

    } else {

        console.log("Reprovado.");

    }
}

situaçaoEstudante(7);

situaçaoEstudante(6);

situaçaoEstudante(4);

/*

A função situaçãoEstudante recebe uma média final como 

argumento e, entao, usa uma estrutura de controle if / else 

if / else para determinar a situação do estudante com base 

nessa média. Se a média for maior ou igual a 7, a função 

imprime "Aprovado". Se a média for maior maior ou igual a 5 e 

menor que 7, a função imprime "Em recuperação". Caso 

contrário, a função imprime "Reprovado". Quando chamamos a 

função com as médias 7, 6 e 4, podemos ver essa lógica em 

ação.

*/ 