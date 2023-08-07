/* 
https://www.youtube.com/watch?v=oMNbc_LFz8w&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=29
*/
/*function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    } else {
        if (p<=0){// para evitar erro de passo 0
            alert('Passo invállido! Considerando passo = 1')
            p = 1
        }
       res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f){
        for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} &#128073`
        }
        } else {
           for ( c = i; c >= f; c -= p){
                res.innerHTML += `${c} &#128073`
            }
            
        }
        res.innerHTML += '🔫'

    }
}*/


// FORMA-02
function contar(){
    var ini = document.getElementById('txti')
    var ini = Number(ini.value)
    var fim = document.getElementById('txtf')
    var fim = Number(fim.value)
    var pas = document.getElementById('txtp')
    var pas = Number(pas.value)
    var res = document.getElementById('res')

    if (ini.length == 0 || fim.length == 0 || pas.length == 0){
        window.alert('[ERRO] Faltam dados')
    } else {
        if (pas<=0){// para evitar erro de passo 0
            alert('Passo invállido! Considerando passo = 1')
            pas = 1
        }
        res.innerHTML = 'contando:<br> '
        if (ini < fim){
        for (var c = ini; c <= fim; c += pas){
            res.innerHTML += `${c} &#128073`
        }
        } else {
            for (c = ini; c >= fim; c -= pas){
                res.innerHTML += `${c} &#128073`
            }
            
        }
        res.innerHTML += '🔫'

    }
}
