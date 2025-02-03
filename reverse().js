var message = "Olá, meu nome é Simon Oliveira Sousa, tenho 21 anos, estou estudando javaScript, e moro na cidade de Fortaleza";

var newMessage = message.split(',')

console.log(newMessage)

//método reverse(): Este método pega os índices de um Array, e reverte, ou seja, o que estava no primeiro índice, vai para o último, invertendo toda a ordem dos índices. Por exemplo, temos um vetor de 5 índices(de 0-4), o que está no index[0] vai para o index[4]

newMessage = newMessage.reverse().join(' ')//inverteu o primeiro e último, e juntou tudo em uma string só com espaço

console.log(newMessage)
