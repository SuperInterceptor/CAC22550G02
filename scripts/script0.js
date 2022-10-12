// Script Inicial ( vacio por ahora )

function seleccion(){
    if(document.getElementById('todos').checked){
        console.log('Apreto Todos');
    }
    if(document.getElementById('drama').checked){
        console.log('Apreto Drama');
    }
    if(document.getElementById('suspenso').checked){
        console.log('Apreto suspenso');
    }
    if(document.getElementById('comedia').checked){
        console.log('Apreto comedia');
    }
    if(document.getElementById('infantil').checked){
        console.log('Apreto infantil');
    }
}


/*
document.querySelectorAll(".menuSolapas").forEach(el => {
    el.addEventListener("menuSolapas", e => {
      const codigo = e.target.getAttribute("href");
      console.log("Se ha clickeado el id "+codigo);
    });
  });
*/
  

function solapas(){
    if(document.getElementsByName('menuTab').values){
        var codigo = document.getElementsByClassName("menuSolapas")[0].id;
        console.log(codigo);
    }
}



