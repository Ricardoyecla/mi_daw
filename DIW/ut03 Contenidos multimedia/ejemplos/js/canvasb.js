var contenedor=document.getElementById("contenedor");
var boton=document.getElementById("boton");
var lienzo=document.getElementById("lienzo");
 


boton.addEventListener("click",ampliarPantalla);

function ampliarPantalla(){
    contenedor.style.width="100%";
    contenedor.style.height="100vh";
    contenedor.style.margin=0;
    
    lienzo.style.cssText="width:100%;height:100vh";
    /*lienzo.style.backgroundSize="cover";*/
    
    boton.value="Reducir tamaño";
    boton.style.cssText="position:fixed;top:10px;left:10px;"
    boton.style.zIndex=1;
    
    boton.removeEventListener("click",ampliarPantalla);
    boton.addEventListener("click",reducirPantalla)
}

function reducirPantalla(){
    contenedor.style.width="1000px";
    contenedor.style.height="500px";
    contenedor.style.margin="5vh auto";
    
    lienzo.style.cssText="width:1000px;height:500px";
    /*lienzo.style.backgroundSize="cover";*/
    
    boton.value="Ampliar tamaño";
    boton.style.position="relative";
    boton.style.zIndex=0;
    
    boton.addEventListener("click",ampliarPantalla);
    boton.removeEventListener("click",reducirPantalla)
}
