function ejecutarOpcion(opcion) {
    switch (opcion) {
      case 1:
        let lado1 = parseFloat(prompt("Ingresa el valor del primer lado del triángulo:"));
        let lado2 = parseFloat(prompt("Ingresa el valor del segundo lado del triángulo:"));
        let lado3 = parseFloat(prompt("Ingresa el valor del tercer lado del triángulo:"));
  
        let tipoTriangulo = determinarTipoTriangulo(lado1, lado2, lado3);
        alert("El triángulo es de tipo " + tipoTriangulo + ".");
        break;
      default:
        console.log("Opción inválida.");
    }
  }
  
  function determinarTipoTriangulo(lado1, lado2, lado3) {
    // Código para determinar el tipo de triángulo
    
    // Ejemplo de código para determinar el tipo de triángulo
    if (lado1 === lado2 && lado1 === lado3) {
      return "equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return "isósceles";
    } else {
      return "escaleno";
    }
  }
  