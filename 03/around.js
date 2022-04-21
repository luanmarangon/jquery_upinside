$(function () {
    //cada um separado
    // $("p").wrap("<div>");

    //envolvidos em um unico
    $("p").wrapAll("<div>");

    $("p").wrapInner("<span>");

    $("span").unwrap("p");

    $("span").wrap("<h2>");

});