var fbUser;
if (localStorage.getItem('fbUser')) {
	fbUser = JSON.parse(localStorage.getItem('fbUser'));
}

var photo;
if (localStorage.getItem('photo')) {
	photo = localStorage.getItem('photo');
}


////////
// function drawOnCanvas(file) {
		// var reader = new FileReader();

		// reader.onload = function (e) {
		// var dataURL = e.target.result,
			// c = document.querySelector('canvas'), 
			// ctx = c.getContext('2d'),
			// img = new Image();

		// img.onload = function() {
			// c.width = img.width;
			// c.height = img.height;
			// ctx.drawImage(img, 0, 0);
		// };

			// img.src = dataURL;
		// };

		// reader.readAsDataURL(file);
	// }	