let lista1 = [4, 8, 6, 9, 5,	5, 5, 3, 2, 3, 7, 6, 2];
let lista2 = ["almeida", "silva", "amado", "miranda"];
let lista3 = [42, "almeida", [1 ,2 ,3], lista1];

console.log(lista1, lista2, lista3)

// substituindo um valor 
lista1[4] = 0

console.log(lista1)

// inserir elemento com push
 lista2.push(100)
 console.log(lista2)

 // Retirando elemento com pop
 lista3.pop()
 console.log(lista3)

 // juntas duas listas

var lista4 = lista1.concat(lista2)
console.log(lista4)

var lista5 = lista1.slice(2,6)
console.log(lista5)

console.log(lista1.length)
console.log(lista1[14] = 15)
console.log(lista1)

