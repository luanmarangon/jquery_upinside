//Load ->carrega todos os elementos HTML antes de executar o script
//Ready ->carrega o DOM (document model) primeiro

//Iniciando o JQuery de forma padrão
// $(document).ready(function () {
//     $(".jquery_essentials").html("JQuery Iniciado!");
// });

//Carregando antes de outra LIB
// jQuery(function ($) {
//     $(".antes").html("JQuery Iniciado antes de Outra Lib!");
// })

//Carregando depois de outra LIB
// var $j = jQuery.noConflict();
// $j(document).ready(function (){
//     $j(".depois").html("JQuery Iniciado depois de Outra Lib!");
// });

//Iniciando com gatilho -> Simplificada - ###MAIS UTILIZADA###
$(function () {
    $(".gatilho").html("JQuery Iniciado com Gatilho!");

    // alert("jQuery Essentials");


    console.group("Mensagens Gerais");
    console.log("jQuery");
    console.info("jQuery carregado com sucesso");
    console.warn("Um Alerta");
    console.error("Um Erro");
    console.groupEnd();

    var cadastro = false;

    console.group("Cadastro de Users");
    console.info("Cadastro Iniciado");

    if (cadastro === true){
        console.log("Cadastro Realizado")
    }else{
        console.warn("Cadastro não realizado");
    }

    console.groupEnd();
})

