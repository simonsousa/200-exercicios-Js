/*
    Usando um laço while, crie um programa que adivinha um número que o usuário pensou através do método de busca binária

    Neste exercício, você vai simular um jogo onde o usuário "pensa" em um número de 1 a 100 e o programa deve adivinhar o número usando o método de busca binária. Para simplificar, vamos super que o número pensado pelo usuário é 50.
    
*/

const decimalParaBinario = (decimal) => { // minha solução
    let binario = "";
    let resto;
    while(decimal > 0) {
        resto = decimal % 2;
        binario += resto;
        decimal = Math.floor(decimal/2);
    }
    let cvtBinario = binario.split('').reverse().join('');
    console.log(cvtBinario)
}

decimalParaBinario(100);
decimalParaBinario(50);
decimalParaBinario(25);
decimalParaBinario(15);


//-------Solução do livro--------------------//
let min = 1;
let max = 100;
let chute = Math.floor((max + min)/2)

let numeroPensado = 40;

while (chute !== numeroPensado) {
    if (chute > numeroPensado) {
        max = chute;
    } else {
        min = chute;
    }
    chute = Math.floor((max + min)/2);
}
console.log(`O número pensado é: ${chute}`);

/*
 * Este código inicia com os valores mínimo e máximo possíveis para o número pensado(1 e 100) e faz um "chute" no meio do intervalo. Enquanto o chute for diferente do número pensado, ajusta o valor mínimo ou máximo de acordo com o chute e faz um novo chute no meio do intervalo atualizado. Quando o chute é igual ao número pensado, o laço termina e o número é impresso
 * 
 */