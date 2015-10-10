var userLatitude, userLongitude;
//var partyLatitude = 37.867475, partyLongitude = -122.274702;
//var partyLatitude, partyLongitude;
var geo = new google.maps.Geocoder;
var uberClientId = "nPN1DkEGRwvdl2S9FbhEOy8l5Um-8Js5"
  , uberServerToken = "SRsW_GXhu5CVmoO4eM1VLLRk6p6zkgFl-7XlrY2f" ;


function getGeocode(text) {
	geo.geocode({'address':text},function(results, status){
	    if (status == google.maps.GeocoderStatus.OK) {              
	        var myLatLng = results[0].geometry.location;

	        // Add some code to work with myLatLng    
	        console.log("hey");   
	        console.log("dest lat: ",myLatLng.lat());
	        console.log("dest long: ", myLatLng.lng());  
	        var endlat = myLatLng.lat();
	        var endlng = myLatLng.lng();
	        dosecond(endlat,endlng)

	    } else {
	        alert("Geocode was not successful for the following reason: " + status);
	    }
	});
}


function dosecond(var1,var2){

navigator.geolocation.getCurrentPosition(function(position) {

	//dofirst();
/*	console.log("printing arguments");
	console.log(var1);
	console.log(var2);
	console.log("hello");*/
	//console.log(position);
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
    console.log("your latitude is" + userLatitude);
    console.log("your longitude is" + userLongitude);



    getEstimatesForUserLocation(userLatitude, userLongitude, var1, var2);


});

}


function getEstimatesForUserLocation(latitude,longitude, endlat, endlng) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "Token "  + uberServerToken
    },
    data: {
      start_latitude: latitude,
      start_longitude: longitude,
      end_latitude: endlat,
      end_longitude: endlng
    },
    success: function(result) {
      console.log(result);
    }
  });
}

function getHighlight() {

  //console.log("test this button")
    //carlo changes
  var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log(text)
    getGeocode(text)
}

