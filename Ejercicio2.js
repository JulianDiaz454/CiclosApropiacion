// Ejercicio 2

for (let i = 1; i <= 5; i++) {
    let carnet = prompt("¿Tiene carnet? si / no")

    if (carnet == "si") {
        console.log("Acceso permitido");
    } else {
        continue
    }
}