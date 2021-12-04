//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

document.querySelector('#generar-numeros').onclick = function () {
    limpiar();
    const cantidadDeNumeros = generarNumeroAleatorio(10, 500);
    document.querySelector('#cantidad-de-numeros').textContent = `Cantidad de números: ${cantidadDeNumeros}`;
    agregarListaDeNumeros(cantidadDeNumeros);
    mostrarBotonCalcular();
    mostrarLabels();
};

document.querySelector('#calcular').onclick = function () {
    const nodeListNumeros = document.querySelectorAll('.numero');
    const arrayNumeros = convertirListaEnArray(nodeListNumeros);
    const promedio = calcularPromedio(arrayNumeros);
    const numeroMasGrande = calcularNumeroMasGrande(arrayNumeros);
    const numeroMasPequeño = calcularNumeroMasPequeño(arrayNumeros);
    const numeroMasFrecuente = calcularNumeroMasFrecuente(arrayNumeros);
    document.querySelector('#promedio').textContent = `El promedio es: ${promedio}`;
    document.querySelector('#numero-mas-grande').textContent = `El número más grande es: ${numeroMasGrande}`;
    document.querySelector('#numero-mas-pequeño').textContent = `El número más pequeño es: ${numeroMasPequeño}`;
    document.querySelector('#numero-mas-frecuente').textContent = `El número más frecuente es: ${numeroMasFrecuente}`;
};

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function agregarListaDeNumeros(cantidadDeNumeros) {
    const lista = document.createElement('ol');
    for (let i = 1; i <= cantidadDeNumeros; i++) {
        const numero = document.createElement('li');
        const numeroDeLaLista = generarNumeroAleatorio(1, 100);
        numero.textContent = numeroDeLaLista;
        numero.className = 'numero';
        lista.appendChild(numero);
    }
    document.querySelector('body').appendChild(lista);
}
function limpiar() {
    if (document.querySelector('ol')) {
        document.querySelector('ol').remove();
    }
}
function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = '';
}
function mostrarLabels() {
    for (let i = 0; i < document.querySelectorAll('label').length; i++) {
        document.querySelectorAll('label')[i].className = '';
    }
}
function convertirListaEnArray(nodeList) {
    const array = [];
    for (let i = 0; i < nodeList.length; i++) {
        array.push(Number(nodeList[i].textContent));
    }
    return array;
}
function calcularPromedio(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}
function calcularNumeroMasGrande(array) {
    let numeroMasGrande = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numeroMasGrande) {
            numeroMasGrande = array[i];
        }
    }
    return numeroMasGrande;
}
function calcularNumeroMasPequeño(array) {
    let numeroMasPequeño = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < numeroMasPequeño) {
            numeroMasPequeño = array[i];
        }
    }
    return numeroMasPequeño;
}
function calcularNumeroMasFrecuente(array) {
    let numeroMasFrecuente = 0;
    let contadorFrecuenciaUno = 0;
    for (let i = 0; i < array.length; i++) {
        let numero = array[i];
        let contadorFrecuenciaDos = 0;
        if (numeroMasFrecuente !== numero) {
            for (let j = 0; j < array.length; j++) {
                if (array[i] === array[j]) {
                    contadorFrecuenciaDos++;
                }
            }
            if (contadorFrecuenciaDos > contadorFrecuenciaUno) {
                numeroMasFrecuente = numero;
                contadorFrecuenciaUno = contadorFrecuenciaDos;
            }
        }
    }
    return numeroMasFrecuente;
}
