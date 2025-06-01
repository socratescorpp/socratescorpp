document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".add-to-cart-btn");

    const preciosPlatos = [520, 550, 580, 600, 650, 700, 750, 800, 850, 900];

    botones.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            const item = boton.closest(".item");

            if (!item) {
                alert("Error: No se encontró el plato.");
                return;
            }

            const nombre = item.querySelector("h3")?.textContent || "Sin nombre";
            const descripcion = item.querySelector("p")?.textContent || "Sin descripción";
            const imagen = item.querySelector("img")?.getAttribute("src") || "";
            const precio = preciosPlatos[index % preciosPlatos.length]; 

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            const existe = carrito.some(plato => plato.nombre === nombre);
            if (existe) {
                alert("Este plato ya está en el carrito.");
                return;
            }

            carrito.push({ nombre, descripcion, imagen, precio });
            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`Plato agregado al carrito por $${precio}.`);
        });
    });
});
