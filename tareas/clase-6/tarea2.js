/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para 
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
document.querySelector('#agregar-miembro').onclick = function () {
    reiniciar();
    agregarMiembro();
    habilitarBotones();
};
document.querySelector('#quitar-miembro').onclick = function () {
    reiniciar();
    quitarMiembro();
    if (document.querySelectorAll('.miembro').length === 0) {
        deshabilitarBotones();
    }
};
document.querySelector('#calcular').onclick = function () {
    reiniciarResultados();
    const nodeListSalarios = document.querySelectorAll('.salario-anual');
    const arraySalarios = convertirEnArray(nodeListSalarios);
    const mayorSalarioAnual = calcularNumeroMasGrande(arraySalarios);
    const menorSalarioAnual = calcularNumeroMasPequeño(arraySalarios);
    const salarioAnualPromedio = calcularPromedio(arraySalarios);
    const salarioMensualPromedio = salarioAnualPromedio / 12;
    document.querySelector('#mayor-salario-anual').textContent =
        `El mayor salario anual es $${mayorSalarioAnual}.`;
    document.querySelector('#menor-salario-anual').textContent =
        `El menor salario anual es $${menorSalarioAnual}.`;
    document.querySelector('#salario-anual-promedio').textContent =
        `El salario anual promedio es $${salarioAnualPromedio}.`;
    document.querySelector('#salario-mensual-promedio').textContent =
        `El salario mensual promedio es $${salarioMensualPromedio}.`;
    document.querySelector('#resultados').className = '';
    return false;
}

function reiniciar() {
    if (document.querySelector('#resultados').className !== 'oculto') {
        reiniciarResultados(); //Medio al pedo porque los resultados anteriores se ocultan
        ocultarResultados();
    }
}
function reiniciarResultados() {
    document.querySelector('#mayor-salario-anual').textContent =
        'El mayor salario anual es...';
    document.querySelector('#menor-salario-anual').textContent =
        'El menor salario anual es...';
    document.querySelector('#salario-anual-promedio').textContent =
        'El salario anual promedio es...';
    document.querySelector('#salario-mensual-promedio').textContent =
        'El salario mensual promedio es...';
}
function ocultarResultados() {
    document.querySelector('#resultados').className = 'oculto';
}
function agregarMiembro() {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    div.className = 'miembro';
    label.textContent = `Miembro ${document.querySelectorAll('.miembro').length + 1}`;
    input.type = 'text';
    input.placeholder = 'Salario Anual';
    input.className = 'salario-anual';
    div.appendChild(label);
    div.appendChild(input);
    document.querySelector('#contenedor').appendChild(div);
}
function habilitarBotones() {
    if ((document.querySelector('#quitar-miembro').disabled = true)) {
        document.querySelector('#quitar-miembro').disabled = false;
    }
    if ((document.querySelector('#calcular').disabled = true)) {
        document.querySelector('#calcular').disabled = false;
    }
}
function quitarMiembro() {
    const miembros = document.querySelectorAll('.miembro');
    miembros[miembros.length - 1].remove();
}
function deshabilitarBotones() {
    document.querySelector('#quitar-miembro').disabled = true;
    document.querySelector('#calcular').disabled = true;
}
function convertirEnArray(nodeList) {
    const array = [];
    for (let i = 0; i < nodeList.length; i++) {
        if (Number(nodeList[i].value) === 0 || isNaN(Number(nodeList[i].value))) {
            continue;
        }
        array.push(Number(nodeList[i].value));
    }
    return array;
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
function calcularPromedio(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}