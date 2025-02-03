/*
    Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado ( considerando que a média para aprovação é 7 ).
*/

calcularMedia(8,6);

calcularMedia(5,6);

function calcularMedia (nota1,nota2) 
{
    let media = (nota1 + nota2)/2
    if (media >= 7) {
        
        console.log("Aluno aprovado com a média: " + media);
    
    } else {

        console.log("Aluno reprovado com a média: " + media);

    }
}

/*
    EXPLICAÇÃO:

    A função calcularMedia recebe duas notas como argumentos ou parâmetros, 
    
    calcula a média dessas notas e, entao, usa uma estrutura de controle if/
    
    else para determinar se o aluno foi aprovado ou reprovado. Se a média for 
    
    maior ou igual a 7, a função imprime "Aluno aprovado com a media: " 
    
    seguido do valor da média. Se a média for menor que 7, a função imprime 
    
    "Aluno reprovado com a média: " seguido do valor da média. Quando 
    
    chamamos a função com as notas 8 e 6, a média é 7 e, portanto, o aluno é 
    
    aprovado. Quando chamamos a função com as notas 5 e 6, a média é 5.5 e, 
    
    portanto, o aluno é reprovado.

*/ 