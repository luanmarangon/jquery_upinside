$(function () {
    $("p:not('.p')").css("font-weight", "bold");

    $("p:first").css("color", "red");
    $("p:last").css("color", "red");

    $("p:even").css("background", "#eee");
    $("p:odd").css("background", "#ccc");


    $("p:eq(4)").text("jQuery Essential");
    $("p:gt(4)").text("Seletores GT");
    $("p:lt(4)").text("Seletores LT");

    $(".list :header").css({
       "font-size": "1.4em",
       "color": "#888"
    });

    $(".list :header span").css("color", "blue");

    function animar_el(elemento){
        $(elemento).fadeToggle(400, function (){
           animar_el(elemento);
        });
    }

    var num = 1;
    setInterval(function (){
        $(":animated").text(num);
        num ++;
    }, 800);

    animar_el(".list span");

    $(":focus").css("background", "green");

    console.log($("p :root"));

});