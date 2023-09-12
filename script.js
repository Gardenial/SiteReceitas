document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os quadrados
    const quadrados = document.querySelectorAll(".dificuldadeLevel");
    
    // Adiciona a classe para animar após um pequeno atraso
    setTimeout(function() {
        quadrados.forEach(function(quadrado) {
            quadrado.classList.add("animar-quadrados");
        });
    }, 500); 
});
