// Ejercicio 4

// Se declaran dos variables
let saldo = 100000;
let bandera = true; // variable Booleana

// Se valida que bandera sea TRUE para continuar el cilo
while (bandera) { // Ciclo infinito
    // Tomamos el valor a retirar
    let retiro = prompt("Ingrese el valor a retirar");

    // Validamos que el valor no supere el saldo
    if (retiro < saldo ) {
        // Aqui a saldo de le reduce retiro y se almacena nuevamente en saldo
        saldo -= retiro;

        alert(`Saldo total: ${saldo}`);
    } else {
        // Declaramos false para romper el ciclo
        bandera = false
    }
}