'use strict'

function letras(cadena) {
	return cadena.length;
}

function palabras(cadena) {
	let palabrasContadas = cadena.split(' ');
	return palabrasContadas.length;
}

function maysc(cadena) {
	return cadena.toLocaleUpperCase();
}

function titulo(cadena) {
	cadena = cadena.split(' ');
	for (let index in cadena) {
		cadena[index] = cadena[index].charAt(0).toUpperCase() + cadena[index].substr(1);
	}
	return cadena.join(' ');
}

function letrasReves(cadena) {
	return cadena.split('').reverse().join('');
}

function palabrasReves(cadena) {
	return cadena.split(' ').reverse().join(' ');
}

function palindromo(cadena) {
	let cadenaReves = cadena.split(' ');
	for (let index in cadenaReves) {
		cadenaReves[index] = letrasReves(cadenaReves[index]);
	}
	cadenaReves = cadenaReves.join(' ');
	cadenaReves = palabrasReves(cadenaReves);
	return cadena.toLocaleLowerCase().replaceAll(' ','') == cadenaReves.toLocaleLowerCase().replaceAll(' ','');
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}