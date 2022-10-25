

   let saldo =parseInt(654689877);
    let saldo2;

function redirect() {
    location.replace("opcCajero.html");
};

function retirar() {
     saldo2 =parseInt(document.getElementById("retirar").value);

    console.log('Saldo a retirar de '+saldo2);
    if (saldo2>0){
        document.getElementById("saldo").innerHTML = (saldo);  
            console.log('Saldo a retirar de '+saldo2);
            saldo2=saldo-saldo2;    
            console.log(saldo2);     
          
    }
      
    else {
       
        console.log('Entre aqui ')
    };
    return (document.getElementById("saldo").innerHTML = (saldo2));  
    
    
 
};