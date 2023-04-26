// Obtener los botones "Agregar al carrito"
var buttons = document.querySelectorAll("button");

// Recorrer los botones y agregarles un evento click
buttons.forEach(function(button) {
	button.addEventListener("click", function() {
		// Obtener el nombre del producto
		var productName = this.parentNode.querySelector("h3").textContent;
		// Mostrar un mensaje de confirmación
		alert(productName + " agregado al carrito");
	});
});
