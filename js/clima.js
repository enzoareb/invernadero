
// Maps the API's icons to the ones from https://erikflowers.github.io/weather-icons/
var weatherIconsMap = {
  "0": "wi-day-sunny",
  "1": "wi-day-cloudy",
  "2": "wi-day-cloudy",
  "3": "wi-cloud",
  "4": "wi-day-rain-mix",
  "5": "wi-cloudy",
  "11": "wi-day-cloudy-gusts",
  "18": "wi-day-rain-mix"
};

var dayOfWeek = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

$(function () {
  getWeatherData();
  getAlertsData();
});

async function getWeatherData() {
  const urlApi = "https://weatherservices.herokuapp.com/api/weather/";
  try {
    const response = await fetch(urlApi);
    const forecast = await response.json();
    updateForecast(forecast);
    $("#refreshButton").html("<i class='fa fa-refresh fa-fw'></i> Actualizar");
  } catch (error) {
    console.log(error)
  }
}


// Update view values from passed forecast
function updateForecast(forecast) {

  // Present day
  var today = forecast.items[0];

  $("#cityName").text(toCamelCase(today.name));
  $("#cityCode").text(toCamelCase(today.province));

  $("#tempDescription").text(toCamelCase(today.weather.description));
  $("#humidity").text(today.weather.humidity);
  $("#wind").text(today.weather.wind_speed);
  $("#localDate").text((today.forecast.forecast[0].date));
  $("#main-icon").addClass(weatherIconsMap[today.weather.id] || "wi-day-sunny");
  $("#mainTemperature").text(today.weather.temp);
  //$("#mainTempHot").text(Math.round(today.forecast.forecast[0].temp_max));
  $("#mainTempHot").text(Math.round(23)); //TEMP MAX Y MIN HARDCODEADAS YA QUE LA API DEVUELVE O
  //$("#mainTempLow").text(Math.round(today.forecast.forecast[0].temp_min));
  $("#mainTempLow").text(Math.round(16));


  var forecast = Object.values(today.forecast.forecast);
  // Following days data
  for (var i = 1; i < forecast.length; i++) {
    var day = forecast[i];

    // Day short format e.g. Mon
    const getDay = new Date(day.date);
    //Toma el dia 2022-05-08, pero a las 00:00, como arg esta en -3 GTM, deja la fecha en 2022-05-07 21:00,
    // el +1 es para corregir eso
    var dayName = dayOfWeek[(getDay.getDay() + 1) % 7]; //FUNCION QUE CONSIGUE EL DIA

    // weather icon from map, en caso de no encontrar me pone el día soleado
    var weatherIcon = weatherIconsMap[day.morning.weather_id] || "wi-day-sunny";

    $("#forecast-day-" + i + "-name").text(dayName);
    $("#forecast-day-" + i + "-icon").addClass(weatherIcon);
    $("#forecast-day-" + i + "-main").text("");
    $("#forecast-day-" + i + "-ht").text(Math.round(day.temp_max));
    $("#forecast-day-" + i + "-lt").text(Math.round(day.temp_min));
  }
}

function refreshClick() {
  $("#refreshButton").html("<i class='fa fa-refresh fa-spin fa-fw'></i>");
  getWeatherData();
};


function toCamelCase(str) {
  var arr = str.split(" ").map(
    function (sentence) {
      return sentence.charAt(0).toUpperCase() + sentence.substring(1);
    }
  );
  return arr.join(" ");
}

async function getAlertsData() {
  const urlApi = "https://weatherservices.herokuapp.com/api/alerts/byDay/3";
  try {
    const response = await fetch(urlApi);
    const alertsResponse = await response.json();
    alertDecorator(alertsResponse);
  } catch (error) {
    console.log(error)
  }
}

function alertDecorator(alertas){

  let position = 0;

  Object.values(alertas.alerts).forEach( alerta => {

    const id = "collapse" + position;
    position++
    $("#showAlerts").append(`
    <div class="alert alert-info alert-dismissible fade show" role="alert">
      
      <span class="d-block">
        <strong>${alerta.title.toUpperCase()}</strong> 
      </span>

      <span class="d-block">
        <strong>Zona:</strong> ${formatStringZones(alerta.zones)}
      </span>

      ${decoratorDescription(id, alerta.description)}

      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`); })
}

function formatStringZones(zones){
  const allZones = Object.values(zones);
  let format = "";
  return format.concat(allZones);
}

function decoratorDescription(id, description ) {

  if(!description) return '';

  return `<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#${id}" aria-expanded="false" aria-controls="${id}">
        ver más
      </button>
      <div class="collapse" id="${id}">
        <div class="card card-body">
          ${description}
        </div>
      </div>`;
}

function refreshAlertas(){ 
  $("#showAlerts").empty()
  getAlertsData()
}