// CONSUMIR LA API
function consumir() {
  var endPoint = document.getElementById('endPoint').value;
  var nomIndex = '';
  var gameIndex = '';
  var nomIndex1 = '';
  var gameIndex1 = '';
  var data = [];
  var datap = [];
  var layoutp = [];
  var trace1 = '';
  var trace2 = '';
  var datab = [];
  var layoutb = [];
  var layoutgb = '';
  var dataBP = [];
  // Llamado a la API
  fetch(endPoint)

    // Promesa cuando se cumple o cuando la respuesta es exitosa
    .then(function (respuesta) {
      return respuesta.json();
    })

    //Promesa recibe los datos en formato JSON
    .then(function (datos) {
      
      var nomIndex = [];
      var gameIndex = [];
      console.log(nomIndex);
      console.log(gameIndex);
      for (var i = 0; i < 5; i++) {
        nomIndex.push(datos['game_indices'][i]['version']['name']);
        gameIndex.push(datos['game_indices'][i]['game_index']);}
      data = [
        {
          x: nomIndex,
          y: gameIndex,
          type: 'bar',
          orientation: "v",
          marker: { color: "rgba(0,0,255)" }
        }
      ];
      layoutgb = {
        title: "Grafica de barras"
      };
      console.log('Data ' + data[0].x);
      console.log('Data y ' + data[0].y);
      console.log('Data type ' + data[0].type);
      //Recordar cambiar el myDiv1 por myDiv2,3 o 4
      Plotly.newPlot('myDiv1', data, layoutgb);

      // Grafica de pie
      datap = [
        {
          values: gameIndex,
          labels: nomIndex, nomIndex,
          type: "pie",
        }
      ];

      layoutp = {
        height: 400,
        width: 500,
        title: "Pie Charts"
      };

      Plotly.newPlot('myDiv2', datap, layoutp);

      //grafica box

      trace2 = {
        y: gameIndex,
        type: 'box'
      };


      dataBP = [trace2];

      Plotly.newPlot('myDiv3', dataBP);

       //Grafica de burbujas
       var trace1 = {
        x: nomIndex,
        y: gameIndex,
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





