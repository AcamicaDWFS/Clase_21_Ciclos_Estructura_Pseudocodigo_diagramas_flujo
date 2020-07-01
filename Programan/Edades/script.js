let edad;
let mayores = new Array();
entrada();

//Recibe los parametros de entrada y valida que el valor ingresado sea un número válido
function entrada() {
    do {
        edad = parseInt(prompt("Ingresar edad:"));
        if (!isNaN(edad)) {
            if (edad < 130) {
                valMayor18(edad);
            } else {
                alert("Ingresar una edad menor a 130");
            }
        } else {
            alert("Ingresar un valor numérico");
            edad = 1;
        }
    } while (edad > 0)
    alert(`MAYOR DE EDAD: \n${mayores.join('\n')}`);
}

//Almacena y ordena las edades mayor o igual a 18
function valMayor18(edad) {
    if (edad >= 18) {
        mayores.push(edad);
    }
    mayores.sort(function (a, b) {
        return a - b;
    });
}
