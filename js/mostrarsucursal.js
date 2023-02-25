var feature;
var map;
var ubicacion;
var clusterTemp;


function Inicio() {

    var ungsLocation = [-34.5221554, -58.7000067];
    map = L.map('mapid').setView(ungsLocation, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

   var cluster = new L.markerClusterGroup();
   clusterTemp = new L.markerClusterGroup();
  
    var ubicaciones= [];
    $.each(sucursales, function(id, data){
      let latitud   = data.coordenadas.y;
      let longitud  = data.coordenadas.x;
      
      let ubicacion = new L.marker(L.latLng(latitud, longitud));
      ubicaciones.push(ubicacion);
      
    });
    
	console.log(ubicaciones);
    cluster.addLayers(ubicaciones);
    cluster.addTo(map);

	 var $select = $('#sucursales');

// Recorro el repositorio de sucursales	y armo la vista.
    $.each(sucursales, function(id,data){
      let latitud=data.coordenadas.y;
      let longitud=data.coordenadas.x;
	  let sucursal = data.sucursal;
	  let calle = data.calle;
	  let altura = data.altura;
	  let localidad = data.localidad;
	  let horario = data.horario;
	  let telefono = data.telefono;
      
      let boton = document.createElement("button");
      boton.setAttribute("class", "btn btn-primary");
	  boton.innerHTML = "Ver en Mapa";
	  
	  $select.append('<p>');
	  $select.append('<div class="card">');
	  //$select.append('<div class="card-body">');
	  $select.append('<h4 class="card-title">'+ sucursal+'</h4>');
	  $select.append('<h5 class="card-title">'+ calle+" "+altura+" - "+localidad+"<br>"+horario+"<br>"+"Tel.: "+telefono+'</h5>');
	  $select.append(boton);  	

	  boton.onclick = function() {
		  fijarMapa(sucursal,calle,altura,localidad,horario,telefono,latitud,longitud);
	  };
	
	}); 
	 
 
  }

// Seteo el mapa y preparo la cadena a mostrar en el mapa
function fijarMapa(sucursal,calle,altura,localidad,horario,telefono,latitud,longitud){
  let punto = [latitud,longitud]
  let cadena = sucursal+"<br>"+calle+" "+altura+" - "+localidad+"<br>"+horario+"<br>"+"Tel.: "+telefono+"<br>" +"Lat.: " +latitud+"   "+"Long.: "+longitud; 
  map.setView(punto, 15);
  fijarglobo(punto,cadena);
}

// Muestro el globo con la ubicacion y otros datos de la sucursal
function fijarglobo(punto,cadena){
	L.marker(punto).addTo(map)
		.bindPopup(cadena)
		.openPopup();

}


