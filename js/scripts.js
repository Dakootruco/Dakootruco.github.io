document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.opacity = '0.7'; // Reducir la opacidad al pasar el mouse
        });

        link.addEventListener('mouseout', function() {
            this.style.opacity = '1'; // Restaurar la opacidad al quitar el mouse
        });
    });
});
