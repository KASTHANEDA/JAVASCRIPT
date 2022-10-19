function saludar(nombre,edad) {
    alert('Hola ' + nombre + 'tu edad es :'+edad);
  }
   
  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    var edad = prompt('Por favor ingresa tu edad.');
    callback(nombre,edad);
  }

  procesarEntradaUsuario(saludar);