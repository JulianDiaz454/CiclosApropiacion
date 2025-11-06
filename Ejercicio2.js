// Ejercicio 2

// Bucle que va hasta 5
for (let i = 1; i <= 5; i++) {

    // Recibimos el resultado del usuario
    let carnet = prompt("¿Tiene carnet? si / no")

    // Validamos la respuesta del usuario
    if (carnet == "si") {
        // Informamos el acceso
        console.log("Acceso permitido");
    } else {
        // Si no saltamos la iteración
        continue
    }
}