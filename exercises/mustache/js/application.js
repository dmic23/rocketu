$(document).ready(function(){
	$.ajax({
		url: 'http://bootcamp-rocketu.rhcloud.com/exercises/ajax/data/movies-box-office.json',
		type: 'GET',
		dataType: 'json',
		data: '',
		success: function(movieData){
			/*for (i in movieData.movies){
				var myMovies = '<li>';
					myMovies += movieData.movies[i].title;
					myMovies += '<img src="'+movieData.movies[i].posters.thumbnail+'"/>';
					myMovies += movieData.movies[i].ratings.critics_rating;
					myMovies += '</li>';
				//var title = movieData.movies[i].title;
				//var pic = movieData.movies[i].posters.thumbnail;
				//var  movieOldTemplate = '<li>{{title}}<img src="{{posters.thumbnail}}"/>{{ratings.critics_rating}}</li>';
				var movieTemplate = $('#movie-template').html();
				var output = Mustache.render(movieTemplate, movieData[i]);
				$('#movies').append(output);
				//$('#movies').append($('<li/>').html(title+' <img src="'+pic+'"/>'));
			}*/
			$('#moviesList').html(Mustache.render($('#all-movies-template').html(), movieData));
			console.log(movieData);
		}
		// error: function(err){
		// console.log(err);
		// }
	});
})
