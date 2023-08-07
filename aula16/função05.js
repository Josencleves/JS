// RECURSIVIDADE:

function fatorial(n){
    if (n == 1){
        return 1
    }else {
        return n * fatorial (n-1)
    }
}
document.body.innerHTML = fatorial(4)