/*
    Escreva um programa que determina a estação do ano com base no mês.

    Neste exercício, vc criará uma função que recebe um número de 1 a 12(representando os meses de janeiro a dezembro) e imprimirá a estação do ano correspondente

*/ 
const saberEstação = (mes) => { //minha solução
    if ((mes == 12) || ( mes >= 1 && mes < 3)) {
        
        console.log('Verão');
    
    } else if (mes >= 3 && mes < 6) {
        
        console.log('Outono');
    
    } else if (mes >= 6 && mes < 9) {
        
        console.log('Inverno');
    
    } else if (mes >= 9 && mes < 12) {
        
        console.log('Primavera');
    
    } else {
        
        console.log('mês invalido');
    
    }
}   
saberEstação(12);
saberEstação(4);
saberEstação(7);
saberEstação(10);

