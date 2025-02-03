/*
    método map():
    é utilizado quando eu quiser operar por completo, os elementos de uma coleção, com o fim de retornar alguma coisa.

    Cada elemento da coleção vai para o 1º parâmetro

    O indice ou posição de cada elemento vai para o 2º parametro.

    se eu for executar alguma coisa dentro do map, eu preciso de uma função para isso.
*/

// const cursos = ['HTML','CSS','JavaScript','PHP','React']

/*
cursos.map((elemento, indice) => {
    console.log(`Curso: ${elemento} - Posição do curso: ${indice}`)})

let variavel = cursos.map((elemento, indice) => {
return elemento
})

console.log(variavel)
*/

//let elements = document.getElementsByTagName("div") // vai pegar todas as tags <div>, e transformar em uma coleçãoHTML

//elements = [...elements] // spread(espalhamento) ; preciso utilizar este método para que o método map() não dê erro no website, pq não é uma coleção iterável
// console.log(elements)


// elements.map(( element, index ) => { 
//     element.innerHTML = `Substituindo elemento na posição ${index}`
// })


// const elements = document.getElementsByTagName("div");
// const valores = Array.prototype.map.call(elements,({innerHTML})=>innerHTML)
// console.log(valores)


const converterInt = (elem) => Number(elem)
const potenciaElemento = (elem) => Number(Math.pow(elem,2))

let num = ['1','2','3','4','5']

console.log(num)

let num2 = ['1','2','3','4','5'].map(potenciaElemento)

console.log(num2)