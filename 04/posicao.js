$(function () {
    $.each($("p"), function (i, el){
       var el = $(el);
       el.html(el.html() + " - " + i);
    });

    $("p").eq(1).css("color", "red");
    $("p").eq(2).css("color", "orange");
    $("p").first().css("color", "silver");
    $("p").last().css("color", "pink");

    $("p").slice(0,4).css({
        background: "#000",
        padding: "10px"
    });

});
