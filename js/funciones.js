$(document).ready(function() {
	 
    var $select = $('#especies');
	var $select2 = $('#plantas');
	var $verimg = $('#verimagen');
	
	// Cargo el select desde el JSON de especies 
    $.each(especies, function(id, name) {
      $select.append('<option value=' + name.id + '>' + name.nombre + '</option>');
    });
	
	


//--------------------------------------------------------------------------------------//
  ///  var $select = $('#plantas');
///	 var $verimg = $('#verimagen');
	
	
	// Envio el evento change al select
		$(document).on('change', '#especies', function(event) {
			$("#plantas").each(function(){
				$("#plantas").text("");
				$select2.append('<option>Seleccione una Planta</option>');	
        	});
			 seleccionarRegistro();
		});
	
	
	function seleccionarRegistro()	{
		var selectItem, selectText, textoMostrar,descrip;

		// Obtenemos el valor seleccionado
		selectItem = $("#especies").val();
		console.log(selectItem);
		
		// Vemos si el select está seleccionado
		if (selectItem == ""){
			// Limpio el texto
			$("#contacto").val("");
		}
		else
		{
			// obtenemos el texto del control select
			selectText = $("#especies option:selected").text();

			// Busco otros atributos del JSON.Luis
			$.each(plantas, function(i, v) { 
				if (v.id == selectItem) { 
					textoMostrar =  v.nombre ; 
					
					$select2.append('<option value=' + v.codigo + '>' + v.nombre + '</option>');						
					console.log(v.id +", "+ v.nombre);

				} 
			});
			

		}
	}
	
	
	
	$(document).on('change', '#plantas', function(event) {
			// Obtenemos el valor seleccionado
			var selectItem2, selectText2, textoMostrar2;
			
			selectItem2 = $("#plantas").val();
			//alert(selectItem2);		
			console.log(selectItem2);
				
			// obtenemos el texto del control select
			selectText2 = $("#plantas option:selected").text();
		
			// Busco otros atributos 
			$.each(plantas, function(i, v) { 
				if (v.nombre == selectText2) { 
					textoMostrar2 =  v.detalle_cuidado.ciclo_riego + ", " + v.detalle_cuidado.temp +", "+ v.detalle_cuidado.humedad +", "+ v.detalle_cuidado.descripcion;
					console.log(textoMostrar2);
					
					$("#descripcion").val(textoMostrar2);
					
					$verimg.empty();
					$verimg.append('<img src=img/' + v.imagen +' width="100%" height="100%">');
					
					console.log(v.imagen);
					
				}

			}); 
			
		});
	

//--------------------------------------------------------------------------------------//
	 	var $select = $('#empleados');
	
	// Cargo el select desde el JSON de empleados 
    $.each(empleados, function(id, name) {
      $select.append('<option value=' + name.id + '>' + name.nombre + '</option>');
    });
	

	// Envio el evento change al select
		$(document).on('change', '#empleados', function(event) {
			 seleccionarRegistroEmpleado();
		});
	
	
	function seleccionarRegistroEmpleado()	{
		var selectItem, selectText, textoMostrar;

		// Obtenemos el valor seleccionado
		selectItem = $("#empleados").val();

		// Vemos si el select está seleccionado
		if (selectItem == ""){

			// Limpio el texto
			$("#contacto").val("");
		}
		else
		{
			// obtengo el texto del control select
			selectText = $("#empleados option:selected").text();

			// Busco otros atributos del JSON.Luis
			$.each(empleados, function(i, v) { 
				if (v.id == selectItem) { 
					textoMostrar =  v.telefono +", "+ v.correo;
				} 
			});

			$("#contacto").val(textoMostrar);
			console.log(textoMostrar);

		}

	}	
	 	 
	
	///$(document).ready(function(){
     $('#mi_lista').on('change', function (){
         reload();//código personalizable
		});
	///});
	 
	 
 }); 