let saldo = ['95222,52','','']
console.log(saldo)




saldo.forEach(function(saldo) {
    console.log(saldo);    
})

document.getElementById("saldo").innerHTML = (saldo);    

function redirect() {
    location.replace("opcCajero.html");
}

function retirar() {
    let saldo2 = document.getElementById("retirar").value;
    if (saldo2=''){
        saldo.forEach(function(saldo) {
            
            console.log(saldo2);    
            saldo=saldo-saldo2;
            
        }
        console.log(saldo);    
        )
    }
    else {
        console.log('Entre aqui ')
    }
    
 
}