document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("registroForm");
    const mensajeExito = document.getElementById("mensajeExito");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault(); 

        mensajeExito.style.display = "none";
        mensajeError.style.display = "none";

        const formData = new FormData(formulario);

        try {
            const response = await fetch(formulario.action, {
                method: "POST",
                headers: { 
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                mensajeExito.style.display = "block";
                formulario.reset();
            } else {
                throw new Error("No se pudo enviar la solicitud.");
            }
        } catch (error) {
            mensajeError.textContent = "Error al enviar la solicitud. Intenta de nuevo.";
            mensajeError.style.display = "block";
            console.error(error);
        }
    });
});
