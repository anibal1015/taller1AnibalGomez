function realizarConversion(opcionDe, opcionA) {
    let temperatura = parseFloat(prompt("Ingresa la temperatura en grados:"));
  
    let resultado;
  
    // Convertir de Celsius a...
    if (opcionDe === 1) {
      if (opcionA === 2) {
        resultado = (temperatura * 9/5) + 32; // Celsius a Fahrenheit
      } else if (opcionA === 3) {
        resultado = temperatura + 273.15; // Celsius a Kelvin
      }
    }
    // Convertir de Fahrenheit a...
    else if (opcionDe === 2) {
      if (opcionA === 1) {
        resultado = (temperatura - 32) * 5/9; // Fahrenheit a Celsius
      } else if (opcionA === 3) {
        resultado = (temperatura + 459.67) * 5/9; // Fahrenheit a Kelvin
      }
    }
    // Convertir de Kelvin a...
    else if (opcionDe === 3) {
      if (opcionA === 1) {
        resultado = temperatura - 273.15; // Kelvin a Celsius
      } else if (opcionA === 2) {
        resultado = (temperatura * 9/5) - 459.67; // Kelvin a Fahrenheit
      } 
    }
  
    // Mostrar el resultado de la conversión en una alerta con dos cifras decimales
    alert("El resultado de la conversion es: " + resultado);
  }
  