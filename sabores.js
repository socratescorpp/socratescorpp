document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".item");

    let recetas = {
        ensalada: {
            titulo: "Ensalada Fresca",
            ingredientes: ["🥬 Lechuguita", "🍅 Tomate", "🥒 Pepino", "🧀 Queso fresco", "🍋 Vinagreta de limón"],
            pasos: ["Cortar los ingredientes y verudras.", "Mezclar en un recipiente que tengas.", "Agregar la vinagreta.", "Servir y disfrutar."]
        },
        pastel: {
            titulo: "Pastel Casero",
            ingredientes: ["🍰 Harina", "🥚 Huevos", "🍬 Azúcar", "🧈 Mantequilla", "🥛 Leche"],
            pasos: ["Mezclar los ingredientes.", "Hornear a 180°C.", "Dejar enfriar un rato.", "Decorar y servir."]
        },
        hamburguesa: {
            titulo: "Hamburguesa Gourmet",
            ingredientes: ["🥩 Carne de res", "🍞 Pan de hamburguesa", "🧀 Queso cheddar", "🥬 Lechuga", "🍅 Tomate"],
            pasos: ["Cocinar la carne.", "Montar los ingredientes en el pan.", "Agregar salsas.", "Servir caliente."]
        },
        helado: {
            titulo: "Helado Artesanal",
            ingredientes: ["🥛 Leche", "🍬 Azúcar", "🍓 Frutas naturales", "❄️ Hielo", "🍯 Miel"],
            pasos: ["Mezclar los ingredientes.", "Batir hasta obtener una textura cremosa.", "Congelar por 4 horas.", "Servir frío."]
        },
        pastas: {
            titulo: "Pastas Tradicionales",
            ingredientes: ["🍝 Pasta fresca", "🍅 Salsa de tomate", "🧀 Queso parmesano", "🥩 Carne molida", "🌿 Albahaca"],
            pasos: ["Cocinar la pasta.", "Preparar la salsa.", "Mezclar y servir.", "Agregar queso y albahaca."]
        },
        galletas: {
            titulo: "Galletas Caseras",
            ingredientes: ["🍪 Harina", "🧈 Mantequilla", "🍫 Chocolate", "🥚 Huevos", "🍬 Azúcar"],
            pasos: ["Mezclar los ingredientes.", "Formar las galletas.", "Hornear a 180°C.", "Dejar enfriar y servir."]
        }
    };

    items.forEach(item => {
        item.addEventListener("click", function () {
            let id = this.getAttribute("data-id");
            let recetaDiv = document.getElementById(`receta-${id}`);

            if (recetaDiv.classList.contains("visible")) {
                recetaDiv.classList.remove("visible");
                recetaDiv.innerHTML = "";
            } else {
                recetaDiv.innerHTML = `
                    <h4>${recetas[id].titulo}</h4>
                    <p><strong>Ingredientes:</strong></p>
                    <ul>${recetas[id].ingredientes.map(i => `<li>${i}</li>`).join("")}</ul>
                    <p><strong>Pasos:</strong></p>
                    <ol>${recetas[id].pasos.map(p => `<li>${p}</li>`).join("")}</ol>
                `;
                recetaDiv.classList.add("visible");
            }
        });
    });
    document.getElementById("volver").addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
