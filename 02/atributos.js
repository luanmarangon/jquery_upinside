$(function () {
    $("[class]").css("background", "#ccc");

    $("[data-upinside='true']").css("background", "#006699");


    $("a[title!='UpInside']").css("background", "green");

    $("[class^='jquery']").css("background", "#0099ff");

    $("[class$='div']").css("color", "#fff");

    $("[class*='r']").css("font-weight", "bold");

    $("[class~='jquery']").css("text-transform", "uppercase");

    $("[class|='jquery-essentials']").css("border-bottom", "3px solid red");

    $("[class*='jquery'][data-upinside]").css("color", "pink");
});