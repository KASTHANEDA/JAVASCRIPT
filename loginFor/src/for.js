
debugger;
  let cont=0;
  debugger;

  function oKContrasena() {
    location.replace("login.html")
    alert(usuario + "// "+ clave +" INGRESO OK"); 
  }

  
  function badContrasena() {
    location.replace("bloqueado.html")
    
    alert("CLAVE ERRADA");
  }
  
function getcube(){  
    var claveOk=111;
    var i;
 
  /*   alert(usuario + "// "+ clave);  */
    
        for ( i = 0; i < 4; i++) {
            if( clave ==claveOk){
              
              var usuario=document.getElementById("usuario").value;  
              var clave=document.getElementById("clave").value; 
                return oKContrasena();
                
            }
            alert(i+ "intentos");
        }
        alert(i+ "jjjj intentos");
        if (i==4){
          badContrasena()
        }
           
   
     }


     

  