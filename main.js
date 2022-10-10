const passwordSave = "111";
const userSave ="111";
let User = prompt("Ingrese su ususario: ");
debugger

let saludo = "Bienvendio usuario @" + User;


function validacion (){

if ( User === userSave) {
    document.write(saludo)
    alert("su usuario esta correcto");
    let passwordUser = prompt("Ingrese su contraseña: ");
        if (passwordUser === passwordSave) {
            return alert("Validacion Exitosa");
        }
        else {
            return alert("Clave errada");
        }
}
return alert("Usuario incorrecto");
}

validacion();