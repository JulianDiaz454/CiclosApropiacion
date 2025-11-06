// Ejercicio 5

// Bucle para determinar cada corredor
for (let i = 1; i <= 8; i++) {
    // Mostramos que corredor esta participando
    alert(`Corredor: ${i}`);

    // Bucle para cada vuelta
    for (let j = 1; j <= 4; j++) {
        // Preguntamos el estado del corredor
        let res = prompt(`Vuelta ${j}, Esta cansado? si / no `)
        // Operador terniario para determinar el estado como true o false
        let estado = ((res == "si") || (res == "yes")) ? true : false;
        // Validamos si el corredor continua
        if (estado) {
            alert(`El corredor se retira`);
            break; // Terminamos el bucle de las vueltas
        } else {
            alert("El corredor continua")
        }
    }
}