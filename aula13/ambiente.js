// 3 formas distintas de realizar uma repetição.

/*
https://www.youtube.com/watch?v=5rZqYPKIwkY&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=19
*/

// abrir com nodejs.



//Manualmente.

/*
console.log('Passo 1')
console.log('Passo 2')
console.log('Passo 3')
console.log('Passo 4')
console.log('Passo 5')
console.log('Passo 6')
console.log('Passo 7')
console.log('Passo 8')
console.log('Passo 9')
console.log('Passo 10')
*/

// WHILE (Estrutura de repetição com teste lógico no início)
/*
var contador = 1
while (contador <= 10) {
    console.log(`Passo ${contador}`)
    contador++
}
*/

//DO WHILE (Estrutura de repetição com teste lógico no final)

var d = 1
do {
    console.log(`Passo ${d}`)
    d++ 
} while (d <= 10)
