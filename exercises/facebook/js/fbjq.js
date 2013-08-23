$(document).ready(function(){
	$('#logout').on('click',function(){
		FB.logout(function(response){
			alert('You loged out!');
		});
	 });
});