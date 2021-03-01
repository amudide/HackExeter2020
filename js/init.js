// Edit the date here

$(document).ready(function() {
						   
	$("#countdown").countdown({
				date: "15 May 2021 8:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
