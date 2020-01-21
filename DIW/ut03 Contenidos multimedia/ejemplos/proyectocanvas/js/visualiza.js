var contenedor=document.getElementById("contenedor");
var lienzO=document.getElementById("lienzo");
var botoN=document.getElementById("boton")
botoN.addEventListener("click",pantallAcompletA);
 

function pantallAcompletA() {
    contenedor.style.width="100%";
    contenedor.style.height="100vh";
    contenedor.style.margin="0"   
    
    
    lienzO.style.cssText='width:100%;height:100vh;';
    lienzO.style.backgroundSize="cover";
    lienzO.style.backgroundRepeat="no-repeat"
    
    botoN.value="Reducir canvas";
    botoN.style.cssText="position:fixed;top:10px;left:10px;";
    botoN.style.zIndex=1;
    
    botoN.removeEventListener("click",pantallAcompletA);
    botoN.addEventListener("click",pantallAreducidA);
}

function pantallAreducidA(){
    contenedor.style.width="1000px";
    contenedor.style.height="500px";
    contenedor.style.margin="5vh auto";
    
    lienzO.style.cssText='width:1000px;height:500px;';
    
    botoN.value="Ampliar canvas";
    botoN.style.cssText="position:relative;top:0;left:0;";
    botoN.style.zIndex=0;
    
    
    
    botoN.addEventListener("click",pantallAcompletA);
    botoN.removeEventListener("click",pantallAreducidA);
}

