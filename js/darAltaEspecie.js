$(document).ready(function () {

    $('#agregar').click(function () {

        // Valido que la especie tenga nombre	
        var nombreEspecie = $("#nombreEspecie").val();	
        if (nombreEspecie=="") {
            alert('Debe agregar un nombre a la especie!');
            return false;
        }

        // Valido que la especie tenga nombre cientifico		
        var nombreCientifico = $("#nombreCientifico").val();	
        if (nombreCientifico=="") {
            alert('Debe asignarle un nombre cientifico a la especie!');
            return false;
        }

        // Valido que la especie tenga nombre clase		
        var clase = $("#clase").val();	
        if (clase=="") {
            alert('Debe asignarle una clase a la especie!');
            return false;
        }

        // Valido que la especie tenga nombre clase		
        var fruto = $("#fruto").val();	
        if (fruto=="") {
            alert('Debe asignarle un fruto a la especie!');
            return false;
        }

        // Valido que la especie tenga nombre clase		
        var color = $("#color").val();	
        if (color=="") {
            alert('Debe asignarle un color a la especie!');
            return false;
        }

        // Valido que la especie tenga nombre clase		
        var riego = $("#riego").val();	
        if (riego=="") {
            alert('Debe asignarle un ciclo de riego a la especie!');
            return false;
        }

        // Valido que la especie tenga nombre clase		
        var temperatura = $("#temperatura").val();	
        if (temperatura=="") {
            alert('Debe asignar la temperatura adecuada!');
            return false;
        }

        // Valido que complete los cuidados		
        var cuidados = $("#cuidados").val();
        if (cuidados == "") {
            alert('Debe completar los cuidados de la planta!');
            return false;
        }
        
        alert('especie agregada exitosamente!')

    });


});
