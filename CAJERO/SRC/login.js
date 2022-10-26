

let cont=0;

var j=0;


	
var hoy = new Date();	
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();	
var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
var fechaYHora = fecha + ' ' + hora;
 
// obtener la fecha y la hora

document.getElementById("date").innerHTML = fecha +' '+hora;

/* numero cajero */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
document.getElementById("numCajero").innerHTML = getRandomInt(100);





function login(form){  
  let claveOk=111;
  var i;
  
  var clave=document.getElementById("c").value; 

/*   alert(usuario + "// "+ clave);  */
  
      
          if( clave ==claveOk){
            
            var usuario=document.getElementById("u").value;  
            
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

   /* ingreso contraseña buena  */

   function oKContrasena() {
    location.replace("opcCajero.html")
    alert(usuario + "// "+ clave +" INGRESO OK"); 
  }
/* ingreso contraseña errada */
  
  function badContrasena() {
    location.replace("bloqueado.html")
    
    alert("CLAVE ERRADA");
  }


   

