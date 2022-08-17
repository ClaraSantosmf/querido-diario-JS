var lista = [4,	8, 6, 9, 5,	5, 5, 3, 2, 3, 7, 6, 2, 8, 4, 10, 4, 2, 7, 2, 2, 9, 10, 2, 5, 5, 3, 2, 3, 4, 2, 7, 2, 2, 9, 10, 2, 7, 6, 2, 8, 4, 10, 4, 2, 7, 2, 2, 9, 10, 2, 5, 5, 3, 2, 3, 7, 6, 2, 8, 4, 10, 4, 2, 7, 2, 2, 9, 10, 2]

var soma = 0

for (var item in lista) {
    soma += lista[item]
}
console.log("Resultado: " + soma)

function somador(n1, n2){
   var somado = parseInt(n1) + parseInt(n2)
   const resultado = document.querySelector(".resultado")
   resultado.innerHTML = somado
}

function somadoremHTML(){
   const n1  = document.querySelector(".n1").value
   const n2  = document.querySelector(".n2").value
   somador(n1, n2)
}