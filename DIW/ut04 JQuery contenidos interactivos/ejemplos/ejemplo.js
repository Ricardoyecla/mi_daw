
$(document).ready(function(){
    //Añadir clases y eleminar clases
    $("h1").addClass("bg-primary");
    $("p:first").removeClass("display-1").addClass("bg-info");
    $("p:last").removeClass("display-1").addClass("bg-warning");
    
    //Añadir elemento en linea al principio y al final de un contenedor
    
    $(".container").append("<p>Hola soy nuevo</p>")
    var contendor =$(".container");
    
    contendor.prepend("<p>Un pe al principio</p>");
    
    
    //cambiar atributos css
    
    $(".colorea").css("color","red");
   $(".colorea").css("color","red").css("text-align","center"); $(".colorea").css({backgroundColor:"yellow",fontSize:"3em"});
    
    //eleminar un elemento.
    
    $(".colorea p:last").remove();
    
    //Ocultar un elemento.
    $(".colorea p:first").hide();
    
    //Trabajar con los atributos
    
    $("img").attr("src","https://cloud10.todocoleccion.online/barbie-ken-accesorios/tc/2016/09/04/13/59689751.webp").attr("width","50");
    // Gestión de eventos
    
    var parrafo=$("#parrafo");
    
    $("#au").click(function(){
        parrafo.addClass("display-4");    
    })
    $("#di").click(function(){
        parrafo.removeClass("display-4");    
    })
    $("#in").click(function(){
        parrafo.toggleClass("display-4");    
    })
    
    var inText=$("input");
    $("input").keyup(function(){
        $("#contenido").html(inText.val());
    })
    
    $("#btA").click(function(e){
        e.preventDefault();
        $("#lista").append('<li>'+$("#nombre").val() +'</li>')
    })
    
    var parrafo1=$("#parrafo1");
    
    $("#au1").click(function(){
        $("#parrafo1").hide(1000)   
    });
    $("#di1").click(function(){
        parrafo1.show(2000);    
    });
    $("#in1").click(function(){
        parrafo1.toggle(2000);    
    });
    
})