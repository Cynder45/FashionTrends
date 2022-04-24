var i = 0
var ketik = "Give Youself A New Style This Year!"

function diketik(){
    if( i < ketik.length){
    
        document.getElementById('ketik').innerHTML += ketik.charAt(i)
        i++;
        setTimeout(diketik, 100)
    }
}
diketik()