$(document).ready(function(){
	var input = document.querySelector('input[type=file]'); 

	input.onchange = function () {
		var file = input.files[0];

		upload(file);
		drawOnCanvas(file); 

		console.log(file);
	};
});