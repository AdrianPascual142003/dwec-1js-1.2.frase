'use strict'

let cadena = prompt("Introduce una frase:");

let numFrase = cadena => {
    if (cadena == null) {
        throw Error("Has de introducir una cadena");
    }else if (!isNaN(cadena)) {
        throw Error("Has de introducir una cadena de texto");
    }else {
        console.log("Frase: \"" + cadena + "\"");
        console.log(letras(cadena) + " letras y " + palabras(cadena) + " palabras");
        console.log(maysc(cadena));
        console.log(titulo(cadena));
        console.log(letrasReves(cadena));
        console.log(palabrasReves(cadena));
        if (palindromo(cadena)) {
            console.log("Si es un palindromo");
        }else {
            console.log("No es un palindromo");
        }
    }
}

try {
    numFrase(cadena);
}catch (error) {
    console.error(error);
}



