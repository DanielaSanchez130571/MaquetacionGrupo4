// ************ Albumes *******
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
        if (datos[i].name != undefined && datos[i].band_id != undefined && datos[i].release_date != undefined && datos[i].place != undefined && datos[i].duration != undefined && datos[i].copies_sold != undefined) {
          contenido =
            contenido +
            "<tr><td>" +
            datos[i].name +
            "</td><td>" +
            datos[i].band_id +
            "</td><td>" +
            datos[i].release_date +
            "</td><td>" +
            datos[i].place +
            "</td><td>" +
            datos[i].duration +
            "</td><td>" +
            datos[i].copies_sold +
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
  var band_id = [];
  var release_date = [];
  var place = [];
  var duration = [];
  var copies_sold = [];

  // Llamado a la API
  fetch(endPoint)
    // Promesa cuando se cumple o cuando la respuesta es exitosa
    .then(function (respuesta) {
      return respuesta.json();
    })
    // Promesa recibe los datos en formato JSON
    .then(function (datos) {
      for (var i = 0; i < datos.length; i++) {
        if (datos[i].name != undefined && datos[i].band_id != undefined && datos[i].release_date != undefined && datos[i].place != undefined && datos[i].duration != undefined && datos[i].copies_sold != undefined) {
          name.push(datos[i].name);
          duration.push(datos[i].duration);
          release_date.push(datos[i].release_date);
          place.push(datos[i].place);
          duration.push(datos[i].duration);
          copies_sold.push(datos[i].copies_sold);
        }
      }

      var data = [
        {
          x: name,
          y: duration,
          type: "bar",
          orientation: "v",
          marker: { color: "rgba(0,0,255)" },
        },
      ];

      var layout = {
        title: "Gráfica de barras",
      };

      Plotly.newPlot("myDiv1", data, layout);

      var data = [{
        values: copies_sold,
        labels: name,
        type: 'pie'
      }];
      
      var layout = {
        height: 600,
        width: 1000
      };
      
      Plotly.newPlot('myDiv2', data, layout);

      var myPlot = document.getElementById('myDiv'),
        x = release_date,
        y = place,
        data = [{
          x: x, y: y, type: 'scatter',
          mode: 'markers', marker: { size: 20 }
        }],
        layout = {
          hovermode: 'closest',
          title: 'Click on Points'
        };

      Plotly.newPlot('myDiv3', data, layout);

      myPlot.on('plotly_click', function () {
        alert('You clicked this Plotly chart!');
      });

    });
}



