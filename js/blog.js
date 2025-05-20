document.getElementById("btnLeerMas").addEventListener("click", function(){
    window.location.href = "blog.html";
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("volver").addEventListener("click", function () {
        window.location.href = "index.html";
    });

    let tipsSection = document.querySelector(".tips");

    function mostrarTips() {
        let scrollPos = window.scrollY + window.innerHeight;
        let tipsTop = tipsSection.offsetTop;

        if (scrollPos > tipsTop) {
            tipsSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", mostrarTips);
    mostrarTips(); 
});
