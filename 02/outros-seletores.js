$(function () {
    $("button").css({
       "font-weight": "bold",
        "font-size": "1.2em",
        "border-radius": "8px"
    });
    $("button[type='submit']").css({
        "background": "green",
        "color": "#fff"
    });
    $("button[type='reset']").css({
        "background": "red",
        "color": "#000"
    });
    $("input:disabled").css({
        "background": "yellow",
        "color": "#000"
    });
});