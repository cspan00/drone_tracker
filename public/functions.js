




  function setYearLat(){
  var select_year = $('#select_year').val()
  var latYear = []
  //iterate through data and compare year to year selected, if it matches, return lat longs for that year.
  for(i = 0; i < data['strike'].length; i++){
    if(data['strike'][i]['date'].substr(0,4) === select_year){
      latYear.push(data['strike'][i]['lat'])


    }
    else if(select_year === "all"){
    latYear.push(data['strike'][i]['lat'])

    }


    }
    return latYear;
};
function setYearLon(){
var select_year = $('#select_year').val()
var lonYear = []
//iterate through data and compare year to year selected, if it matches, return lat longs for that year.
for(i = 0; i < data['strike'].length; i++){
  if(data['strike'][i]['date'].substr(0,4) === select_year){

    lonYear.push(data['strike'][i]['lon'])

  }
  else if(select_year === "all"){
  lonYear.push(data['strike'][i]['lon'])

  }

  }
return lonYear;

}

function setDates(){
  var select_year = $('#select_year').val()
  var dates = []
  //iterate through data and compare year to year selected, if it matches, return lat longs for that year.
  for(i = 0; i < data['strike'].length; i++){
    if(data['strike'][i]['date'].substr(0,4) === select_year){

      dates.push(data['strike'][i]['date'])

    }
    else if(select_year === "all"){
    dates.push(data['strike'][i]['date'])

    }

    }
  return dates;

  }

function setDeaths(){
  var select_year = $('#select_year').val()
  var deaths = []
  //iterate through data and compare year to year selected, if it matches, return lat longs for that year.
  for(i = 0; i < data['strike'].length; i++){
    if(data['strike'][i]['date'].substr(0,4) === select_year){

      deaths.push(data['strike'][i]['deaths'])

    }
    else if(select_year === "all"){
    deaths.push(data['strike'][i]['deaths'])

    }

    }
  return deaths;
}

function setSummary(){
  var select_year = $('#select_year').val()
  var summaries = []
  //iterate through data and compare year to year selected, if it matches, return lat longs for that year.
  for(i = 0; i < data['strike'].length; i++){
    if(data['strike'][i]['date'].substr(0,4) === select_year){

      summaries.push(data['strike'][i]['narrative'])

    }
    else if(select_year === "all"){
    summaries.push(data['strike'][i]['narrative'])

    }

    }

  return summaries;

  }
  function setTwitter(){
    var select_year = $('#select_year').val()
    var twitterId = []
    //iterate through data and compare year to year selected, if it matches, return lat longs for that year.
    for(i = 0; i < data['strike'].length; i++){
      if(data['strike'][i]['date'].substr(0,4) === select_year){

        twitterId.push(data['strike'][i]['tweet_id'])

      }
      else if(select_year === "all"){
      twitterId.push(data['strike'][i]['tweet_id'])

      }

      }

    return twitterId;

    }





function formatDate(date){

  var months = [ 'null', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December']

  var month = months[date.charAt(6)]
  var year = date.substr(0, 4)
  var day = date.substr(8,2)
  // console.log(year);
  // console.log(month);
  // console.log(day);

  var newDate = ''+month+' '+day+' '+year+''

  return newDate;



};







function setInfo(date, summary, deaths, twitterId){


  var info = '<div style="font-family:menlo;font-size:20px;color:red;">'+date+
  '</div><br><div style="font-family:menlo;font-size:15px;color:black;">'+summary+
  '</div><br><div style="font-family:menlo;font-size:15px;color:black;">deaths:'+deaths+'</div><br><div><a href = https://twitter.com/dronestream/status/'+twitterId+'/>read more</a></div>'




  return info;
};









function createMap(){
  var styles = [

    {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},

    {
  "featureType": "landscape",
  "stylers": [
    { "color": "#E7D1A2" }
  ]
},{
  "featureType": "poi.park",
  "stylers": [
    { "visibility": "off" }
  ]
},{
  "featureType": "water",
  "stylers": [
    { "hue": "#0077ff" },
    { "lightness": -56 },
    { "saturation": -8 }
  ]
},{
  "featureType": "road",
  "stylers": [
    { "color": "#000000" }
  ]
},{
  "featureType": "poi.government",
  "stylers": [
    { "visibility": "on" }
  ]
}
    ];






    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});



var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(20.33877,57.43193),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');


// iterate through the arrays returned by getLat and GetLon and place markers on the map


        var lats = setYearLat()
        var lons = setYearLon()
        var deaths = setDeaths()
        var dates = setDates()
        var summaries = setSummary()
        var twitterIds = setTwitter()

for( i = 0; i < lats.length; i++ ) {

        var position = new google.maps.LatLng(lats[i], lons[i])


        var summary = summaries[i]
        var death = deaths[i]
        var date = dates[i]
        var twitterId = twitterIds[i]




        // var deaths = data['strike'][i]['deaths_max']
        // var twitterId = data['strike'][i]['tweet_id']
        var image = 'red_x.png'
        var title = setInfo(date, summary, death, twitterId)

        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            icon: image

        });



var infoWindow = new google.maps.InfoWindow();
google.maps.event.addListener(marker, 'click', (function() {


            infoWindow.setContent(this.title);
            infoWindow.open(map, this);
          // infoWindow.setContent(infoWindowContent);
          // infoWindow.open(map, marker);
       }));


}
 };


createMap();
$('#select_year').change(function(){
  createMap();

});
