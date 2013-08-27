function upload(file) {

	console.log(file);
	localStorage.setItem('file',JSON.stringify(file));		
};

function displayAsImage(file) {
	var imgURL = URL.createObjectURL(file),
		img = document.createElement('img'); img.className='img-responsive';
	img.onload = function() {
		URL.revokeObjectURL(imgURL);
	};
	img.src = imgURL;
	console.log(imgURL);
	document.body.appendChild(img);
}	
function drawOnCanvas(file) {
	var reader = new FileReader();

	reader.onload = function (e) {
		var dataURL = e.target.result,
			c = document.querySelector('canvas'), 
			ctx = c.getContext('2d'),
			img = new Image();

		img.onload = function() {
			ctx.drawImage(img, 0, 0, 600, 600);
			localStorage.setItem('photo',c.toDataURL());			
		};
		img.src = dataURL;
	};
	reader.readAsDataURL(file);
}

$(document).ready(function(){

	if (typeof Instafeed !== 'undefined')	{
	// Instafeed HOME 
		var feed = new Instafeed({
			get: 'tagged', 
			//get: 'location',
			tagName: 'new',
			//locationId: '',
			clientId: 'beeb49f5277942b69f38e72bcbc4c10d'
		});
		feed.run();
		console.log(feed);	
	}
	
	$('#home-recent-photo').on('click', function(){
		feed.run();
	});

	$('#home-friends-photo').on('click', function(){
	
		var feed = new Instafeed({
			get: 'tagged', 
			//get: 'location',
			tagName: 'crazy',
			//locationId: '',
			clientId: 'beeb49f5277942b69f38e72bcbc4c10d'
		});
		feed.run();
		console.log(feed)
	});
	
	$('#home-near-photo').on('click', function(){
	
		var feed = new Instafeed({
			get: 'tagged', 
			//get: 'location',
			tagName: 'sf',
			//locationId: '',
			clientId: 'beeb49f5277942b69f38e72bcbc4c10d'
		});
		feed.run();
		console.log(feed)
	});

	//Facebook User Info
	console.log(fbUser);
	name = fbUser.name;
		imgSrc = 'https://graph.facebook.com/' + fbUser.username + '/picture?type=normal';
		$('.fb-user-name').append( $('<h4 class="fb-user-name"/>').html(name) );
		$('.fb-user-pic').append( $('<img class="fb-profile-pic"/>').attr('src',imgSrc) );
	
	// add image to canvas
	if($('#edit-photo-page').length) {
		console.log(photo);

		var dataURL = photo,
			c = document.querySelector('canvas'), 
			ctx = c.getContext('2d'),
			img = new Image();

		img.onload = function() {
			ctx.drawImage(img, 0, 0, 600, 600);
		};
		img.src = dataURL;
	};
	
	$('#pic-preview').append( $('<img/>').attr('src',photo).addClass('img-responsive'));
	
	//fb user info page
function userInfo(){
	$('#info-user').append($('<h4 id="info-user-name" class="">hey '+fbUser.name+'!</h4>'));
	//$('#info-user').append($('<h4 id="info-user-name" class="">hey '+fbUser.name+'!</h4>'));

	}	
	userInfo();
});


	
