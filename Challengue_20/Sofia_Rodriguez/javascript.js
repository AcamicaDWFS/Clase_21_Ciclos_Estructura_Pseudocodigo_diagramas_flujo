function contar () {

    for ( var contador = 0; contador <= 10; contador++) {
        alert (contador);
    }
}

function informacion () {
    var x = 10
    while (x >= 0) {
        alert (x);
        x--;
    }
    
}

/*function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function extra () {
    var x = parseInt(prompt ("Escribe un numero"));
    while (x >= 0) {
        //console.log(x);
        await sleep(1000);
        document.getElementById("demo").innerHTML = x;
        x--;
    }
}*/
