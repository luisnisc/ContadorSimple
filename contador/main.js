function añadir() {
    const añadir = document.querySelector(".mas");
    let contador = 0;
    añadir.addEventListener("click", function() {
        contador++;
        const contador_final = document.querySelector(".contador_final");
        contador_final.textContent = contador;
    });
}
