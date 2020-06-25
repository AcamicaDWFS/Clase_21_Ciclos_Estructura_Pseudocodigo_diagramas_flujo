// datos del usuario con los que comparar input
let defaultUser = "admin";
let defaultPass = "123";
/* let isValido; */
let usuario;

// pedido de input al usuario hasta que ingrese datos correctos
do {
    usuario = prompt("Ingresa tu nombre de usuario:");
    let contrasena = prompt("Ingresa contrasena: ");
    var isValido = validarDatos(usuario, contrasena);
} while (isValido == false);


// función de validación
function validarDatos(usuario, contrasena) {
    if (usuario === defaultUser && contrasena === defaultPass) {
        return true;
    }
    return false;

    // return usuario === defaultUser && contrasena === defaultPass;
}

// mensaje bienvenida tras ingreso de datos correctos
alert("Datos correctos " + usuario);