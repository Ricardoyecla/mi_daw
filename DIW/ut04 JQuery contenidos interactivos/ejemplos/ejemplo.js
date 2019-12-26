
$(document).ready(function(){
    //Añadir clases y eleminar clases
    $("h1").addClass("bg-warning");
    $("p:first").removeClass("display-1").addClass("bg-info");
    $("p:last").removeClass("display-1").addClass("bg-warning");
    
    //Añadir elemento en linea al principio y al final de un contenedor
    
    $(".lista").append("<li>Hola soy nuevo</li>")
    var contendor =$(".lista");
    
    contendor.prepend("<li>Un pe al principio</li>");
    
    
    //cambiar atributos css
    
    $("#colorea1").css("color","red");
    $("#colorea2").css("color","red").css("text-align","center"); $("#colorea3").css({backgroundColor:"yellow",fontSize:"2em"});
    
    //eleminar un elemento.
    
    $(".desaparece li:last").remove();
    
    //Ocultar un elemento.
    $(".desaparece li:first").hide();
    
    //Trabajar con los atributos
    
    $("img").attr("src","https://cloud10.todocoleccion.online/barbie-ken-accesorios/tc/2016/09/04/13/59689751.webp").attr("width","50");
    
    
    // Gestión de eventos
    
    // Ampliamos el tamaño del contenido del div
    var parrafo=$("#parrafo");
    
    $("#gordo").click(function(){
        parrafo.addClass("display-4");  
    })
    $("#fino").click(function(){
        parrafo.removeClass("display-4");    
    })
    $("#cambia").click(function(){
        parrafo.toggleClass("display-4");    
    })
    
    //Añadimos lo que se teclea en el input al h1
    var inText=$("input");
    $("input").keyup(function(){
        $("#parrafo").html(inText.val());
    })
    
    // Añadimos lo que se teclea a una lista
    $("#btA").click(function(e){
        e.preventDefault();
        $(".lista").append("<li>"+$("input").val() +"</li>")
    })
    
    // Ocultamos o mostramos un parrafo 
    var parrafo=$("#parrafo");
    
    $("#au1").click(function(){
        $("#parrafo").hide(1000)   
    });
    $("#di1").click(function(){
        parrafo.show("slow");  
    });
    $("#in1").click(function(){
        parrafo.toggle(2000);    
    });
    
    //Hacemos aparecer y desaparecer los div con animación
    $("#An1").click(function(){
      
        $(".mis_cuadrados div:first").fadeOut(2000);
        $(".mis_cuadrados div:nth-child(2)").fadeOut(2500);
        $(".mis_cuadrados div:last").fadeOut(3000);
        
        $(".mis_cuadrados div:first").fadeIn(2000);
        $(".mis_cuadrados div:nth-child(2)").fadeIn(3000);
        $(".mis_cuadrados div:last").slideDown(4000);
        
    });
    
    // Animamos un botón para que desplace
    $("#An2").click(function(){
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