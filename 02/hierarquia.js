$(function () {
    //pegando todos os p que estão dentro do Article
    $("article p").css("color", "red");

    $("body *").css({
        display: "block",
        "margin-botton": "10px"
    })
    //Filhos diretos
    $("article > *").css("color", "blue");
    //pegando a div + o p dentro dessa div
    // $("div + p").css("background", "yellow");
    //pegando a div + todos os elementos (*) dentro dessa div
    $("div + *").css("background", "yellow");

    $("div ~ p").text("Irmão");
});