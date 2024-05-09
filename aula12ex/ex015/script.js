/*
https://www.youtube.com/watch?v=f5es-PpaUI8&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=28
*/

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasciano = document.getElementById('txtano')
    var nasciano = Number(nasciano.value)
    var res = document.getElementById('res')
    if (nasciano == 0 || nasciano > ano ){
        window.alert('[ERRO]\nVerifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - nasciano//Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 10){
                img.src ='bebe-m.jpg' // forma reduzida
            } else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade >= 10 && idade < 21){
                img.src = 'jovem-f.jpg'//Forma mais econômica de chamar a foto.
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