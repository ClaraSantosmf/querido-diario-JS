let pessoa = 'José Pedro'
let anoNascimento = 1980
let anoAtual = 2022

let idade = anoAtual - anoNascimento
let resultado = `A idade de ${pessoa} no ano de ${anoAtual} é ${idade}` 

console.log(resultado)

// o resultado2 foi necessário para que não houvesse sobescrição
let idadenova = (anoAtual + 5) - anoNascimento
let resultado2 = `A idade de ${pessoa} no ano de ${anoAtual} é ${idadenova}` 

console.log(resultado2)

var lista = [1, 2, 3, 4, 5]
var soma = 0
for (var item in lista) {
    soma = soma + lista[item]
    var texto = `soma atual: ${soma}`
}

console.log('lista -->', lista)
console.log('item -->', item)
console.log('soma -->', soma)
console.log('texto -->', texto)


var lista = [1, 2, 3, 4, 5]
var soma = 0
for (let item2 in lista) {
    soma = soma + lista[item]
    var texto = `soma atual: ${soma}`
}

console.log('lista -->', lista)
console.log('item -->', item2)
console.log('soma -->', soma)
console.log('texto -->', texto)