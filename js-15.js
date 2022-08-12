
let listadois = ['erros', 'eleva', 'duque', 'damas', 'dados', 'creme', 'cofre', 'acode', 'acima', 'achou', 'aches', 'achem']

for(var elementos of listadois){
    if (elementos == 'damas') {
        console.log('Achei')
        break
    }
    console.log('elemento', elementos)
}

console.log('fim')


for(var elementos of listadois){
    if (elementos == 'damas') {
        console.log('Achei')
        continue
    }
    console.log('elemento', elementos)
}

console.log('fim')