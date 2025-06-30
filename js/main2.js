const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre");
const precio = params.get("precio");
document.getElementById("nombreProducto").textContent = "Nombre: " + nombre || "No disponible";
document.getElementById("precioProducto").textContent = "Precio: " + precio || "N/A";