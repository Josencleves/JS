var agora = new Date()
var diaSem = agora.getDay()
/*
0 = Domingo 
1 = Segunda 
2 = Terça 
3 = Quarta 
4 = Quinta 
5 = Sexta 
6 = Sábado
*/



//Exemplo alongado usando if e else
/*if (diaSem == 0){
    console.log('Domingo')
}else if (diaSem == 1){
    console.log('Segunda')
}else if (diaSem == 2){
    console.log('Terça')
}else if (diaSem == 3){
    console.log('Quarta')
}else if (diaSem == 4){
    console.log('Quinta')
}else if (diaSem == 5){
    console.log('Sexta')
}else if (diaSem == 6){
    console.log('Sábado')
}*/

//modo reduzido com switch. ele funciona apenas com string e inteiros

switch(diaSem){
    case 0: console.log("Domingo")
    break
    case 1: console.log("Segunda Feira")
    break
    case 2: console.log("Terça Feira")
    break
    case 3: console.log("Quarta Feira")
    break
    case 4: console.log("Quinta Feira")
    break
    case 5: console.log("Sexta Feira")
    break
    case 6: console.log("sábado")
    break
}