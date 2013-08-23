$(document).ready(function(){
	// $.ajax({
		// url: 'img/json-images-test.json',
		// type: 'GET',
		// dataType: 'json',
		// success: function(imageData) {
			// var pictures = '<img class="img-thumbnail" src="'+imageData.image+'"/>'
			//$('#home-recent-photo').on('click', function(){
				// for(i in imageData) {
					// $('#home-images').append( $('<li class="img-responsive" alt="Responsive image"/>').html(pictures) );
				// console.log(imageData);
				// }
			// });
		// }
	// Instafeed HOME 	
	var feed = new Instafeed({
		get: 'tagged', 
		//get: 'location',
		tagName: 'sf',
		//locationId: '',
		clientId: 'beeb49f5277942b69f38e72bcbc4c10d'
	});
		feed.run();
		console.log(feed)
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
		tagName: 'mom',
		//locationId: '',
		clientId: 'beeb49f5277942b69f38e72bcbc4c10d'
	});
		feed.run();
		console.log(feed)
	});
	
	//<img src="https://graph.facebook.com/mike.shaver/picture">
	
}); 
function login() {
	console.log('Welcome!  Fetching your information.... ');
	getMe();
	};
	
function getMe() {
	FB.api('/me', function(response) {
		console.log('Good to see you, ' + response.name + '.');
		console.log(response);
		// GETTING PICTURE AND NAME ON BODY
		name = response.name;
		imgSrc = 'https://graph.facebook.com/' + response.username + '/picture?type=large';
		$('body').append( $('<h1/>').html(name) );
		$('body').append( $('<img/>').attr('src',imgSrc) );
	});	
	FB.api('/me/permissions', function(response) {
		console.log(response);
	});	
}	
