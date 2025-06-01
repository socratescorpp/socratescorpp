let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".grid .item").forEach(item => {
        item.classList.add("mostrar");
    });
});

/*PREUBA*/
