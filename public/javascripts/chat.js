$(document).ready(function() {

	var socket = io();

	socket.on('send_message', function(msg) {
		$("#chat_content").append($('<li>').append('span').text('Luan' + msg));
	});

	
	$('form').submit(function() {
		socket.emit('send_message', $("#chat_input").val());
		$("#chat_input").val('');
		return false;
	});
	
	
});