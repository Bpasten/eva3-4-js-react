document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    alert('Usuario registrado con éxito');
    window.location.href = 'eva3.html'; // Redirigir a la página principal
});