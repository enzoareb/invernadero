  $(document).ready(function() {

// Genera un código al azar	
	const  generateRandomString = (num) => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result1= Math.random().toString(36);
		//.substring(0,num);       
		result1= result1.substring(1, 10);
        return result1;
    }
	
	let nume = generateRandomString(10);
	nume = nume.substring(1, 10);
	nume = nume.toUpperCase();
	
	//Asigno un id de Experimento aleatorio
	$('#numero').val(nume);
	console.log(generateRandomString(7));
	
	var fecha;
	var codigo;
	var especie;
	var planta;
	var cuidados;
	var jardinero;
	

	$('#agregar').click(function() {
	
		n =  new Date();
		
		fecha = moment(n,'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
			
		codigo = $("#numero").val();
		
		var especieid = $("#especies").val();
		var especie_nombre = $('select[name="especies"] option:selected').text();
		especie = especieid + "-" + especie_nombre;
		console.log(especieid + "-" + especie_nombre);
		
		var plantaid = $("#plantas").val();
		var planta_nombre = $('select[name="plantas"] option:selected').text();
		planta = plantaid + "-" + planta_nombre;
		console.log(plantaid + "-" + planta_nombre);
		
		cuidados = $("#descripcion").val();
		
		var contacto = $("#contacto").val();
		
		var jardineroid = $("#empleados").val();
		var jardinero_nombre = $('select[name="empleados"] option:selected').text();
		jardinero = jardineroid + "-"+jardinero_nombre + " // "+ contacto;
		console.log(jardineroid + ","+jardinero_nombre);
		
// Valido que elijan una especie		
		indiceEspecie = document.getElementById("especies").selectedIndex;
		if( indiceEspecie == null || indiceEspecie == 0 ) {
			alert('Debe seleccionar una especie!');
			document.getElementById("especies").focus();
			return false;
		}


// Valido que elijan una planta		
		indicePlanta = document.getElementById("plantas").selectedIndex;
		if( indicePlanta == null || indicePlanta == 0 ) {
			alert('Debe seleccionar una Planta!');
			document.getElementById("plantas").focus();
			return false;
		}
		
		cargarRegistro();
		mostrartabla('vertabla','ocultarform','volver',1)

	});


// Muestro registro recien ingresado
	function cargarRegistro()	{
		var i = 1; 
		var fila = '<tr id="row' + i + '"><td>'+ fecha +'</td><td>'+ codigo + '</td><td>'+ especie + '</td><td>'+ planta + '</td><td>'+ cuidados + '</td><td>'+  + '</td><td>'+ jardinero + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Eliminar</button></td></tr>'; 

		i++;

		$('#mytable tr:first').after(fila);
		$("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
		var nFilas = $("#mytable tr").length;
		$("#adicionados").append(nFilas - 1);
		//le resto 1 para no contar la fila del header
	
	}


//	Función para mostrar u ocultar elementos //
	function mostrartabla(id, id2,id3,cond) {
			if(cond==1){
				document.getElementById(id).style.display = 'block';
				document.getElementById(id2).style.display = 'none';
				document.getElementById(id3).style.display = 'block';
			}else{
				if(cond == 2){
					document.getElementById(id).style.display = 'none';
					document.getElementById(id2).style.display = 'block';	
					document.getElementById(id3).style.display = 'none';
				}
			}
	}



//Para Borrar el renglon con el evento click del boton
	$(document).on('click', '.btn_remove', function() {
	  var button_id = $(this).attr("id");
		//cuando da click obtengo el id del boton
		
		if (confirm('Está seguro que desea eliminar el registro?')) {
		// Lo borra
			$('#row' + button_id + '').remove(); //borra la fila
			//limpia el para que vuelva a contar las filas de la tabla
			$("#adicionados").text("");
			var nFilas = $("#mytable tr").length;
			$("#adicionados").append(nFilas - 1);
			$("#mensaje").text("El Experimento se ha Eliminado correctamente!");
			
		} else {
		// Muestro por consola
			console.log('No se ha borrado el registro.');
		}

	});	
	
  
});



