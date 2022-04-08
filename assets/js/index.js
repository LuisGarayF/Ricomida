
$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip()

    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });

    $("h4").on("dblclick", function(){
        $(this).css({
        "color": "red",
        });
    });

    $(".title h5").click(function() {
        $(".title p").toggle();
    });

})




