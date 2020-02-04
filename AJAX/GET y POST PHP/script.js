function enviarGet(){

    let myInit = {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        }
    };
    let url = new URL('http://192.168.1.144/GOT/rest-get.php');
    let data = {nombre:'Angel'};
    url.search = new URLSearchParams(data).toString();
    fetch(url,myInit).then(res => res.json()).catch(error=>console.log('Error :',error))
    .then(response=>console.log('Success: ',response));

}

function enviarPost(){
    let urlpost = 'http://192.168.1.144/GOT/rest-post.php';
    let formData = new FormData();
    let data = {nombre:'Angel'};
    formData.append('nombre','Angel');
    let myInitPost = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
        }
    };
    
    fetch(urlpost,myInitPost).then(resp => resp.json()).then(respp => console.log(respp));

}

function getXML() {

    let url = 'http://localhost/DAW-DWEC-Server-/proyectoComida/servidor/comida.php';

    fetch(url)
        .then(res => res.text())
        .then(txt => {
            if (window.DOMParser) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(txt, "text/xml");
            }
            let articulos = xmlDoc.getElementsByTagName('articulo');
            let precios = xmlDoc.getElementsByTagName('precio');
            let imgs = xmlDoc.getElementsByTagName('imagen');
            let estados = xmlDoc.getElementsByTagName('estado');

            for (let i = 0; i < articulos.length; i++) {
         
                articulo = articulos[i].textContent;
                precio = precios[i].textContent;
                img = imgs[i].textContent;
                estado = estados[i].textContent;
               
                let divEstado = document.getElementById(estado);

                divEstado.innerHTML += 
                '<div class="producto" draggable="true" id="' + articulo + '">' +
                '<img src="' + img + '">' +
                '<p>' + articulo + '</p>' +
                '<p>' + precio + '</p>' +
                '</div>';
            }
        });
}


function init(){
    enviarGet();
    enviarPost();
}

window.onload = init;