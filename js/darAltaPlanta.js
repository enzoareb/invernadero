$(document).ready(function () {

    const generateRandomString = (num) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result1 = Math.random().toString(36);
        //.substring(0,num);       
        result1 = result1.substring(1, 10);
        return result1;
    }

    let nume = generateRandomString(10);
    nume = nume.substring(1, 10);
    nume = nume.toUpperCase();

    //Asigno un id de Experimento aleatorio
    $('#numero').val(nume);

    $('#agregar').click(function () {

        // Valido que la planta tenga nombre	
        var planta = $("#nombrePlanta").val();	
        if (planta=="") {
            alert('Debe agregar un nombre a la planta!');
            return false;
        }

        // Valido que elijan una especie		
        var indiceEspecie = document.getElementById("especies").selectedIndex;
        if (indiceEspecie == null || indiceEspecie == 0) {
            alert('Debe seleccionar una especie!');
            return false;
        }

        // Valido que elija un fila		
        var fila = $("#fila").val();
        if (fila == "") {
            alert('Debe seleccionar una fila!');
            return false;
        }

        // Valido que elija una columna		
        var columna = $("#columna").val();
        if (columna == "") {
            alert('Debe seleccionar una columna!');
            return false;
        }

        // Valido que complete los cuidados		
        var cuidados = $("#cuidados").val();
        if (cuidados == "") {
            alert('Debe completar los cuidados de la planta!');
            return false;
        }

        alert('planta agregada exitosamente!')

    });

});
