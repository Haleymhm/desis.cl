$(document).ready(function() {
    // Lista de Regiones
    $.ajax({
        url: "controller/getRegion.php",
        type: "GET",
        success: function(datos) {
            // Mostrar los datos en la consola del navegador
            console.log('Obtener Lista de Regiones');
            console.log(datos);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Mostrar un mensaje de error en la consola del navegador
            console.log("Error al consultar los datos: " + textStatus + " - " + errorThrown);
        }
    });

    //Obtener Lista de candidatos
    $.ajax({
        url: "controller/getCandidato.php",
        type: "GET",
        success: function(datos) {
            // Mostrar los datos en la consola del navegador
            console.log('Obtener Lista de candidatos');
            console.log(datos);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Mostrar un mensaje de error en la consola del navegador
            console.log("Error al consultar los datos: " + textStatus + " - " + errorThrown);
        }
    });


    function getComunasPorRegion(idcomuna) {
        $.ajax({
            url: "controller/getComuna.php?idregion="+idcomuna,
            type: "GET",
            success: function(datos) {
                // Mostrar los datos en la consola del navegador
                console.log(datos);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Mostrar un mensaje de error en la consola del navegador
                console.log("Error al consultar los datos: " + textStatus + " - " + errorThrown);
            }
        });
    }
    
    $('#rut').focusout(function(){
        var div1, div2, div3, div4;
        rut=$(this).val();
    
        if(rut.length==9){    
            div1=rut.slice(0,2);
            div2=rut.slice(2,5);
            div3=rut.slice(5,8);
            div4=rut.slice(8,9);
    
            rut=$(this).val(div1 + "." + div2 + "." + div3 + "-" + div4);
        }
    
        if(rut.length==8){    
            div1=rut.slice(0,1);
            div2=rut.slice(1,4);
            div3=rut.slice(4,7);
            div4=rut.slice(7,8);
    
            rut=$(this).val(div1 + "." + div2 + "." + div3 + "-" + div4);
        }
    });
    
    function validateOnlyNumbersOnInput(input){
        var re = /^[0-9]*$/i;
        let msg = input.value;
        // Si el caracter introducido no es un número
        if(!(msg.match(re) !== null)){
            // Elimina el último caracter introducido
            input.value = msg.slice(0, msg.length - 1);
        }
    }

    function sendForm() {
        alert('Boton Enviar');
        
    }


    jQuery(document).ready(function(){
        jQuery("#alias").on('input', function (evt) {
            jQuery(this).val(jQuery(this).val().replace(/[^0-9][^a-zA-Z]/g, ''));
        });
    });

});

