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

    $("input.alias1").bind('keypress', function(event) {
        //validateOnlyNumbersOnInput(event)
        /*var regex = new RegExp("^[a-zA-Z0-9 ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }*/
    });



        function revisarDigito(dvr){
                dv = dvr + ""
                if( dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9' && dv != 'k'  && dv != 'K')
                {
                        alert("Debe ingresar un digito verificador valido");
                        window.document.form1.rut.focus();
                        window.document.form1.rut.select();
                        return false;
                }
                return true;
        }
 
        function revisarDigito2(crut)
        {
                largo = crut.length;
                if(largo<2)
                {
                        alert("Debe ingresar el rut completo")
                        window.document.form1.rut.focus();
                        window.document.form1.rut.select();
                        return false;
                }
                if(largo>2)
                        rut = crut.substring(0, largo - 1);
                else
                        rut = crut.charAt(0);
                dv = crut.charAt(largo-1);
                revisarDigito( dv );
        
                if ( rut == null || dv == null )
                        return 0
                        var dvr = '0'
                        suma = 0
                        mul  = 2
        
                        for (i= rut.length -1 ; i >= 0; i--){
                                suma = suma + rut.charAt(i) * mul
                                if (mul == 7)
                                        mul = 2
                                        else
                                                mul++
                        }
                        res = suma % 11
                        if (res==1)
                                dvr = 'k'
                                else if (res==0)
                                        dvr = '0'
                                        else
                                        {
                                                dvi = 11-res
                                                dvr = dvi + ""
                                        }
                                        if ( dvr != dv.toLowerCase() )
                                        {
                                                alert("EL rut es incorrecto")
                                                window.document.form1.rut.focus();
                                                window.document.form1.rut.select();
                                                return false
                                        }
        
                                        return true
        }
 
        function Rut(texto)
        {
                var tmpstr = "";
                for ( i=0; i < texto.length ; i++ )
                        if ( texto.charAt(i) != ' ' && texto.charAt(i) != '.' && texto.charAt(i) != '-' )
                                tmpstr = tmpstr + texto.charAt(i);
                        texto = tmpstr;
                largo = texto.length;

                if ( largo < 2 )
                {
                        alert("Debe ingresar el rut completo")
                        window.document.form1.rut.focus();
                        window.document.form1.rut.select();
                        return false;
                }

                for (i=0; i < largo ; i++ )
                {
                        if ( texto.charAt(i) !="0" && texto.charAt(i) != "1" && texto.charAt(i) !="2" && texto.charAt(i) != "3" && texto.charAt(i) != "4" && texto.charAt(i) !="5" && texto.charAt(i) != "6" && texto.charAt(i) != "7" && texto.charAt(i) !="8" && texto.charAt(i) != "9" && texto.charAt(i) !="k" && texto.charAt(i) != "K" )
                        {
                                alert("El valor ingresado no corresponde a un R.U.T valido");
                                window.document.form1.rut.focus();
                                window.document.form1.rut.select();
                                return false;
                        }
                }

                var invertido = "";
                for ( i=(largo-1),j=0; i>=0; i--,j++ )
                        invertido = invertido + texto.charAt(i);
                var dtexto = "";
                dtexto = dtexto + invertido.charAt(0);
                dtexto = dtexto + '-';
                cnt = 0;

                for ( i=1,j=2; i<largo; i++,j++ )
                {
                        //alert("i=[" + i + "] j=[" + j +"]" );
                        if ( cnt == 3 )
                        {
                                dtexto = dtexto + '.';
                                j++;
                                dtexto = dtexto + invertido.charAt(i);
                                cnt = 1;
                        }
                        else
                        {
                                dtexto = dtexto + invertido.charAt(i);
                                cnt++;
                        }
                }

                invertido = "";
                for ( i=(dtexto.length-1),j=0; i>=0; i--,j++ )
                        invertido = invertido + dtexto.charAt(i);

                window.document.form1.rut.value = invertido.toUpperCase()

                if(revisarDigito2(texto))
                        return true;
                return false;
        }




    $('#form1').on('submit', function(event) {
        event.preventDefault(); // prevenir el envío del formulario de forma convencional
        var datos = $(this).serialize(); // obtener los datos del formulario
        $.ajax({
          url: 'controller/postVotacion.php',
          method: 'POST',
          data: datos,
          success: function(respuesta) {
            // código a ejecutar si la petición es exitosa
            document.getElementById("msgOK").style = "display: block"
            console.log(respuesta);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // código a ejecutar si hay un error en la petición
            console.log(textStatus + ': ' + errorThrown);
          }
        });
      });
});

