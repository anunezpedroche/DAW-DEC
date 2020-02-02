function recuperarJSON(){
    fetch('got.json').then(function(response){return response.json()}).then(function(got){console.log(got);});
}

function init(){
    recuperarJSON();
}

window.onload=init;