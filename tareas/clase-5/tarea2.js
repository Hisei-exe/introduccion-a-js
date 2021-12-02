//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
const $mostrarInformacion = document.querySelector('#mostrar-informacion');
$mostrarInformacion.onclick = function() {
    const primerNombre = document.querySelector('#primer-nombre-usuario').value;
    const segundoNombre = document.querySelector('#segundo-nombre-usuario').value;
    const apellido = document.querySelector('#apellido-usuario').value;
    const edad = Number(document.querySelector('#edad-usuario').value);
    document.querySelector('#caja-de-texto').textContent = `Sos ${primerNombre} ${segundoNombre} ${apellido} y tenes ${edad} años.`;
    document.querySelector('h1').textContent = `Bienvenido ${primerNombre}!`;
    return false;
}


/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */
