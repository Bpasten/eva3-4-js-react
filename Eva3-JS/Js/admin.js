document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const productName = product.querySelector('p strong').innerText;
            const productStock = product.querySelector('p:nth-of-type(2)').innerText.split(': ')[1];
            const productPrice = product.querySelector('p:nth-of-type(3)').innerText.split(': ')[1];

            const newStock = prompt('Ingrese el nuevo stock para ' + productName, productStock);
            const newPrice = prompt('Ingrese el nuevo precio para ' + productName, productPrice);

            if (newStock !== null && newPrice !== null) {
                product.querySelector('p:nth-of-type(2)').innerText = 'Stock: ' + newStock;
                product.querySelector('p:nth-of-type(3)').innerText = 'Precio: ' + newPrice;
            }
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const productName = product.querySelector('p strong').innerText;
            const confirmDelete = confirm('¿Está seguro de que desea eliminar ' + productName + '?');

            if (confirmDelete) {
                product.remove();
            }
        });
    });
});
