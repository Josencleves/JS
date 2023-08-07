/*VARRIÁVEIS COMPOSTAS:

https://www.youtube.com/watch?v=XdkW62tkAgU&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=22
*/

//Variáveis simples só conseguem armazenar um valor por vez, já a compostas é capaz de armazenar vários ao mesmo tempo


//Ex: 
// vaga a = [Fusca, audi, ônibus] os dados contidos são chamados de elementos e os elementos são compostos de valor (Fusca, audi e ônibus) e chave(0, 1, 2)
// esse tipo de variável é chamadda de aray ou vetor.
//Prática:


let num = [5, 8, 4,]
num[3] = 6 //acrecentando um valor 6 à chave 3
num.push(7) // acrecenta automaticamente o valor 7 criando uma nova chave na ultima posição.
num.length // conta quantos elementos existem em num. (num.length) vai dentro dos parenteses
num.sort() // Põe todos os elementos em ordem crescente
a.innerHTML = (num)
b.innerHTML = (`Nosso vetor é o ${num}`)
c.innerHTML = (`O vetor tem ${num.length} posições`)
d.innerHTML = (`O primeiro valor do vetor é ${num[0]}`)

//Podemos representar os valores sem a formatação de vetor da seguinte forma:
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])

//forma simplificada:
for(let pos = 0 ; pos <num.length; pos++){// inicia na posição "0", até a posição < que o numero de elementos, somando 1
    e.innerHTML += (`A posição ${pos} tem o valor ${num[pos]}<br>`)// Usando += para escrever a mensagem para cada posição. Do contrário, ele só vai pegar a ultima.
}

//Mais facil ainda.
for (let pos in num){ //Para cada posição dentro de num. ( Esse método só funciona para array e objetos)
    f.innerHTML += (`A posição ${pos} tem o valor ${num[pos]}<br>`)
}

//buscar valores dentro 
let pos = num.indexOf(7) 
g.innerHTML = (`O valor 7 está na posição ${pos}`)


// eliminando o erro caso a posição não exista.
if (pos == -1){ // -1 é a resposta para quando a posição ou o valor não existe
    h.innerHTML = ('O valor não foi encontrado')
}else{
    h.innerHTML = (`O valor 7 está na posição ${pos}`)
}

//lançando dados na janela do navegador:
//Ex:
// console.log() --> No console
// document.body.innerHTML = () --> No navegador
// a.innerHTML = () --> No navegador, chamando o h1 "a"(chamando pelo "id") no html.