 $(document).ready(function() {
	document.getElementById("filtrar").focus();
	
			/* llamo a la funcion showFilas */
			showFilas(catalogo);
			
			/* Armo la tabla con el resultado de la consulta */
			function showFilas(json) {
				// Vacio el listado 
				$(".listado").html("");
				//console.log(json);
				var cdescextra = "";
				var $table = $('<table  class="table table-hover table-striped"></table>');
				$table.append('<tr><th>Codigo</th><th>Nombre</th><th>Nombre_Cientifico</th><th>Especie</th><th>Imagen</th><th>Estado</th></tr>')
			  
			  $.each(json, function(i, item) {
				  var tr = $('<tr>').append(
					$('<td>').text(item.codigo),
					  $('<td>').text(item.nombre),
					  $('<td>').text(item.nombre_cientifico),
					  $('<td>').text(item.especie),
					  $('<td><img src="img/' + item.imagen +'" width="100" height="100">'),
					  //$('<td>').text(item.detalle_cuidado.descripcion + ','+item.detalle_cuidado.ciclo_riego +','+item.detalle_cuidado.temp+','+item.detalle_cuidado.humedad),
					  $('<td>').text(item.estado)
				  
				  ); 

				  $table.append(tr);
				});
				$(".listado").append($table)

			}

		var nordenb;// = 0;
		var sordenb = 'td:eq(1)'
		 
		 $("input[name=filtro]").change(function () {	 
			
			nordenb = $(this).val();
			
			console.log(nordenb);
		
			if (nordenb == 0){
				sordenb = 'td:eq(1)'; // 
				cplaceholder="Ingrese el Nombre de la planta que desea Buscar...";
			}
				
			if(nordenb == 1){
				sordenb ='td:eq(0)';
				cplaceholder="Ingrese el Codigo de la planta que desea Buscar...";
			}
			if(nordenb == 2){
				sordenb = 'td:eq(3)';	
				cplaceholder="Ingrese la Especie de la planta que desea Buscar...";
			}	
			
			//document.getElementById("filtrar").value = "";
			document.getElementById("filtrar").placeholder=cplaceholder;
			document.getElementById("filtrar").focus();
			
		});
		 
		 

		$("#filtrar").keyup(function () {
			var value = this.value.toLowerCase().trim();

			$("table tr").each(function (index) {
				if (!index) return;
				$(this).find(sordenb).each(function () {
					var id = $(this).text().toLowerCase().trim();
					var not_found = (id.indexOf(value) == -1);
					$(this).closest('tr').toggle(!not_found);
					return not_found;
				});
			});
		});

	
 }); 