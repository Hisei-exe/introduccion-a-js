// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
/*
const miNombre = 'Matias';
const nombreUsuario = prompt('Ingrese su nombre');
const nombreVecino = 'Facundo';
if (nombreUsuario.toLowerCase() === miNombre.toLowerCase()) {
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`);
} else if (nombreUsuario.toLowerCase() === nombreVecino.toLowerCase()) {
    console.log(`Hola ${nombreUsuario} te llamas igual que mi vecino.`);
} else {
    console.log(`Hola ${nombreUsuario}!`);
}
*/
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
/*
const miEdad = 22;
const edadUsuario = Number(prompt('Ingrese su edad'));
if (edadUsuario === miEdad) {
    console.log('Tenemos la misma edad!');
} else {
    console.log('No tenemos la misma edad!');
}
*/
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
/*
const usuarioTieneDocumento = prompt('Tiene documento?(Si/No)');
if (usuarioTieneDocumento.toLowerCase() === 'si') {
    let edadUsuario = Number(prompt('Qué edad tenes?'));
    if (edadUsuario > 18) {
        console.log('Podes pasar al bar.');
    } else if (edadUsuario < 18) {
        console.log('No podes pasar al bar.');
    } else {
        console.log('No entendimos la respuesta.');
    }
} else if (usuarioTieneDocumento.toLowerCase() === 'no') {
    console.log('No podes pasar al bar.');
} else {
    console.log('No entendimos la respuesta.');
}
*/