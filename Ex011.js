/*
Escreva um programa que verifica se uma pessoa pode votar com base na idade.

*/ 

analisarSePodeVotar(12);

analisarSePodeVotar(16);

analisarSePodeVotar(17);

analisarSePodeVotar(18);

analisarSePodeVotar(23);

analisarSePodeVotar(52);

analisarSePodeVotar(78);

function analisarSePodeVotar( idade ) { //minha resolução
    if( idade < 16 ) {
        
        console.log(idade +' não pode votar');
    
    } else if ( idade >= 16 && idade <= 17 ) {

        console.log(idade +' pode votar, mas não é obrigado');

    } else if ( idade >= 18 && idade < 70 ) {

        console.log(idade +' voto obrigatório');

    } else {

        console.log(idade +' pode votar, mas não é obrigado');

    }
}

console.log('\n---------SEPARAÇÃO DE CÓDIGOS-----------')

function podeVotar( idade ) { // resolução do livro
    if( idade >= 18 && idade < 70 ) {
       
        console.log('Voto Obrigatório.');

    } else if ( (idade >= 16 && idade < 18) || ( idade >= 70 ) ) {

        console.log('Voto Facultativo.');

    } else {

        console.log('Não vota.')

    }
}
podeVotar(15);

podeVotar(16);

podeVotar(18);

/*
    A função podeVotar recebe uma idade como argumento e, então, usa uma 
    
    estrutura de controle if / else if / else para determinar a 
    
    obrigatoriedade do voto para essa idade. Se a idade for maior ou igual a 
    
    18 e menor que 70, a função imprime "Voto obrigatório.". Se a idade for 
    
    maior ou igual a 70, a função imprime "Voto facultativo." Caso contrário, 
    
    a função imprime "Não vota.".Quando chamamos a função com as idades 15, 
    
    16, 18, 70, podemos ver essa lógica em ação.
*/ 