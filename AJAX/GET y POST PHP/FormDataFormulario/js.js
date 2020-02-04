
function enviarForm() {

    let form = document.querySelector('form');
    console.log(form);

    construirPeticion(form);
}

function construirPeticion(form) {

    let url = new URL('http://localhost/pruebaAngel/BBDD/php.php');
    
    let datos = new FormData(form);
    
    fetch(url,{
        method:'POST',
        body:datos
    }).then(res => {
        res.json()
    }).then(response => console.log(response));

    console.log(datos);
}

function init() {

    document.querySelector('#go').addEventListener('click', enviarForm);
}

window.onload = init;