$(document).ready(function(){
	$('#getjson').on('click', function(){
		var object = {
			firstname: "Daniel",
			lastname: "Micaletti",
			email: "daniel@gmail.com",
			age: 34,
			cellnumber: '949-903-6757',
			bands: ['The Beatles', 'Rolling Stones', 'The Who']
		};	
		console.log("Hi, I'm "+ object.firstname +". I'm " + object.age + " years old and I like listening to " + object.bands[0]);
	});
	$('#getxml').on('click', function(){
		var object = "<?xml version='1.0'?>";
			object += "<person>";
				object += "<firstname>Daniel</firstname>";
				object += "<lastname>Micaletti</lastname>";
				object += "<email>daniel@gmail.com</email>";
				object += "<age>34</age>";
				object += "<cellnumber>9499036757</cellnumber>";
				object += "<bands><band>The Beatles</band><band>Rolling Stones</band><band>The Who</band></bands>";
			object += "</person>";
			
			var xml = $.parseXML(object);
			var newXml = $(xml);
			
			var firstname = xml.find("firstname").text();
			var age = xml.find("age").text();
			var bands = xml.find("bands").first-child();
			console.log("Hi, I'm "+ firstname +". I'm " + age + " years old and I like listening to " + bands);
	});
	
	/*$('#getmovie').on('click', function(){
		console.log('Getting movie');
		$.ajax({
			url: 'data/movie.json',
			dataType: 'json',
			success: function(data){
				console.log(data);
				for(i=0; i<data.length; i++){
					$('body').append($('<p/>').html(data[i].title));
				}
			}
		});
	});*/
	
	$('#getjsonajax').on('click', function(){
		$.ajax({
			url: 'data/mydata.json',
			dataType: 'json',
			success: function(myData){
			console.log(myData);
			
				$('body').append($('<p/>').html("Hi, I'm "+ myData[0].firstname +". I'm " + myData[3].age + " years old and I like listening to: "));
				$('body').append($('<li/>').html(myData[5].bands).each);
			}
		});
	});
	
	/*$('#newrequest').on('click', function(){
		$.ajax({
			url: 'http://bootcamp-rocketu.rhcloud.com/api?submit=Submit&firstname=Daniel&lastname=Micaletti',
			dataType: 'json',
			success: function(json){
				console.log(json);
				for (var k in json.data) {
					$('body').append('<p>' + k + '=' + json.data[k] + '</p>')
				}
			}
		});
	});*/
	
	$('form').on('submit',function(){
		var firstname = $(this).find('input#firstname').val();
		var lastname = $(this).find('input#lastname').val();		
		console.log(firstname+' '+lastname);
		
		$.ajax({
			url: 'http://bootcamp-rocketu.rhcloud.com/api',
			type: 'POST',
			dataType: 'json',
			data: {
				fname: firstname,
				lname: lastname,
				date: (new Date())
			},
			success: function(json){
				console.log(json);
			},
		});
		return false;
	});
});











