# Querido diário, hoje eu tentei aprender o JavaScript...

## Onde rodar um código JS #02
Querido diário, hoje aprendi a rodar JavaScript dentro de um código HTML diretão!
Isso porquê o HTML reconhece a tag <script> </script> como uma injeção de código JS no meio do texto! 

Então eu fiz o documento js-01.html com as ideias! 

## Sintaxe & Lógica de Programação #03

Querido diário, hoje vimos sintaxe e lógica de programação. A ideia foi percorrer cada elemento de uma lista e depois soma-los, aprensentando, por fim, o resultado. Foi a primeira vez que usamos for. 

Tem documento js-02.js como anexo. 

## Comentários #04

Querido diário, hoje eu aprendi a comentar com // em caso de uma linha e /** e */ para grandes blocos. Sem comentários. 

## Sintaxe e Caracteres #05

Querido diário, hoje eu aprendi a colocar aspas simples ou duplas, ou anular o significado de um caractere especial com uma contra barra -> \. Além disso, o significado de craze e ${}. Dentro de dolar chaves eu posso colocar minhas variáveis apra serem impressas. O que está rolando é uma interpolação de string. O documento js-03.js tem os exemplos desse experimento. 
Caracteres que começam com o backslash ( \ ) são chamados de metacaracteres, eles adicionam "valores codificados" dentro de uma string. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences

Tem documento anexo em js-03.js

## Case sensitivity #06

Querido diário, eu descobri que o JS se importa com maiúsculo e minúsculo. Variáveis que não vão mudar, você deve escrever tudo MAIÚSCULO. Para classes e objetos, usa o CamelCase. Para variáveis privadas ou protegidas, existe um _underline antes da variáveis. Sem códigos hoje. 

## Tipos de Dados (Data Types) #07

Querido diário, descobri que no JS tem string, number, boolean, null underfined, bigInt, Symbol e objects como tipos primitivos da linguaguem, são imutáveis e os dados de mais baixo nível. Também tem de diferente o a dupla negação !!, que quando inserido no typeof oferece um resultado booleano. Dá para criar symbol! com o statuses. 

Tem código no js-04.js

## Declaração e atribuição de variáveis 🖱 #08

Querido diário, agora eu soube que o JS é fracamento tipado, podendo mudar de tipo de variável com uma reatribuição. Cria-se a variável com var, let ou const, e depois você pode fazer a atribuição de valor e tipo. Caso não faça a atribuição, o typeof será undefined, ou seja, não foi definido. Variáveis na memoria ocupa um espaço e um rótulo, onde há um endereço de referência. 

Tem código no js-05.js.

## Escopos (var, let e const) 🔎 #09

Querido diário, tem var, let e const. E a regra é let, pois let tem um escopo reduzido. Inclusive, ao declarar let, o compilador xia para não fazer sobrescrições. Então a variável resultado do código js-06.js teve que ser trocada por outra, visto que o código acusou que 'resultado' já havia sido declarada. O var tem um alcance muito maior, isso significa que sangra valores para fora do seu escopo. Então, quando houve um let colocado dentro de um for para item2, a tentativa de imprimir ela fora do escopo falha. "console.log('item -->', item2), ReferenceError: item2 is not defined.". Agora o const, representado por variável EM CAIXA ALTA, 'Uncaught TypeError: assigment to constant variable', ou seja, a variável não muda e não recebe reatribuições, como por exemplo, o valor de PI. 

Tem código no js-06.js.

## Palavras reservadas #10

Querido diário, palavra reservada são aquelas que não podemos utilizar como nome de variável, pois elas já são usadas pelo JS para aplicar funções nativas da linguaguem. Nãooo pode declarar variáveis como new, let, var, for. Para com isso, usa outras ai! Sem código dessa vez. 

## Operadores Aritméticos 🖱 #11

Querido diário, aquela coisa né, somar, subtrair, elevar, e etc. Tem código no js-07.js. O detalhe é que ao tentar somar uma string de números com um inteiro, ele vai dar prioridade a converter isso tudo em string na soma ("40" + 2) = 402. PORÉM, quando você tenta subtrair, ele subentende que é mais lógico ele converter todo mundo para Number ("40" - 2) = 38. Melhor coisa é aprender essa biblioteca aqui! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

## Tipo String e suas operações #12

Querido diário, para tratar a string tem .toLowerCase() para deixar tudo minúsculo, toUpperCase() que deixa tudo maiúsculo, .trim() tira os espaços em volta, .at(numero) pega um elemento pelo seu índice, .chatAt(numero) também. concat() junta strings. Include() procura elementos de uma string. startWith() pesquisa um préfixo, endswith() pesquisa um sufixo. indexOf(), pergunta qual é o indice de um determinado elemento passado, search() também procura elementos e entrega o índice. o lasIndexOf() procura a última incidência daquele elemento. .padStart(qtd, 'caracter'), assim como existe a lógica do .padEnd(qtd, 'caracter'). Ainda existe o '*'.repeat(20), nesse exemplo, repete o asterisco 20x. Ainda existe o replace clássico que substitui elementos, assim como o replaceAll() que funciona em substituir todos os elementos por outros. Por fim temos slice que pega elementos dinamicamente, substring e split() com dois elementos. Para adicionar algum a mais, o var.length conta a quantidade de caracteres de uma variável. 

## Tipo Array e suas operações 🖱 #13

Querido diário, hoje eu soube que array é lista em inglês. Array ou Listas são coleções de elementos. Eles podem ser acessados sequencialmente ou por índice. A delimitação de uma array é com colchetes. Basicamente basicamente, ao atribuir um elemento a um índice, você consegue trocar o valor de quem exista ou inserindo valor se não existir. Curioso é que, se você inserir um elemento em um índice que deixe um espaço de índice, ele será classificado como <empty item>. Muito louco né!

 Com push (lista.push("elementoASerInserido")), ele insere o elemento no final, assim como o pop() retira os ultimos elementos. Para remover elementos do inicio, usa o shift(). O shift também conta com o unshift(), que reinsere elementos entre parenteses. O length conta quantos elementos da lista, mas não chama com () no final, que ele não é função, ele é atributo do objeto. Com o splice() dá para remover mais de um elemento da lista, só fazer lista.splice(indiceDeOndeComeça, IndiceDeOndeTermina)

A questão é, que começamos a ter operações que não operam dentro da memória onde existe os dados. Portanto, é precisando usar essas funções e guarda em vairáveis para que funcionem, porque eles opera O concat() junta duas listas, assim como o slice de lista. E o flat concentra tudo na mesma dimensão. 

Hoje tem o anexo no js-09.js.

## String como Array (Bracket notation) #14
 
 Querido Diário, hoje comecei com um grande questionamento, será que dá para tratar strings como arrays?? SERÁ?

 Logo notei que sim, pois se você atribuir um texto a uma variável, dá para pegar pelo índice (texto[3] = t), ainda dá para contar com o length (texto.length). Só um detalhe, entenda que strings são imutáveis, portanto, não dá para trocar os elementos. 

## Conversões de Tipos (Casting) #15

Querido diário, aprendi que 'conversão de tipos' é casting em inglês. 

Em caso de duas strings ele concatena, em caso de dois inteiros, ele soma. No caso de de string com inteiro somando, faz menor sentido, mas ele concatena. Com string de float e float, ele concatena, e no caso de substrações, ele converte tudo para Number e faz a subtração. 

Com a função parseInt eu consigo converter strings para inteiros. Cuidado que cê passar parseInt de float, você perde as casas décimais. Ainda exise o parseFloat para evitar essas coisas. Para arredondar casas décimais você pode usar toFixed()! 

Tem os exemplos no js-10.js.

## Desvios condicionais (if, if else, else) #16

Querido diário, o falso é falso, mas o verdadeiro é falso, se for questionado se é falso. Muito louco, faz isso no desvio condicional para poder verificar. 

Então veja bem, a sintaxe é if com {} e else  também com {}. E dá para fazer if dentro de if. 

Assim como dá para inserir duas condições com um &&. Caso você queira ou um ou outro, usa dois pipe || entre as condições. 

Tem documento js-11.js

## Operador de igualdade (Equality & Strict Equality) #17

Querido diário, == confere igualdade de valores, === confere igualdade de tipo. Assim a mesma comparação tem caso que  == dá true e com === dá false. 

Tem documento js-12.js

## Operador de desigualdade e ! #18

Querido diário, Eu entendi que desigualdade é por meio do elemento !=. LEGAL NÉ! 

Tem documento no js-13.js

## Operações lógicas e tabela verdade #19

Querido diário, a que ponto chegamos? Operações binárias na tabela do and:
 0 0 = 0
 0 1 = 0
 1 0 = 0
 1 1 = 1
E a tabela verdade na operação do OR
 0 0 = 0
 0 1 = 1
 1 0 = 1
 1 1 = 1

 Dááá para fazer um if e um else em uma linha só da seguinte forma.
 var voteable = (age = 18) ? "Too young" : "Old enough"; 

 A interrogação denuncia que é uma pergunta a condição, e os dois pontos separa a resposta True : do False. 

INcrível, mas isso se chama switch

## Desafios - D12 - Exercícios JS - Lista 01

Querido diário, agora tenho que fazer exercícios extras desse repositório aqui: https://github.com/huogerac/guia-para-aprender-js-lista-exercicios
Vou agrupar todas as soluções no documento nesse fork específico https://github.com/ClaraSantosmf/guia-para-aprender-js-lista-exercicios. Espero que dê certo. 

## Repetições (for, for in, for of e forEach) #20

Querido diário, Hoje entendemos como é repetição, que legal, com for, for in, for of e forEach. A lista pode ser percorrida com um contador geralmente chamado de i. 

Dá para usar também [lista].length, onde dá a informação para percorrer tudo, ou simplesmente dizer var i in lista, e ele entenderá que dá para percorrer tudo.

For of não imprime índice, imprime elementos automaticamente, sem necessidade de acessar a lista por índice. 

forEach é uma função funciona com lista.forEach(qualquernome), ai dá um console log para vc colocar o qualquer nome para extrair o elemento. Vê o exemplo no Documento js-14.js

## Repetições (break, continue) 🖱 #21

Querido diário, BREAK! Que é dizer que, quando chegar a uma condição, para o loop! Isso funciona bem para quando você quer verficiar apenas uma condicional. Ainda tem o continue! Que serve para não breakar!
Documento js-15.js

## Repetições (while, do while) 🖱 #22

Querido diário, ADVINHA! tem outra forma de percorrer listas. É WHILE! e DO WHILE!
Que legal, a diferença é que o while para no último elemento. UMA LOUCURA! Mas não esquece de botar um contador! ok!
Ainda tem o do, ele só verifica a prada no final! O que acaba incluindo o último índice. 

## Iniciando com funções (functions) no JS 🖱 #26

Querido diário, a função encapsula um conjunto de código que retorna resultados difeentes conforme o parâmetro. Uma função pode ser passada como parâmetro de outra. 

A chamada da função ocorre quando você escrever com (), onde são passado os parâmetros dela, processamento com os passos que entrão logo em seguida em um bloco delimitado o escopo por {}, e, geralmente, tem retorno. Mas existe função sem retorno também. 

O excesso de parâmetros é ignorado. Mas a falta de parâmetros é acusado como um erro. 

É importante saber que existe o statement vs expression. A extrutura de expressão diz que uma variável é uma função. (const FazerPao = function (parâmetro)). Isso torna a função com menos risco de sangrar variáveis externamente. 

Ainda existe o conceito de funções puras. Que recebe variáveis e você não deve mexer variáveis fora dela. 

E ainda dá muito para pesquisar, por exemplo, arrow functions, hight order functions, clousure e immediately invoked function expression. 

Tem exemplo de Padaria no documento js-17.js

## Primeiros passos com Objetos no JS 🖱 #27

Querido diário, meu deus, tem objeto no JavaScript. O objeto tem um par de {chave: valor}, como se fosse um dicionário no python. Chave e valor podem ser alterados, pode representar uma estrutura de dados complexa e tudo que não é primitido e objeto. 

# Segundo Parte - JavaScript web

## Avisos

* JS web
* Entenda como criar elementos dentro do body (uma div, uma ul e dentro da ul)
* Entenda como obter elementos para atualizar valores e atributos
querySelector, getElementById
* Entenda como capturar eventos, exemplo, onClick

## Desafios iniciais

### Refazer o js04-soma-dos-numeros via web

* Criar um h2 com id=’resultado’
* Criar um botão somar
* Criar a function somar(n1,n2)
* Fazer um addListenner capturando o onCLick do botão para chamar a função soma 

### Refazer o js02-metros-para-centrimetros

* Fazer o visual de conversão do google
* Capturar o evento onchange ou onkey alguma coisa de forma que conforme digitamos em metros, o campo centímetros é atualizado “em tempo real”

### Fazer uma interface web para o problema do Erick, lista 02/js09

* Estudar alguma biblioteca JS para facilitar operações com data (new date)
* Ver alguma biblioteca que exiba um componente visual de calendário (igual o google calendar)

## Desafio final desta semana

* Fazer o Wordle completo (Pegar o CSS que fizemos na parte 1 e adicionar as funcionalidades com JS) 

### Assuntos passados em aula

**Seletores com Guanabara**

https://www.youtube.com/watch?v=WWZX8RWLxIk&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=14


https://www.youtube.com/watch?v=wWnBB-mZIvY&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=15

**Callback**

Serve para dar sequência. Mais específicamente é uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
