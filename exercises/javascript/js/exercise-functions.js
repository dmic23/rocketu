function sayHello() {
	alert(getGreeting());
}

function getGreeting() {
	var d = new Date();	
	d.getHours();
	var h = d.getHours();
	var greeting;
	if (h < 12) {
		greeting = "Good Morning";
	} else {
		greeting = "Good Evening";
	}
	return greeting;
}

function sayPersonalHello() {
	var name = getUserName();
	var message = getGreeting() + ", " + name + ", How are you?\nWould you like this greeting added to the page?"
	var post;
	var confirm = window.confirm(message)

	if (!name) {
		alert('Sorry, I don\'t talk to strangers...');
	} else {
		confirm;
			if (confirm == true) {
				post = confirm;
		}
		document.getElementById("greeting").innerHTML=post;
	}
}

function getUserName () {
	var getName = window.prompt('Hi, what is your name?', "" );
		document.getElementById("userName")
  	 return getName
}
