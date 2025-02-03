//método split(): Recurso do javaScript utilizado para você pegar uma string, e dividi-la em substrings.

let frutas = 'Abacaxi, Morango, Maçã, Goiaba';
frutas = frutas.split(',')//padrão de divisão(,): Ou seja, toda vez, que o método encontrar a vírgula dentro da minha variável, ele vai utilizar este caractere como critério de divisão, e armazenar novamente os valores na minha variável frutas, que agora é um Array(vetor) ou variável composta.

console.log(frutas[0])
