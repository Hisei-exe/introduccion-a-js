//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector('#agregar-clases').onclick = function () {
    borrarClases();
    agregarClases(Number(document.querySelector('#cantidad-de-clases').value));
    mostrarBotonCalcular();
    mostrarTexto();
    return false;
};

document.querySelector('#calcular-tiempo').onclick = function () {
    let segundosTotales = 0;
    let minutosTotales = 0;
    let horasTotales = 0;
    let segundosFinal = 0;
    let minutosFinal = 0;
    let horasFinal = 0;

    for (let i = 0; i < document.querySelectorAll('.segundos').length; i++) {
        segundosTotales += Number(document.querySelectorAll('.segundos')[i].value);
    }
    segundosFinal = segundosTotales % 60;
    minutosTotales = Math.floor(segundosTotales / 60);

    for (let i = 0; i < document.querySelectorAll('.minutos').length; i++) {
        minutosTotales += Number(document.querySelectorAll('.minutos')[i].value);
    }
    minutosFinal = minutosTotales % 60;
    horasTotales = Math.floor(minutosTotales / 60);

    for (let i = 0; i < document.querySelectorAll('.horas').length; i++) {
        horasTotales += Number(document.querySelectorAll('.horas')[i].value);
    }
    horasFinal = horasTotales;

    document.querySelector('#tiempo-total').textContent = `El tiempo total es ${horasFinal} horas ${minutosFinal} minutos ${segundosFinal} segundos.`

    return false;
}

function borrarClases() {
    while (document.querySelector('.clases')) {
        document.querySelector('.clases').remove()
    }
}
function agregarClases(cantidadDeClases) {
    for (let i = 1; i <= cantidadDeClases; i++) {
        const $div = document.createElement('div');
        $div.className = 'clases';
        const $label = document.createElement('label');
        $label.textContent = `Clase ${i}:`;

        const $horas = document.createElement('input');
        $horas.type = 'number';
        $horas.className = 'horas';
        $horas.placeholder = 'Horas';

        const $minutos = document.createElement('input');
        $minutos.type = 'number';
        $minutos.className = 'minutos';
        $minutos.placeholder = 'Minutos';

        const $segundos = document.createElement('input');
        $segundos.type = 'number';
        $segundos.className = 'segundos';
        $segundos.placeholder = 'Segundos';

        $div.appendChild($label);
        $div.appendChild($horas);
        $div.appendChild($minutos);
        $div.appendChild($segundos);

        document.querySelector('#clases').appendChild($div);
    }
}

function mostrarBotonCalcular() {
    document.querySelector('#calcular-tiempo').className = '';
}
function mostrarTexto() {
    document.querySelector('#tiempo-total').className = '';
}
