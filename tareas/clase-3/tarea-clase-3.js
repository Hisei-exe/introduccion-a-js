// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
/*
const MI_NOMBRE = 'Matias';
const NOMBRE_VECINO = 'Facundo';
const nombreUsuario = prompt('Ingrese su nombre') || '';
if (MI_NOMBRE.toLowerCase() === nombreUsuario.toLowerCase()) {
    console.log(`Hola, Tocayo! Yo también me llamo ${MI_NOMBRE}`);
} else if (NOMBRE_VECINO.toLowerCase() === nombreUsuario.toLowerCase()) {
    console.log(`Hola ${nombreUsuario} te llamás igual que mi vecino.`);
} else if (nombreUsuario.trim() === '') {
    console.log('No ingresaste un nombre.');
} else {
    console.log(`Hola ${nombreUsuario}!`);
}
*/
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
/*
const MI_EDAD = 22;
const edadUsuario = Number(prompt('Ingrese su edad'));
console.log(edadUsuario);
if (edadUsuario === MI_EDAD) {
    console.log('Tenemos la misma edad!');
} else if (edadUsuario < MI_EDAD) {
    console.log('Sos menor que yo.');
} else if (edadUsuario > MI_EDAD) {
    console.log('Sos mayor que yo.');
} else {
    console.log('No entendí tu respuesta.');
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
const EDAD_MINIMA_PARA_ENTRAR = 18;
const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';

const usuarioTieneDocumento = (prompt('Tenés documento?') || '').toLowerCase();
if (usuarioTieneDocumento === RESPUESTA_SI) {
    const edadUsuario = Number(prompt('Qué edad tenes?'));
    if (edadUsuario >= EDAD_MINIMA_PARA_ENTRAR) {
        console.log('Bienvenido al bar!');
    } else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR) {
        console.log('No podés entrar al bar.');
    } else {
        console.log('No entendí la respuesta.');
    }
} else if (usuarioTieneDocumento === RESPUESTA_NO) {
    console.log('Se necesita documento para entrar al bar.');
} else {
    console.log('No entendí la respuesta.');
}
*/