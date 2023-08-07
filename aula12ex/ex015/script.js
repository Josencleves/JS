/*
https://www.youtube.com/watch?v=f5es-PpaUI8&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=28
*/

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var fano = Number(fano.value)
    var res = document.getElementById('res')
    if (fano == 0 || fano > ano ){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano//Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
        
    }
}