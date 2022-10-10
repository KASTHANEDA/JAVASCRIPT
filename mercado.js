
var  expr  = prompt("ingrese valor a de fruta a consultar")

switch (expr) {
    case '1':
      document.write('El kilogramo de naranjas cuesta $0.59.');
      break;
    case '2':
        document.write('El kilogramo de manzanas cuesta $0.32.');
      break;
    case '3':
        document.write('El kilogramo de platanos cuesta $0.48.');
      break;
    case '4':
        document.write('El kilogramo de cerezas cuesta $3.00.');
      break;
    case '5':
    case '6':
        document.write('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
        document.write('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  document.write("¿Hay algo más que te quisiera consultar?");