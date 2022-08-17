function exibir (num){
    console.log ("A operação resultou em " +  num)
}

function soma(a , b, cb){
    var op = a + b
    cb(op) 
}

function multiplicacao(a , b, cb){
    var op = a * b
    cb(op) 
}

soma(4, 6, exibir)
multiplicacao(4, 6, exibir)

function somador(n1, n2){
    return new Promise ((resolve, reject) => {
        if (typeof n1 != 'number'){
            reject('Isso não é um número')
        }
        let resultado = n1 + n2 
        resultado(resultado)
    })
}