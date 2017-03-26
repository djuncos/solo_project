// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree 


	function mid(x,y){

	  	return y

	}


	function walkingTimeFromAToB(a,b){

		// want a function that calculates walking time from a (space) to b (destination)


	}


	function drivingTimeFromAToB(a,b){

		// want a function that calculates driving time from a (user location) to b (space)


	}

// 39.943927, -75.164193

	var map;


	var locations = [
        {lat: 39.935331, lng: -75.177877},
        {lat: 39.935825, lng: -75.17495},
        {lat: 39.935002, lng: -75.171375},
        {lat: 39.930506, lng: -75.175050},
        {lat: 39.928509, lng: -75.174621},
        {lat: 39.936828, lng: -75.180348},
        {lat: 39.943167, lng: -75.175266},
    ]

    function initMap() {
        var dest_location = {lat: dest_lat, lng: dest_long};
        var user_location = {lat: user_lat, lng: user_long};
        var midpoint = mid(user_location,dest_location)

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: midpoint
        });

        var destination_marker = new google.maps.Marker({
          position: dest_location,    
          map: map
        });

        var user_marker = new google.maps.Marker({
          position: user_location,
          icon: '/assets/car02.png',    
          map: map
        });


        // create brand icon here:

        // var goldStar = {	
        //   path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
        //   fillColor: 'yellow',
        //   fillOpacity: 0.8,
        //   strokeColor: 'gold',
        //   strokeWeight: 14
        // };

        // var mapIconYellow = {	
        //   path: 'http://maps.google.com/mapfiles/ms/icons/yellow.png',
      	 //  labelClass: "iconLabels"
        // };



        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: (i+1).toString(),
            // label: labels[i % labels.length],
      		// icon: {
		    //   path: google.maps.SymbolPath.CIRCLE,
		    //   scale: 1,
		    //   fillColor: 'yellow'
		    // },
            // icon: mapIconYellow,
            // icon: 'http://www.iconsdb.com/icons/preview/black/car-xxl.png',
            icon: 'http://maps.google.com/mapfiles/ms/icons/yellow.png',
            // icon: '/assets/car02.png',
            // labelClass: "iconLabels",
            map: map
          });
        });
   
    }



    //user location: 39.934171, -75.185232
