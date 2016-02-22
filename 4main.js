$(document).ready(function(){


	/* declare variable called cityType */
	var cityType;

	/* click handler for enter butter */
	$("#submit-btn").click(function(event){
		// stop page refreshing
		event.preventDefault();
		//$('h1').css('background-color','red');
		
		// get typed in value from text box and put in variable
		cityType = $("#city-type").val();
		/*If the user types in "SYD" or "SYDEY" make the background of the page the sydnes image*/
		if(cityType == 'SYD' || cityType == 'Sydney'){
			$('body').css('background-image','url(images/sydney.jpg)');
		}
		/*If the user types in "NYC" or "New York" or "New York City" make the background of the page the 			nyc image*/
		if(cityType == 'NYC' || cityType == 'New York' || cityType == 'New York City'){
			$('body').css('background-image','url(images/nyc.jpg)');
		}
		/*If The user types in "San Francisco" or "SF" or "Bay Area" make the background image sf picture*/
		if(cityType == 'SF' || cityType == 'Bay Area' || cityType == 'San Fransisco'){
			$('body').css('background-image','url(images/sf.jpg)');
		}
		/*If the user types in "Los Angeles" or "LA" or "LAX" make the background of the page the la image*/
		if(cityType == 'LA' || cityType == 'LAX' || cityType == 'Los Angeles'){
			$('body').css('background-image','url(images/la.jpg)');
		}
		/*If the user types in "Austin" or "ATX" make the background of the page the austin image*/
		if(cityType == 'ATX' || cityType == 'Austin'){
			$('body').css('background-image','url(images/austin.jpg)');
		}
	});
		
	
});