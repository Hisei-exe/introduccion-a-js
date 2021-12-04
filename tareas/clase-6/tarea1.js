/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad 
y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/
document.querySelector('#agregar-miembros').onclick = function () {
    const cantidadDeMiembros = Number(document.querySelector('#cantidad-de-miembros').value);
    agregarMiembros(cantidadDeMiembros);
    document.querySelector('#agregar-miembros').disabled = true;
    mostrarBotonCalcular();
    mostrarResultados();
    return false;
};
document.querySelector('#calcular-edad').onclick = function () {
    const nodeListEdades = document.querySelectorAll('.edad-del-familiar');
    const arrayEdades = convertirListaEnArray(nodeListEdades);
    const mayorEdad = calcularNumeroMasGrande(arrayEdades);
    const menorEdad = calcularNumeroMasPequeño(arrayEdades);
    const edadPromedio = calcularPromedio(arrayEdades);
    document.querySelector('#mayor-edad').textContent = `La mayor edad es ${mayorEdad}.`;
    document.querySelector('#menor-edad').textContent = `La menor edad es ${menorEdad}.`;
    document.querySelector('#edad-promedio').textContent = `La edad promedio es ${edadPromedio}.`;
    return false;
}
document.querySelector('#reiniciar').onclick = function () {
    while (document.querySelector('.miembro')) {
        document.querySelector('.miembro').remove()
    }
    while (document.querySelector('.visible')) {
        document.querySelector('.visible').className = 'oculto';
    }
    document.querySelector('#agregar-miembros').disabled = false;
    document.querySelector('#mayor-edad').textContent = 'La mayor edad es...';
    document.querySelector('#menor-edad').textContent = 'La menor edad es...';
    document.querySelector('#edad-promedio').textContent = 'La edad promedio es...';
}
function agregarMiembros(cantidad) {
    const label = document.createElement('label');
    label.textContent = 'Ingrese la edad de los familiares:';
    label.className = 'miembro';
    document.querySelector('#contenedor').appendChild(label);
    for (let i = 1; i <= cantidad; i++) {
        const div = document.createElement('div');
        const familiar = document.createElement('label');
        const edad = document.createElement('input');
        div.className = 'miembro';
        familiar.textContent = `Familiar ${i}:`;
        edad.className = 'edad-del-familiar';
        edad.placeholder = 'Edad';
        div.appendChild(familiar);
        div.appendChild(edad);
        document.querySelector('#contenedor').appendChild(div);
    }
}
function mostrarBotonCalcular() {
    document.querySelector('#calcular-edad').className = 'visible';
}
function mostrarResultados() {
    document.querySelector('#mayor-edad').className = 'visible';
    document.querySelector('#menor-edad').className = 'visible';
    document.querySelector('#edad-promedio').className = 'visible';
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
function convertirListaEnArray(nodeList) {
    const array = [];
    for (let i = 0; i < nodeList.length; i++) {
        array.push(Number(nodeList[i].value));
    }
    return array;
}