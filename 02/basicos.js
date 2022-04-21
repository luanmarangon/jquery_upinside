$(function () {
    // #######teste.php#######

    $(".entrar").on("click", function (e) {
        var element = $(this);
        setTimeout(function () {
            element.fadeOut();
        }, 1000);
    }).text("OK").css("color", "green");


    // #######01-basicos.php#######
    //*******Seletor de Elemento*******
    $("b").text("jQuery Essentials").css("color", "red");
    // console.warn($("b")[0].offsetTop);
    // console.log($("b"));

    //*******Seletor de Classe*******
    $(".jquery").css("background", "green");

    //*******Seletor de ID*******
    $("#jquery").css("background", "red");

    //*******Seletor All("*")*******
    $("div *").css("border", "1px solid #ccc");

    //*******Seletor Multiplos*******
    $(".jquery, b").css({
        background: "blue",
        color: "red",
        'border-radius': "4px",
        padding: "10px",
        'font-size': "1em"
    })
});