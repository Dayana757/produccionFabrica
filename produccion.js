function iniciarSesion() { //
    const usuarioPredefinido = "admin";
    const contrasenaPredefinida = "1234";
    let intentos = 3;

    while (intentos > 0) {
        const usuario = prompt("Ingrese el usuario:");
        const contrasena = prompt("Ingrese la contraseña:");

        if (usuario === usuarioPredefinido && contrasena === contrasenaPredefinida) {
            console.log("Inicio de sesión exitoso.");
            return true; 
        } else {
            intentos--;
            console.log("Credenciales incorrectas. Te quedan " + intentos + " intentos.");
        }
    }

    console.log("Has agotado el número de intentos. El sistema se cerrará.");
    return false; 
}

function controlProduccion() {
    const dias = 7;
    let gananciasTotales = 0;

    for (let i = 1; i <= dias; i++) {
        const unidadesProducidas = parseInt(prompt("Ingrese la cantidad de unidades producidas el día " + i + ":"), 10);
        
        if (unidadesProducidas < 50) {
            console.log("Día " + i + ": No se cubren los costos.");
        } else if (unidadesProducidas >= 50 && unidadesProducidas <= 100) {
            const ganancia = unidadesProducidas * 0.05;
            gananciasTotales += ganancia;
            console.log("Día " + i + ": Ganancia del 5%. Ganancia: " + ganancia);
        } else {
            const ganancia = unidadesProducidas * 0.10;
            gananciasTotales += ganancia;
            console.log("Día " + i + ": Ganancia del 10%. Ganancia: " + ganancia);
        }
    }

    console.log("Ganancia total en " + dias + " días: " + gananciasTotales);
}


if (iniciarSesion()) {
    controlProduccion();
}