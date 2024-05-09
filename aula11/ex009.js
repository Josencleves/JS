/*var país = 'EUA'
console.log(`videndo em ${país}`)
if (país != 'Brasil'){
    console.log('Você é um Estrangeiro')
} else{
    console.log('Você é um Brasileiro')
}*/


function enviar(){
    var p = document.getElementById('p')
    var res = document.getElementById('res')
    
    //res.innerHTML = 'Gringo'
    if (p == 'Brasil'){
        res.innerHTML = 'Nativo'
    }else {
        res.innerHTML = 'gringo'
    }
}