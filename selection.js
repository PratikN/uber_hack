function() getHighlight{
    	var text = window.getSelection().toString();
    	geo.geocode({'address':text},function(results, status){
	    if (status == google.maps.GeocoderStatus.OK) {              
	        var myLatLng = results[0].geometry.location;

	        // Add some code to work with myLatLng    
	        console.log("hey");   
	        console.log("dest lat: ",myLatLng.lat());
	        console.log("dest long: ", myLatLng.lng());  
	        var endlat = myLatLng.lat();
	        var endlng = myLatLng.lng();
	        //dosecond(endlat,endlng)
	        return endlat
	    } else {
	        alert("Geocode was not successful for the following reason: " + status);
	    }


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSelection")
    sendResponse(data: window.getSelection().toString()
    );
});
