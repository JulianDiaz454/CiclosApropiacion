// Ejercicio 8

// Bucle para tomar datos de 5 usuarios
for (let i = 1; i <= 5; i++) {
    // Solicitamos los datos al usuario
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");

    // Validamos si es mayor de edad
    if (edad >= 18) {
        alert(`Hola ${nombre}`)
    } 
}