$(function () {
    $("p:parent").css("background", "red");

    $("p:empty").html("<b>Este está vazio!</b>");

    $("p:contains('Essentials')").css("color", "#fff");


    $("p:has('b')").text("É este aqui!");
});