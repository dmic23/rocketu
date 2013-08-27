window.fbAsyncInit = function() {
  FB.init({
    appId      : 'YOUR APP ID', // App ID
    channelUrl : '//bootcamp.rocketu.com/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  FB.Event.subscribe('auth.authResponseChange', function(response) {
	console.log(response);
	if (response.status === 'connected') {
		if (localStorage.getItem('fbUser')) {
		
		} else {
			FB.api('/me', function(response) {
				console.log('Good to see you, ' + response.name + '.');
				// SAVE INFORMATION
			});
		}
	
	
      
    } else if (response.status === 'not_authorized') {
      FB.login();
    } else {
      FB.login();
    }
  });
};

(function(d){
	var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement('script'); js.id = id; js.async = true;
	js.src = "//connect.facebook.net/en_US/all.js";
	ref.parentNode.insertBefore(js, ref);
}(document));

function testAPI() {
	console.log('Welcome!  Fetching your information.... ');
	FB.api('/me', function(response) {
	  console.log('Good to see you, ' + response.name + '.');
	});
};