function post() {
    document.getElementById("myform").addEventListener("submit", function (event) {
        event.preventDefault();
        var datos = {
            nombre: document.getElementById("nombre").value,
            genero: document.getElementById("genero").value,
        }

        fetch('http://127.0.0.1:8000/api/bands', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    })
}


function borrar(id) {
    id=parseInt(id);
    fetch('http://127.0.0.1:8000/api/bands' + id, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => console.log(json))
        alert("datos eliminados");

}


function obtenerDatos() {
    var endPoint = document.getElementById("endpoint").value;
    var tabla = document.getElementById("tbody");
    fetch(endPoint)
        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (datos) {
            console.log(datos);
            var names = [];
            var genre_ids = [];
            var contenido = "";
            for (var i = 0; i < datos.length; i++) {
                if ((datos[i].name != undefined) && (datos[i].genre_id != undefined)) {
                    names.push(datos[i].name);
                    genre_ids.push(datos[i].genre_id);
                }
                for (let i = 0; i < datos.length; i++) {
                    contenido = contenido + "<tr><td>" + datos[i].name + "</td><td>" + datos[i].genre_id + "</td><td><button class='btn btn-warning'>Editar</button>" + "<button class='btn btn-danger' onclick='borrar(" + datos[i].id + ")'>Eliminar</button></td></tr>";
                }
            };
            tabla.innerHTML = contenido;
        })
}
