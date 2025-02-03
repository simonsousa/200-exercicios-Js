/*
    Escreva um programa que imprime uma classificação baseada na nota de um aluno

    Neste exercício, você vai criar uma função que recebe uma nota de um aluno como argumento e imprime uma classificação com base nessa nota.

*/ 

const notaDoAluno = (nota) => { // minha solução
    let media = 6
    if ( nota < media ) {
        console.log('Aluno reprovado');
    } else {
        console.log('Aluno aprovado');
    }
}
notaDoAluno(5.5)

function classificarAluno (nota) {// solução do livro
    if(nota >= 90) {
        console.log("A");
    } else if ( nota >= 80 ) {
        console.log("B");
    } else if (nota >= 70) {
        console.log("C");
    } else if (nota >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}
classificarAluno(95);
classificarAluno(82);
classificarAluno(74);
classificarAluno(62);
classificarAluno(55);