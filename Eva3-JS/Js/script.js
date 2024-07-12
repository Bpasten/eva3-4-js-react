// Función para manejar la acción de agregar al carrito
function agregarAlCarrito(event) {
    const button = event.target;
    const card = button.closest('.card');
    const title = card.querySelector('h3').innerText;
    const price = parseFloat(card.querySelector('p').innerText.replace('Precio: $', ''));

    // Guardar el producto en localStorage (podrías usar una estructura más compleja si lo prefieres)
    const product = {
        name: title,
        price: price,
        image: card.querySelector('img').getAttribute('src')
    };

    // Obtener el carrito de localStorage o inicializarlo si es la primera vez
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redireccionar a la página de carrito
    window.location.href = 'carrito.html';
}

// Agregar listeners a los botones de agregar al carrito
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', agregarAlCarrito);
});

// Función para manejar la animación de las tarjetas al hacer scroll
function animateCards(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-visible'); // Añade la clase cuando la tarjeta es visible
        observer.unobserve(entry.target); // Deja de observar la tarjeta una vez que ha sido animada
      }
    });
  }
  
  // Configuración del observador de intersección
  const observer = new IntersectionObserver(animateCards, {
    root: null,
    rootMargin: '0px', // Márgenes de la ventana del navegador
    threshold: 0.3 // Porcentaje de visibilidad de la tarjeta para activar la animación
  });
  
  // Selecciona todas las tarjetas y las observa
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    observer.observe(card);
  });

  // Función para agregar productos desde eva3.html
function agregarAlCarrito(producto, precio) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const productoExistente = carrito.find(item => item.producto === producto);
  if (productoExistente) {
      productoExistente.cantidad += 1;
  } else {
      carrito.push({ producto, precio, cantidad: 1 });
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert('Producto agregado al carrito!');
}


