$(document).ready(function(){
    $("#btn1").on('click', function(){
        let saludo="Hola "+ $("#nombre").val();
        alert(saludo);
    });

    $("#btn2").on('click', function(){
        let saludo="Hola "+ $("#nombre").val();
        $("#mensaje").html(saludo);
    });
});