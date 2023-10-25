document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset error messages
        clearErrors();

        // Validations
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const telefono = document.getElementById('telefono').value;
        const carrera = document.getElementById('carrera').value;
        const edad = parseInt(document.getElementById('edad').value);
        const mensaje = document.getElementById('mensaje').value;
    
        if (!/^[A-Za-z\s]+$/.test(nombre)) {
            displayError('nombreError', 'Nombre inválido');
        }
        if (!/^[A-Za-z\s]+$/.test(apellido)) {
            displayError('apellidoError', 'Apellido inválido');
        }
        if (!/^\d{9}$/.test(telefono) || telefono < 222222222 || telefono > 999999999) {
            displayError('telefonoError', 'Teléfono inválido');
        }
        if (!/^[A-Za-z\s]+$/.test(carrera)) {
            displayError('carreraError', 'Carrera inválida');
        }
        if (isNaN(edad) || edad < 17 || edad > 60) {
            displayError('edadError', 'Edad inválida');
        }
        if (!/^[A-Za-z\d\s\.,!?]+$/.test(mensaje)) {
            displayError('mensajeError', 'Mensaje inválido');
        }
    
    });

    function displayError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.text-danger');
        errorElements.forEach(function(element) {
            element.textContent = '';
        });
    }
    });


