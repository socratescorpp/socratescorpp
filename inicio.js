
document.addEventListener("DOMContentLoaded", function () {
    let elementos = document.querySelectorAll(".animada");

    function mostrarElementos() {
        elementos.forEach(el => {
            let posicion = el.getBoundingClientRect().top;
            let alturaPantalla = window.innerHeight;
            
            if (posicion < alturaPantalla - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mostrarElementos);
    mostrarElementos(); 
    document.getElementById("verReseñas").addEventListener("click", function() {
        let reseñasSeccion = document.getElementById("reseñas");
        reseñasSeccion.style.display = "block";
        cargarReseñas(); 
    });
    let estrellas = document.querySelectorAll(".estrella");
    let seleccionEstrellas = 0;

    estrellas.forEach(estrella => {
        estrella.addEventListener("click", function() {
            seleccionEstrellas = this.getAttribute("data-valor");
            estrellas.forEach(e => e.classList.remove("active"));
            for (let i = 0; i < seleccionEstrellas; i++) {
                estrellas[i].classList.add("active");
            }
        });
    });
    document.getElementById("enviarReseña").addEventListener("click", function() {
        let comentario = document.getElementById("comentario").value;
        if (!comentario || seleccionEstrellas === 0) {
            alert("Por favor, selecciona una calificación y escribe una reseña.");
            return;
        }

        let reseñas = JSON.parse(localStorage.getItem("reseñas")) || [];
        reseñas.push({ estrellas: seleccionEstrellas, comentario });
        localStorage.setItem("reseñas", JSON.stringify(reseñas));

        document.getElementById("comentario").value = "";
        estrellas.forEach(e => e.classList.remove("active"));

        cargarReseñas();
    });
    function cargarReseñas() {
        let reseñasGuardadas = document.getElementById("reseñasGuardadas");
        let reseñas = JSON.parse(localStorage.getItem("reseñas")) || [];

        reseñasGuardadas.innerHTML = "";

        if (reseñas.length === 0) {
            reseñasGuardadas.innerHTML = "<p>Comparteneos tu reseña ⭐</p>";
        } else {
            reseñas.forEach((reseña, index) => {
                let nuevaReseña = document.createElement("li");
                nuevaReseña.innerHTML = `<strong>${reseña.estrellas} ⭐</strong> - ${reseña.comentario} <button class="borrarReseña" data-index="${index}">Eliminar</button>`;
                reseñasGuardadas.appendChild(nuevaReseña);
            });
        }

        agregarEventosBorrar();
    }
    function agregarEventosBorrar() {
        document.querySelectorAll(".borrarReseña").forEach(boton => {
            boton.addEventListener("click", function() {
                let index = this.getAttribute("data-index");
                let reseñas = JSON.parse(localStorage.getItem("reseñas")) || [];

                reseñas.splice(index, 1); 
                localStorage.setItem("reseñas", JSON.stringify(reseñas));
                
                cargarReseñas(); 
            });
        });
    }
    document.getElementById("volverIndex").addEventListener("click", function() {
        window.location.href = "index.html";
    });
    cargarReseñas(); 
});
