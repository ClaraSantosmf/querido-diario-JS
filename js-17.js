function soma (n1, n2){
    let soma = n1 + n2
    return soma
}

console.log(soma)
console.log(soma(2,2))

function fazerPao(quantidade){
    let paes =[]
    for (var i=0; i< quantidade; i ++){
    paes.push('🍞')
    }
    return paes    
}

const fazerBaguete = function (quantidade){
    let baguete =[]
    for (var i=0; i< quantidade; i ++){
    baguete.push('🥖')
    }
    return baguete    
}

console.log(fazerPao(4).join(''), fazerBaguete(3).join(''))