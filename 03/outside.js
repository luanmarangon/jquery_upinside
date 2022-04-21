$(function () {

    var title = $("title").text();
    $(".j").before("<h1>" + title + "</h1>");
    $("<p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>").insertBefore($(".j"));

    var old_text = "<p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with <b> desktop publishing software like </b> Aldus PageMaker including versions of Lorem Ipsum.</p>";
    $(".j").after(old_text);
    $(".j").after("<a class='a' href='#'> Continue lendo.... </a>");
    $(".a").insertAfter("p:last");
});