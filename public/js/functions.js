
var data = JSON.parse(localStorage.getItem('key'));

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

  var month_index = Number(date.charAt(5).concat(date.charAt(6)))
  var month = months[month_index]
  var year = date.substr(0, 4)
  var day = date.substr(8,2)


  var newDate = ''+month+' '+day+' '+year+''

  return newDate;



};







function setInfo(date, summary, deaths, twitterId){


  var info = '<div style="font-family:menlo;font-size:20px;color:red;">'+date+
  '</div><br><div style="font-family:menlo;font-size:15px;color:black;">'+summary+
  '</div><br><div style="font-family:menlo;font-size:15px;color:black;">deaths:'+deaths+'</div><br><div><a href =  https://twitter.com/dronestream/status/'+twitterId+'/>read more</a></div>'




  return info;
};
