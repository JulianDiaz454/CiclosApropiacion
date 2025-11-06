// Ejercicio 3

// Declaramos un arreglo vacio
let arreglo = [];

// Se inicia un bucle que tomara numeros mayores a 50 entre 10 numeros
for (let i = 1; i <= 10; i++) {
    // Recibimos el valor del usuario
    let numero = prompt("Ingrese un número");

    // Condición para determinar si el numero es mayor a 50
    if (numero > 50) {
        // Guardamos el numero en el arreglo
        arreglo.push(numero);
    }
}

// Bucle foreach para mostrar los valores en el arreglo
arreglo.forEach(element => {
    // Imprimimos cada elemento 
    console.log(element);
});