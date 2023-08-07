/*
https://www.youtube.com/watch?v=mfHAQ-4Rspw&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=30
*/




/*function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
        
    } else{
        let n = Number(num.value)
        let c =1;
        tab.innerHTML = ''
        
        while (c<=10){
            let item = document.createElement('option')//pq conteudo de select é option
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
    }
}
*/

//FORMA-02:
/*
function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
        
    } else{
        let c = 1;
        tab.innerHTML = ''
        
        while (c <= 10){
            let item = document.createElement('option')//pq conteudo de select é option
            item.text = `${num.value} x ${c} = ${num.value*c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
    }
}
*/

//USANDO FOR:

function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    tab.innerHTML = ''
    if (num.value.length == 0){
        alert('Por favor digite um número')
    } else {
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num.value} X${c} =${num.value*c}`
            tab.appendChild(item)
        }
    }
    
}
