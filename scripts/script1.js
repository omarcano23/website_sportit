function toggleMenu() {
    var navbar = document.getElementById("nav");
    if (navbar.style.display === "block") {
        navbar.style.display = "none"; // Ocultar el panel de navegación en vista móvil
    } else {
        navbar.style.display = "block"; // Mostrar el panel de navegación en vista móvil
    }
}