let boton=document.querySelector("button");
let api=document.querySelector("input");
let contenedor=document.getElementById("contenedor");


async function traeMapa(key,capa){
    var cabecera= new Headers({
        "cache-control":"no-cache"
    });
    
    var conf={
        method:"GET",
        mode:"cors",
        headers:cabecera
    }
    
    try{
        const respuesta=await fetch("https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key="+key,conf);
        
        const datos=await respuesta.json();
        const URLmapa=await fetch(datos.datos,conf);
        const mapa=await URLmapa.blob();
        
        const imagen=document.createElement("img");
        imagen.setAttribute("src",URL.createObjectURL(mapa));
        
        capa.appendChild(imagen);
                
        console.log(mapa);
    }
    catch(error){
        console.log(error);
    }
    
    
}
 
boton.addEventListener("click",function(e){
    e.preventDefault();
    traeMapa(api.value,contenedor)
})