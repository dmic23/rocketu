// function errorHandler(){
	// console.log('eRRor');
// }
// Pass a function as a parameter
//function runFunction(f){
 //f();
//}
//runFunction(errorHandler);
$(document).ready(function(){
});

// if (navigator.geolocation){
	// navigator.geolocation.getCurrentPosition(function(position){
		// var lat = position.coords.latitude;
		// var lng = position.coords.longitude;
		
			// var url = '"http://maps.googleapis.com/maps/api/staticmap?center=';
			// var markParam = '&zoom=12&size=400x400&markers=color:blue%7Clabel:S%7C37.770359,-122.447008&sensor=false"';
			// $('#static-map').append('<img src='+url+lat+','+lng+markParam+'/>');
			// console.log(position);
			// var params = '&zoom=12&size=600x300&key=AIzaSyCvvj_OUxrZtPCzFU-qpqZjK-bOGOW6wKs&sensor=false"'
			// $('img').append('<img src='+url+lat+','+lng+params+'/>');
		// console.log(position);
		// get URL passing in coords
		// var url = staticMap(lat,lng);
		// console.log(url);
		// draw out Map URL
	 // }, errorHandler);
	// function getDynamicMap(position){
		// var mapOptions = {
				// center: new google.maps.LatLng(37.797677,-122.394339),
				// zoom: 8,
				// mapTypeId: google.maps.MapTypeId.ROADMAP
		// };
		// var map = new google.maps.Map(
				// document.getElementById("dynamic-map"),
				// mapOptions
		// );
		// var infowindow = new google.maps.InfoWindow({
				// map: map,
				// position: pos,
				// content: 'I\'m here!'
		// });
		// map.setCenter(pos);
// }, function() {
		  // handleNoGeolocation(true);
	// }),
	// } else {
    //Browser doesn't support Geolocation
		// handleNoGeolocation(false);
	// }
	// }
// }
	
// google.maps.event.addDomListener(window, 'load', getDynamicMap);
// function staticMap(lat,lng){
	// var url = 'http://maps.googleapis.com/maps/api/staticmap?center=';
	// var params = '&zoom=12&size=600x300&key=AIzaSyCvvj_OUxrZtPCzFU-qpqZjK-bOGOW6wKs&sensor=false';
	// var	mapLink = url+lat+','+lng+params; 
	// return mapLink;
// }

var map;

function initialize() {
	var myLatlng = new google.maps.LatLng(37.770359,-122.447008);
	var mapOptions = {
    zoom: 6,
	center: pos,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('dynamic-map'),
      mapOptions);

	  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'I\'m here bitches!!'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
  
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

