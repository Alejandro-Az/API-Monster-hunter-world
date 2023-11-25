let listaInformacion = document.getElementById('listaInformacion');

function obtenerInformacion() {
    axios.get('https://mhw-db.com/monsters')
    .then(function(respuesta) {
        let salida = "";
        for(let datos of respuesta.data) {
            salida += 
            `
            <tr>
                <td>${datos.id}</td>
                <td>${datos.name}</td>
                <td>${datos.species}</td>
                <td>${datos.type}</td>
                <td>${datos.description}</td>
            </tr>
            `
        }
        listaInformacion.innerHTML = salida;
    }).catch(function(error) {
        console.log(error);
    });
}