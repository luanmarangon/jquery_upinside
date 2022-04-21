$(function (){
   //pega somente o texto
   var text = $(".j").text();

   //pega o codigo HTML dentro do texto
   var html = $(".j").html();


   //traz somente o texto
   // $(".e").text(jquery);

   //interpreta o HTML
   // $(".e").html(jquery);



   $(".e").append("<p>"+ text +"</p>");
   $(".e").append("<p>"+ html +"</p>");

   $(".a").appendTo($(".e"));
   $("<p><b>#BoraProgramar!</b></p>").appendTo($(".e"));

   $(".e").prepend("<h2>Resultados:</h2>");
   $("<p>Exemplos:</p>").prependTo($(".e p:first"));



});