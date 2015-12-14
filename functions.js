function getLatLng(data){
  for(var i = 0; i < data['strike'].length; i++)
  console.log(data['strike'][i]['lon'])

}




function createMap(){
var mapOptions = {
    center: new google.maps.LatLng(20.33877,57.43193),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.HYBRID
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
    position: new google.maps.LatLng(data["strike"][0]["lat"],data["strike"][0]["lon"]),
    map: map
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

};

createMap();

getLatLng(data);
