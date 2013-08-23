$(document).ready(function(){
	$.ajax({
		url: 'http://bootcamp-rocketu.rhcloud.com/exercises/moviepicker/assets/data/movies.json',
		dataType: 'json',
		success:  function(data){
			for(i in data.movies){
				var movie = data.movies[i];
				var li = $('<li/>').html(movie.title);
				if (movie.isNew) {
					li = li.addClass('new');
				}
				$('ul.'+movie.category.toLowerCase()).append(li); 
            }
        } 
	});
		function longestMovie(){
				 /*
					Goal: find the longest movie title in the list
					Logic: 
						1. Get the list of movie titles
						2. Loop through the movie titles
							- is current movie title longer than the longest movie title (as of yet)
							- if yes, set the current movie title as the longest movie title
							- if no, next
						3. Return longest movie title
				*/       
			var longestMovieTitle = '';
			$('#movies li').each(function(i,el) {
				var curMovieTitle = $(this).html();
				if (curMovieTitle.length > longestMovieTitle.length) {
					longestMovieTitle = curMovieTitle;
				} else {
					// DO NOTHING
				}
				//console.log($(this).html());
			});
			console.log('Longest Movie Title in the list is: ' + longestMovieTitle + ' (' + longestMovieTitle.length + ')');
		}
			$('#longestmovie').on('click', function(){
				longestMovie();
			});
		
		function shortestMovie(){
			var shortestMovieTitle= '';
			$('#movies li').each(function(i,el){
				var curMovieTitle = $(this).html();
				//if (shortestMovieTitle = ''){
				if (curMovieTitle.length < shortestMovieTitle.length){
					shortestMovieTitle = curMovieTitle;
				}
				console.log('Shortest Movie Title in the list is: ' + shortestMovieTitle + ' (' + shortestMovieTitle.length + ')');
			});
		}
		$('#shortestmovie').on('click', function(){
				shortestMovie();
			});
		
		function starMovies(){
			$('#movies li').each(function(i,el){
				$(this:conatins('Star'));
					console.log(starMovies);
			});
		}
		$('#star').on('click',function(){
			starMovies();
		});
});