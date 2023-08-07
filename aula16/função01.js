/*
https://www.youtube.com/watch?v=mc3TKp2XzhI&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=23
*/


//FUNÇÕES
// sÃO que são executadas assim que são chamadas ou em decorrência de algum evento.
// uma função pode receber parâmetros e retornar um resultado.
//EX: 
//  function ação( param-->parâmetro formal){
//    return res
//  }
//  ação (5) -->parâmetro real

//Prática-01

function parimp(n){
    if (n % 2 == 0){
        return'par'
    } else{
        return'impar'
    }
}

document.body.innerHTML = parimp(2)