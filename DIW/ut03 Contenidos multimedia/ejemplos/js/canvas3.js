var canvas=document.getElementById('lienzo');
var ctx=canvas.getContext("2d");
 
var alfa=0.6;
 

function pintaCielo(){
    var grd=ctx.createLinearGradient(0,0,0,500);
    grd.addColorStop(0,"rgba(0,0,255,"+alfa+")");
    grd.addColorStop(1,"rgba(255,255,255,"+alfa+")");
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,1000,500);
}

function pintarMar(){
   var grd=ctx.createLinearGradient(0,400,0,500);
    grd.addColorStop(0,"rgba(0,180,255,"+alfa+")");
    grd.addColorStop(1,"rgba(255,255,255,"+alfa+")");
    ctx.fillStyle=grd;
    ctx.fillRect(0,400,1000,200); 
}

function pintarPico(x,y,h,b,color){
    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.moveTo(x,y);
    ctx.lineTo(x+b/2,y-h);
    ctx.lineTo(x+b,y);
    ctx.fill();
}

function cachotierra(){
    ctx.beginPath();
    ctx.fillStyle="DARKSALMON";
    ctx.arc(0,500,200,Math.PI,0);
    ctx.fill();
    
}
function arbol(){
    ctx.fillStyle='brown';
    ctx.fillRect(60,200,30,200)
    
    ctx.beginPath();
    
    ctx.moveTo(60,240);
    ctx.bezierCurveTo(0,280,0,220,0,240);
    ctx.bezierCurveTo(0,50,20,60,100,100);
    ctx.bezierCurveTo(120,100,120,60,140,140);
    ctx.lineWidth=2;
    ctx.strokeStyle="black";
    
    ctx.stroke();
    
    ctx.fillStyle="green";
    ctx.fill();
}

pintaCielo();
pintarMar();
pintarPico(0,400,300,400,"BlueViolet");
pintarPico(400,400,300,400,"BlueViolet")
pintarPico(200,400,300,400,"Blue");
pintarPico(600,400,700,400,"Blue");
pintarPico(200,400,150,750,"brown");
cachotierra();
arbol();

