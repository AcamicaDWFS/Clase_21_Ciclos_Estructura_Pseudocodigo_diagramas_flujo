let mayoresDeEdad = 0;
let counter = 0;

function ages() {
    let age = prompt("Ingresa una edad");
    let ageNumber = parseInt(age);

    if (!isNaN(ageNumber)) {
        counter++;
        if (ageNumber >= 18) {
            mayoresDeEdad++;
            ages();
        } else if (ageNumber != 0) {
            ages();
        } else if (ageNumber == 0) {
            if (counter > 1) {
                alert("De las " + counter + " edades ingresadas, " + mayoresDeEdad + " son mayores de edad.");
            } else if (mayoresDeEdad == 0) {
                alert("La persona ingresada es menor de edad");
            }
            counter = 0;
            mayoresDeEdad = 0;
        }
    } else {
        alert("Ingresaste un valor no válido. Ingresa únicamente números.");
        ages();
    }

}