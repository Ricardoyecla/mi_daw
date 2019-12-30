$(document).ready(function(){   
    
    const $video3=$("#video3");

    
    $("#play3").click(()=>$("#video3")[0].play());
    $("#pause3").click(()=>$video3[0].pause());
    $("#stop3").click(()=>$video3[0].load());
    
    
    
    $("#video3")[0].volume=$("#volumen3").val();
    $("#volumen3").change((e)=> $("#video3")[0].volume=e.target.value);
    
    // No se como capturar el evento de la otra forma.
    $("#video3").on("timeupdate",function(){
        $("#tiempo3").attr("max",$("#video3")[0].duration);
        $("#tiempo3").val($("#video3")[0].currentTime);
    });
    
    $("#titulo3").text($("#video3")[0].currentSrc.replace(/^.*\//,""));
        
    
    
    $("#video3").on("loadedmetadata",function(){
        var track = $('#video3')[0].addTextTrack('subtitles', 'En Ingless', 'en');
        
        track.mode = 'hidden'; 
        track.addCue(new VTTCue(0.5, 15, "My first Cue"));
        track.addCue(new VTTCue(0.15, 35, "My first Cue"));
        
    });
    
    $("#ss3").click(function(){
        $("#video3")[0].textTracks[0].mode="hidden";
    });
    
    $("#si3").click(function(){
        $("#video3")[0].textTracks[0].mode="showing";
    });
    
    var sonido = new Audio();
        sonido.src = "audio/frase.mp3";
        sonido.loop = false;
        
        
        sonido.volume=$("#volumen").val();
        //var bplay = document.getElementById("play");
        //bplay.addEventListener("click",function(){ sonido.play()});
        
        $("#play").click(function(){sonido.play()});
        $("#pause").click(function(){sonido.pause()});
        $("#stop").click(function(){sonido.load()});
        
        $("#volumen").change(function(evento){
            sonido.volume=evento.target.value;
        }); 
      
        
        
        $("#tiempo").attr("max",sonido.duration);
        
        sonido.ontimeupdate=function(){
            $("#tiempo").attr("max",sonido.duration);
            $("#tiempo").val(sonido.currentTime);
        }
        $("#titulo").innerHTML=sonido.currentSrc;
    });