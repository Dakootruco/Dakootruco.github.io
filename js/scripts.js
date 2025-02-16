document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de animación interactiva: Rotar botones al hacer clic
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Rotación suave de 360 grados
            this.style.transition = 'transform 0.5s';
            this.style.transform = 'rotate(360deg)';

            // Restablecer la transformación después de completarla
            setTimeout(() => {
                this.style.transform = 'none';
            }, 500);
        });
    });
});
