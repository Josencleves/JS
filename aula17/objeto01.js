/*
https://www.youtube.com/watch?v=roP93FA-NgU&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=24
*/

let amigo = {nome:'José', sexo: 'M', peso: 85.4, engordar(p){
    console.log('engordou')
    this.peso += p
}}
console.log(typeof amigo)
console.log(amigo.nome)
amigo.engordar(2)
console.log(`Meu amigo ${amigo.nome} pesa ${amigo.peso} kg`)