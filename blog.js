document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".btn-volver");

    boton.addEventListener("click", () => {
        boton.classList.add("clicked");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 300); 
    });
});
