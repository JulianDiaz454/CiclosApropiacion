// Ejercicio 7

// Se declara la variable para sumar y se inicializa en 0
let sum = 0; 

// Bucle para llegar hasta 100
for (let i = 1; i <= 100; i++) {
    // Validamos si el numero es mayor a 90 y es par
    if (i > 90 && (i % 2) == 0) {
        // Terminamos el bucle
        break;
    } else {
        // Sumamos los numero
        sum += i;
    }
}

// Mostramos el total de la suma
alert(`TOTAL: ${sum}`)