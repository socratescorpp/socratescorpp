document.addEventListener("DOMContentLoaded", function () {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenedorCarrito = document.getElementById("listaCarrito");
    let btnGenerarTicket = document.getElementById("generarTicket");
    let btnAceptarTicket = document.getElementById("aceptarTicket");

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
        btnGenerarTicket.style.display = "none"; 
        return;
    }

    function actualizarTotal() {
        let totalCompra = 0;
        let detalleTicket = document.getElementById("detalleTicket");
        detalleTicket.innerHTML = ""; 

        document.querySelectorAll(".cantidad").forEach(input => {
            let nombre = input.dataset.nombre;
            let cantidad = parseInt(input.value);
            let plato = carrito.find(p => p.nombre === nombre);
            let subtotal = cantidad * plato.precio;
            totalCompra += subtotal;

            detalleTicket.innerHTML += `<p>${cantidad} x ${plato.nombre} - $${subtotal}</p>`;
        });

        document.getElementById("totalCompra").textContent = `$${totalCompra}`;
        return totalCompra;
    }

    carrito.forEach(plato => {
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <img src="${plato.imagen}" alt="${plato.nombre}">
            <h3>${plato.nombre}</h3>
            <p>${plato.descripcion}</p>
            <p><strong>Precio:</strong> $${plato.precio}</p>
            <label>Cantidad: <input type="number" class="cantidad" data-nombre="${plato.nombre}" value="1" min="1"></label>
            <button class="remove-btn">Eliminar</button>
        `;

        contenedorCarrito.appendChild(div);

        div.querySelector(".remove-btn").addEventListener("click", function () {
            carrito = carrito.filter(p => p.nombre !== plato.nombre);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            window.location.reload();
        });
    });

    document.querySelectorAll(".cantidad").forEach(input => {
        input.addEventListener("change", actualizarTotal);
    });

    function mostrarBotonTicket() {
        btnGenerarTicket.style.display = "block"; 
    }

    function pagar(metodoPago) {
        let totalCompra = actualizarTotal();
        if (totalCompra === 0) {
            alert("No tienes productos en el carrito.");
            return;
        }
        
        alert(`Pago con ${metodoPago} realizado. Total: $${totalCompra}. ¡Gracias por tu compra!`);

        let aceptarPago = confirm("¿Confirmas el pago?");
        if (aceptarPago) {
            mostrarBotonTicket();
        }
    }

    document.getElementById("pagoEfectivo").addEventListener("click", function () {
        pagar("efectivo");
    });

    document.getElementById("pagoTarjeta").addEventListener("click", function () {
        let tarjeta = prompt("Introduce tu número de tarjeta (Ejemplo: 1234-5678-9012-3456)");
        
        if (tarjeta && tarjeta.match(/^\d{4}-\d{4}-\d{4}-\d{4}$/)) {
            pagar("tarjeta");
        } else {
            alert("Número de tarjeta inválido. Inténtalo de nuevo.");
        }
    });

    btnGenerarTicket.addEventListener("click", function () {
        document.getElementById("ticketCompra").style.display = "block"; 
    });
    btnAceptarTicket.addEventListener("click", function () {
        localStorage.removeItem("carrito"); 
        window.location.reload();
    });
});
