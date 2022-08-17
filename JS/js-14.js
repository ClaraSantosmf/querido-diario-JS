let listaum = [ 10, 4, 2, 7, 2, 2, 9, 10, 2, 5, 5, 3, 2, 3, 7, 6, 2, 8, 4, 10, 4, 2, 7, 2, 2, 9, 10, 2 ]

let listadois = ['erros', 'eleva', 'duque', 'damas', 'dados', 'creme', 'cofre', 'acode', 'acima', 'achou', 'aches', 'achem']

console.log('oi loops')

for (var i = 0; i < listaum.length; i++){
    console.log('indice=', i, 'elemento:', listaum[i])
}



for (var i in listaum){
    console.log('Indice=', i)
}

for (var elemento of listadois) {
    console.log('Não será impresso o índice, e sim o elemento:', elemento)
}

listadois.forEach(function(elementinho){
    console.log(elementinho)
})