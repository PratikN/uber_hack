$(function(){
  $('#paste').click(function(){pasteSelection();});
});
function pasteSelection() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      var text = document.getElementById('text');
      console.log("test helooooooooo");
      //var coord = getGeocode(response.data.toString())

      //text.innerHTML = coord.toString();

      text.innerHTML = response.data;
    });
  });
}

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
	        console.log(myLatLng.lat());
	        console.log(myLatLng.lng());  
	        var endlat = myLatLng.lat();
	        var endlng = myLatLng.lng();

	        return endlng
	        //dosecond(endlat,endlng)

	    } else {
	        alert("Geocode was not successful for the following reason: " + status);
	    }
	});
}
