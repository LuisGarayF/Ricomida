
// Evento listener 

$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip()


    // Al hacer clic en el boton se ejecuta un alert
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });


    // Cambio de color en los titulos h4 con doble clic
    $("h4").on("dblclick", function(){
        $(this).css({
        "color": "red",
        });
    });


    // Al hacer un clic se activa el metodo toogle para ocultar el texto en p
    $(".title h5").click(function() {
        $(".title p").toggle();
    });

})




