var op1 =  prompt("valor n1 ");
var ope =  prompt("ingrese operacion +,-,/,*");
var op2 = prompt("valor n2");
var res;


switch (ope) {
    case '+':
      suma ();
      break;
    case '-':
        resta();
      break;
    case '/':
        division();
      break;
    case '*':
        multiplicacion()
      break;
   
    default:
        document.write('no es una operacion correcta' + expr + '.');
  }
  
  



function suma (){
res=op1+op2;
alert('Resultado :'+res);
}

function resta (){
    res=op1-op2;
    alert('Resultado :'+res);
}

function division () {
    res=op1/op2;
    alert('Resultado :'+res);
}

function multiplicacion () {
    res=op1*op2;
    alert('Resultado :'+res);
}
