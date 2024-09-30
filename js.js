document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de radio y agregar un evento change
    const radios = document.querySelectorAll('.btn-check');
    
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Ocultar todos los h3
            document.querySelectorAll('.response-text').forEach(h3 => {
                h3.style.display = 'none';
            });
            // Mostrar el h3 asociado al radio seleccionado
            const associatedH3 = radio.nextElementSibling.nextElementSibling;
            if (associatedH3 && associatedH3.classList.contains('response-text')) {
                associatedH3.style.display = 'block';
            }
        });
    });
});