let miGot;

function recuperarJSON() {
    return fetch('http://192.168.1.144:8000/AJAX/Examen19/got.json').then(
        response => response.json())
        .then(got => {
            miGot = got;
        });
}

async function init() {
    await recuperarJSON();
    asdf();
}

function asdf() {
    let contenedorFichas = document.getElementById('contenedorFichas');
    miGot.got.forEach(e => {
    let img = document.createElement('img');
    img.src = e.imagen;
    img.classList.add('foto');
    let datos = document.createElement('div');
    datos.classList.add('datos');
    datos.innerHTML =
        `<div class="small cabecera">Nombre</div>
        <div class="medium cabecera">Apellidos</div>
        <div class="small dato">${e.nombre}</div>
        <div class="medium dato">${e.apellidos}</div>
        <div class="medium cabecera">Padres</div>
        <div class="small cabecera">Casa</div>
        <div class="medium dato">${e.padres}</div>
        <div class="small dato">${e.familia}</div>
        <div class="big cabecera">Título</div>
        <div class="big dato">${e.titulo}</div>`;
        contenedorFichas.appendChild(img);
        contenedorFichas.appendChild(datos);
    });
}

window.onload = init;