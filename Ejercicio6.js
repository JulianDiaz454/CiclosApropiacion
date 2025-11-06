// Ejercicio 6

// Declaramos la cantidad de boletos
let boletos = 15;

// Bucle para vender las boletas
while (boletos > 0) { // Mientras las boletas sean mayores a 0
    // Solicitamos los datos
    let edad = prompt("Ingrese su edad");
    let mayor = prompt("¿La pelicula es de adultos? si / no")

    // Usamos un operador terniario para determinar un booleano
    let pelicula = (mayor == "si") ? true : false;
    // Validamos que se cumplan dos condiciones
    if (edad < 18 && pelicula) {
        alert("No se entrega boleta");
    } else {
        alert("Boleta entregada");
        // Reducimos en 1 el contador
        boletos--;
    }
}