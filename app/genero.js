// *** Género ***
function agregarDatos() {
  var nuevoNombre = document.getElementById("nuevoNombre").value;
  var nuevoGenreId = document.getElementById("nuevoGenreId").value;

  var nuevoDato = {
    name: nuevoNombre,
    genre_id: nuevoGenreId
  };
  

  fetch('http://127.0.0.1:8000/api/bands', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoDato)
    
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      alert("Nuevo dato agregado");
      obtenerDatos();
    })
    
}
console.log("Mundo")

function borrar(id) {
  id = parseInt(id);
  fetch('http://127.0.0.1:8000/api/bands/' + id, {
  method: "DELETE"
})
.then(res => res.json())
.then(json => {
  console.log(json);
  alert("datos eliminados");
})
.catch(error => console.error('Error:', error));
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
      var contenido = "";
      for (var i = 0; i < datos.length; i++) {
        if (datos[i].name != undefined) {
          contenido =
            contenido +
            "<tr><td>" +
            datos[i].name +
            "</td><td>" +
            "</td><td><button class='btn btn-warning'>Editar</button>" +
            "<button class='btn btn-danger' onclick='borrar(" +
            datos[i].id +
            ")'>Eliminar</button></td></tr>";
        }
      }
      tabla.innerHTML = contenido;
      consumir();
    });
}



function consumir() {
  var endPoint = document.getElementById("endpoint").value;
  var name = [];
  

  // Llamado a la API
  fetch(endPoint)
    // Promesa cuando se cumple o cuando la respuesta es exitosa
    .then(function (respuesta) {
      return respuesta.json();
    })
    // Promesa recibe los datos en formato JSON
    .then(function (datos) {
      for (var i = 0; i < datos.length; i++) {
        if (datos[i].name != undefined) {
          name.push(datos[i].name);
        }
      }
      //Grafica de burbujas
      var trace1 = {
        x: name,
        mode: 'markers',
        marker: {
          size: [40, 60, 80, 100]
        }
      };
      var data = [trace1];
      var layout = {
        title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 600
      };
      Plotly.newPlot('myDiv4', data, layout);
    })
}