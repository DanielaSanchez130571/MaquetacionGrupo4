// **** Conciertos **
function post() {
  document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    var datos = {
      nombre: document.getElementById("nombre").value,
      genero: document.getElementById("genero").value,
    }

    fetch('http://127.0.0.1:8000/api/concerts', {
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
  id = parseInt(id);
  fetch('http://127.0.0.1:8000/api/concerts' + id, {
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
      var contenido = "";
      for (var i = 0; i < datos.length; i++) {
        if (datos[i].name != undefined && datos[i].band_id != undefined && datos[i].date != undefined && datos[i].time != undefined && datos[i].place != undefined) {
          contenido =
            contenido +
            "<tr><td>" +
            datos[i].name +
            "</td><td>" +
            datos[i].date +
            "</td><td>" +
            datos[i].band_id +
            "</td><td>" +
            datos[i].time +
            "</td><td>" +
            datos[i].place +
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
  var place = [];
  var date= [];
  var band_id = [];
  var time = [];

  // Llamado a la API
  fetch(endPoint)
    // Promesa cuando se cumple o cuando la respuesta es exitosa
    .then(function (respuesta) {
      return respuesta.json();
    })
    // Promesa recibe los datos en formato JSON
    .then(function (datos) {
      for (var i = 0; i < datos.length; i++) {
        if (datos[i].place != undefined && datos[i].time != undefined) {
          place.push(datos[i].place);
          time.push(datos[i].time);
          
        }
      }

      var data = [{
        values: time,
        labels: place,
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot('myDiv1', data, layout);
  
    })}