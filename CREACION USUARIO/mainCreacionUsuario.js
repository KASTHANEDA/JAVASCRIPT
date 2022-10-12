

var passwordSave;
var userSave;


debugger;



function crearUsuario() {



    var User = prompt("Ingrese ususario a crear: ");
    if ((User != '' )) {
        userSave = User;

        alert("USUARIO CREADO");
        
        var passwordUser = prompt("Ingrese su contraseña: ");
        if ((passwordUser != '')) {
            /* document.write("Usuario: "+User+" pdw :"+passwordUser+"\n"); */
            passwordSave = passwordUser;
            var saludo = "Se creo el usuario : " + userSave + " su clave es : " + passwordSave;
            document.write(saludo)
            return alert("Validacion Exitosa");
        } else {
            return alert("Clave invalida");
        }
    } 
    else {
        return alert("Debes colocar un usuario");
    }
}

crearUsuario();
