const itemInput = document.getElementById('item');  
const agregarButton = document.getElementById('agregar');  
const contenedor = document.getElementById('contenedor'); 
const limpiarButton = document.getElementById('limpiar'); 


function obtenerItemsDeLocalStorage() {
  const items = localStorage.getItem('items');  
  return items ? JSON.parse(items) : [];  
}

//  guardar en localStorage
function guardarItemsEnLocalStorage(items) {
  localStorage.setItem('items', JSON.stringify(items));  // Convierte el array en una cadena JSON y lo guarda en localStorage
}

// actualiza dom y arma lista
function seaArmaLista() {
  contenedor.innerHTML = '';  
  const items = obtenerItemsDeLocalStorage();  

  
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';  
    li.textContent = item;  

    contenedor.appendChild(li);  
  });
}

// Función para agregar un nuevo ítem
function agregarItem() {
  const nuevoItem = itemInput.value.trim();  

  if (nuevoItem) {  
    const items = obtenerItemsDeLocalStorage();  
    items.push(nuevoItem);  
    guardarItemsEnLocalStorage(items);  
    seaArmaLista();  
    itemInput.value = ''; 
  }
}

// Función para limpiar la lista
function limpiarLista() {
  localStorage.removeItem('items');  
  seaArmaLista(); 
}

// agrega eventos boton
agregarButton.addEventListener('click', agregarItem);  
limpiarButton.addEventListener('click', limpiarLista);  


document.addEventListener('DOMContentLoaded', seaArmaLista);
