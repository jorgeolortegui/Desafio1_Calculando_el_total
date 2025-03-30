let precio = 400000;
let cantidad = 0;

// Seleccionamos los elementos
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const btnIncrementar = document.querySelector(".card button:first-of-type");
const btnDecrementar = document.querySelector(".card button:last-of-type");

// Inicializamos valores en la interfaz
precioSpan.innerHTML = precio;
valorTotalSpan.innerHTML = 0;

// Función para actualizar la cantidad y el total
function actualizarValores() {
    cantidadSpan.innerHTML = cantidad;
    valorTotalSpan.innerHTML = cantidad * precio;
}

// Eventos para los botones
btnIncrementar.onclick = function() {
    cantidad++;
    actualizarValores();
};

btnDecrementar.onclick = function() {
    if (cantidad > 0) {
        cantidad--;
        actualizarValores();
    }
};
