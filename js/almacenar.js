document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item');
    const agregarButton = document.getElementById('agregar');
    const limpiarButton = document.getElementById('limpiar');
    const contenedor = document.getElementById('contenedor');

    // Función para actualizar la vista del listado
    function updateItemList() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        contenedor.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.textContent = item;

            // Crear botón de eliminar para cada ítem
            const removeButton = document.createElement('button');
            removeButton.className = 'btn btn-sm btn-outline-danger';
            removeButton.textContent = 'Eliminar';
            removeButton.addEventListener('click', () => {
                removeItem(index);
            });

            li.appendChild(removeButton);
            contenedor.appendChild(li);
        });
    }

    // Función para guardar el listado en el localStorage
    function saveItems(items) {
        localStorage.setItem('items', JSON.stringify(items));
    }

    // Agregar nuevo ítem
    agregarButton.addEventListener('click', () => {
        const newItem = itemInput.value.trim();
        if (newItem) {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            items.push(newItem);
            saveItems(items);
            updateItemList();
            itemInput.value = ''; // Limpiar el campo de entrada
        }
    });

    // Eliminar un ítem
    function removeItem(index) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.splice(index, 1);
        saveItems(items);
        updateItemList();
    }

    // Limpiar todos los ítems
    limpiarButton.addEventListener('click', () => {
        localStorage.removeItem('items');
        updateItemList();
    });

   
});