/*
https://www.youtube.com/watch?v=UXSWgnbSHxs&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=26
*/

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manha-250.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'tarde-250.jpg'
        document.body.style.background = 'green'
    }else {
        //BOA NOITE!
        img.src = 'noite-250.jpg'
        document.body.style.background = 'black'
    }
}