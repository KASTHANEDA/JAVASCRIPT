
let numero = prompt("Ingrese numero: ");

debugger
function primo (numero){
    if (numero == 0 || numero == 1 || numero == 4) {
        return alert("no es primo");
    }
    
    else {
        for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0)
                return alert("no es primo");
    
        }
    
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return alert("Es primo");
    
}
// Casos especiales
primo(numero);