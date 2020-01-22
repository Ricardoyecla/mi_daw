var canvas=document.getElementById("lienzo");
var ctx=canvas.getContext("2d");
//Variable para controlar el canal alfa
var alfa=0.5;

function pintaCielo(){
    var grd=ctx.createLinearGradient(0,0,0,600);
    grd.addColorStop(0,'rgba(0,0,255,'+alfa+')');
    grd.addColorStop(1,"white");
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,1000,500);
    
}

function pintarMar(){
    var grd=ctx.createLinearGradient(0,400,0,500);
    grd.addColorStop(0,'rgba(0,180,255,'+alfa+')');
    grd.addColorStop(1,"white");
    ctx.fillStyle=grd;
    ctx.fillRect(0,400,1000,200);  
}

pintarMar();
pintaCielo();


