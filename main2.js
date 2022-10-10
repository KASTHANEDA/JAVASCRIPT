const passwordSave = "111";
const userSave ="111";
var User = prompt("Ingrese su ususario: ");


switch (User) {
  case 'Vaca':
  case 'Jirafa':
  case 'Perro':
  case '111':
    var passwordUser = prompt("Ingrese su contraseña: ");
    if (passwordUser==userSave) {
        alert('LOGIN SATISFACTOTIRIO');
    }
    else {
        alert('PAILA.');    
    }
    break;
    
  default:
    alert('PAILA.');
}