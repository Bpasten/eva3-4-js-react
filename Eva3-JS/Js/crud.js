document.addEventListener('DOMContentLoaded', function() {
    const productoForm = document.getElementById('producto-form');
    const nombreInput = document.getElementById('nombre-producto');
    const precioInput = document.getElementById('precio-producto');
    const imagenInput = document.getElementById('imagen-producto');
    const productoIdInput = document.getElementById('producto-id');
    const cardContainer = document.querySelector('.card-container');

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    function renderProductos() {
        cardContainer.innerHTML = '';
        productos.forEach((producto, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="card-content">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <button class="edit-btn" data-index="${index}">Editar</button>
                    <button class="delete-btn" data-index="${index}">Eliminar</button>
                </div>
            `;
            cardContainer.appendChild(card);
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', editarProducto);
        });
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', eliminarProducto);
        });
    }

    function agregarActualizarProducto(e) {
        e.preventDefault();
        const nombre = nombreInput.value;
        const precio = parseFloat(precioInput.value);
        const imagen = imagenInput.value;
        const id = productoIdInput.value;

        if (id) {
            productos[id] = { nombre, precio, imagen };
        } else {
            productos.push({ nombre, precio, imagen });
        }

        localStorage.setItem('productos', JSON.stringify(productos));
        productoForm.reset();
        renderProductos();
    }

    function editarProducto(e) {
        const index = e.target.dataset.index;
        const producto = productos[index];

        nombreInput.value = producto.nombre;
        precioInput.value = producto.precio;
        imagenInput.value = producto.imagen;
        productoIdInput.value = index;
    }

    function eliminarProducto(e) {
        const index = e.target.dataset.index;
        productos.splice(index, 1);
        localStorage.setItem('productos', JSON.stringify(productos));
        renderProductos();
    }

    productoForm.addEventListener('submit', agregarActualizarProducto);
    renderProductos();
});
