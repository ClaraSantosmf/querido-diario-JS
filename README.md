# Querido diário, hoje eu tentei aprender o JavaScript...

# Onde rodar um código JS #02
Querido diário, hoje aprendi a rodar JavaScript dentro de um código HTML diretão!
Isso porquê o HTML reconhece a tag <script> </script> como uma injeção de código JS no meio do texto! 
Então eu fiz o documento js-01.html com as ideias! 

# Sintaxe & Lógica de Programação #03

Querido diário, hoje vimos sintaxe e lógica de programação. A ideia foi percorrer cada elemento de uma lista e depois soma-los, aprensentando, por fim, o resultado. Foi a primeira vez que usamos for. 

# Comentários #04

Querido diário, hoje eu aprendi a comentar com // em caso de uma linha e /** e */ para grandes blocos. Sem comentários. 

# Sintaxe e Caracteres #05

Querido diário, hoje eu aprendi a colocar aspas simples ou duplas, ou anular o significado de um caractere especial com uma contra barra -> \. Além disso, o significado de craze e ${}. Dentro de dolar chaves eu posso colocar minhas variáveis apra serem impressas. O que está rolando é uma interpolação de string. O documento js-03.js tem os exemplos desse experimento. 
Caracteres que começam com o backslash ( \ ) são chamados de metacaracteres, eles adicionam "valores codificados" dentro de uma string

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences

# Case sensitivity #06

Querido diário, eu descobri que o JS se importa com maiúsculo e minúsculo. Variáveis que não vão mudar, você deve escrever tudo MAIÚSCULO. Para classes e objetos, usa o CamelCase. Para variáveis privadas ou protegidas, existe um _underline antes da variáveis. Sem códigos hoje. 

# Tipos de Dados (Data Types) #07

Querido diário, descobri que no JS tem string, number, boolean, null underfined, bigInt, Symbol e objects como tipos primitivos da linguaguem, são imutáveis e os dados de mais baixo nível. Também tem de diferente o a dupla negação !!, que quando inserido no typeof oferece um resultado booleano. Dá para criar symbol! com o statuses. Tem código no js-04.js

# Declaração e atribuição de variáveis 🖱 #08

Querido diário, agora eu soube que o JS é fracamento tipado, podendo mudar de tipo de variável com uma reatribuição. Cria-se a variável com var, let ou const, e depois você pode fazer a atribuição de valor e tipo. Caso não faça a atribuição, o typeof será undefined, ou seja, não foi definido. Variáveis na memoria ocupa um espaço e um rótulo, onde há um endereço de referência. Tem código no js-05.js.

# Escopos (var, let e const) 🔎 #09

Querido diário, tem var, let e const. E a regra é let, pois let tem um escopo reduzido. Inclusive, ao declarar let, o compilador xia para não fazer sobrescrições. Então a variável resultado do código js-06.js teve que ser trocada por outra, visto que o código acusou que 'resultado' já havia sido declarada. O var tem um alcance muito maior, isso significa que sangra valores para fora do seu escopo. Então, quando houve um let colocado dentro de um for para item2, a tentativa de imprimir ela fora do escopo falha. "console.log('item -->', item2), ReferenceError: item2 is not defined.". Agora o const, representado por variável EM CAIXA ALTA, 'Uncaught TypeError: assigment to constant variable', ou seja, a variável não muda e não recebe reatribuições, como por exemplo, o valor de PI. Tem código no js-06.js.

# Palavras reservadas #10

Querido diário, palavra reservada são aquelas que não podemos utilizar como nome de variável, pois elas já são usadas pelo JS para aplicar funções nativas da linguaguem. Nãooo pode declarar variáveis como new, let, var, for. Para com isso, usa outras ai! Sem código dessa vez. 

# Operadores Aritméticos 🖱 #11
Querido diário, aquela coisa né, somar, subtrair, elevar, e etc. Tem código no js-07.js. O detalhe é que ao tentar somar uma string de números com um inteiro, ele vai dar prioridade a converter isso tudo em string na soma ("40" + 2) = 402. PORÉM, quando você tenta subtrair, ele subentende que é mais lógico ele converter todo mundo para Number ("40" - 2) = 38.