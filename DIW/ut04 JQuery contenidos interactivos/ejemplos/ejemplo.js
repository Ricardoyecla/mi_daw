
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
    
    // Ampliamos el tamaño del contenido del div
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
    
    //Añadimos lo que se teclea en el input al h1
    var inText=$("input");
    $("input").keyup(function(){
        $("#contenido").html(inText.val());
    })
    
    // Añadimos lo que se teclea a una lista
    $("#btA").click(function(e){
        e.preventDefault();
        $("#lista").append('<li>'+$("#nombre").val() +'</li>')
    })
    
    // Ocultamos o mostramos un div
    var parrafo1=$("#parrafo1");
    
    $("#au1").click(function(){
        $("#parrafo1").hide(1000)   
    });
    $("#di1").click(function(){
        parrafo1.show("slow");  
    });
    $("#in1").click(function(){
        parrafo1.toggle(2000);    
    });
    
    //Hacemos aparecer y desaparecer los div con animación
    $("#bAnimar").click(function(){
        $(".mis_cuadrados div:first").fadeOut(2000);
        $(".mis_cuadrados div:nth-child(2)").fadeOut(2500);
        $(".mis_cuadrados div:last").fadeOut(3000);
        
        $(".mis_cuadrados div:first").fadeIn(2000);
        $(".mis_cuadrados div:nth-child(2)").fadeIn(3000);
        $(".mis_cuadrados div:last").slideDown(4000);
        
    });
    
    // Animamos un botón para que desplace
    $("#bMove").click(function(){
        $(".cuadrado2").animate({left:"200px",opacity: '0.5',
    height: '150px',
    width: '150px',
    fontSize: '3em'},2000,function(){
        $(".cuadrado2").animate({left:"-200px",opacity: '1',
    height: '50px',
    width: '50px',
    fontSize: '1em'},2000);    
        });
    });
});