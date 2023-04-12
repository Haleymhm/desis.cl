$(document).ready(function() {
    // Consultar los datos con AJAX
    $.ajax({
        url: "controller/getRegion.php",
        type: "GET",
        //dataType: "json",
        success: function(datos) {
            // Mostrar los datos en la consola del navegador
            console.log(datos);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Mostrar un mensaje de error en la consola del navegador
            console.log("Error al consultar los datos: " + textStatus + " - " + errorThrown);
        }
    });
});