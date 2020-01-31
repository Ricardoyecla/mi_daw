function pintarUsuario(capa,usuario){
    
    capa.innerHTML='<img src=+ usuario.picture.large}+>'+
            '<figcaption>${usuario.name.first}</figcaption>'+
            '<figcaption>******</figcaption>'+
            '<figcaption>******</figcaption>'+
            '<figcaption>******</figcaption>'+
            '<button>Cambiar</button>'    
}




function anadirEventoBoton(caja){
    //var boton=caja.querySelector("button"); 
    
}


fetch("https://randomuser.me/api/?results=10")
    .then(function(res){
        console.log(res.json());
        return res.json()})
    .then(function(listaUsuarios){
        alert("lsdjfañljf");
        for( var usario of listaUsuarios){
            alert(usario.name.first);
            /*let caja=document.createElement("figure");
            pintarUsuario(caja,usario);
            //anadirEventoBoton(caja)
            var contenedor=document.querySelector("div");
            contenedor=document.appendChild(caja);*/
        }
    })
    .catch(function(error){console.log(error)});

