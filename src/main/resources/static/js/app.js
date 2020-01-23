/**
 * 
 */

$(document).ready(function() {
	obtenerClientes();
});

function obtenerClientes() {
	$.ajax({
		type: 'GET',
		url: '/api/clientes/findAll',
		dataType: 'json',
		success: function(response) {
			console.log(response);
			var tabla = '';
			for (var i = 0; i < response.length; i++) {
				tabla += '<tr>';
				tabla += '<td>'+response[i].id+'</td><td>'+response[i].nombre+'</td><td>'+response[i].apellido+'</td><td>'+response[i].email+'</td><td>'+response[i].createAt+'</td>';
				tabla += '</tr>';
			}
			$('#contenidoTabla').append(tabla);
		}
	});
}