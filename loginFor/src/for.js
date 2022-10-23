
debugger;
  let cont=0;
  debugger;
  var j=0;
  
function getcube(){  
    var claveOk=111;
    var i;
    
    var clave=document.getElementById("clave").value; 
 
  /*   alert(usuario + "// "+ clave);  */
    
        
            if( clave ==claveOk){
              
              var usuario=document.getElementById("usuario").value;  
              
                return oKContrasena();
                
            }                           
            
        
         else {
           j++;     
          alert("LLEVAS "+j+"INTENTOS");
          if (j==3){
            badContrasena()
          }
          
        }          
   
     }

     function oKContrasena() {
      location.replace("login.html")
      alert(usuario + "// "+ clave +" INGRESO OK"); 
    }
  
    
    function badContrasena() {
      location.replace("bloqueado.html")
      
      alert("CLAVE ERRADA");
    }


     

  