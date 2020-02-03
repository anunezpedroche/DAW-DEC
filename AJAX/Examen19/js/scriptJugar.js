function recuperarJSON() {
    return fetch('http://192.168.1.144:8000/AJAX/Examen19/got.json').then(
        response => response.json())
        .then(got => {
            miGot = got;
        });
}