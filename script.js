document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll("section");

    // Función para mostrar la sección correspondiente
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar que el enlace se desplace automáticamente

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.add("hidden");
            });

            // Mostrar la sección correspondiente
            const targetId = item.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.classList.remove("hidden");
        });
    });
});