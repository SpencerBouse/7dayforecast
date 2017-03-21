$('#city').submit(function(e){
  e.preventDefault();
  var name = $('#cityInput').val();
  var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ name +'&cnt=7&units=imperial&APPID=d0458c4189cf033bf80c84d7a0d38ab0'
  $('#cityInput').val('');
  $('#weather').html('');

$.ajax({url: url,
  success: function(response){
    console.log(response);
    response.list.forEach(function(day){
      console.log(day);
      $('#weather').append( `
        <div class="divide col-md-1">
          <h5>${day.weather[0].description}</h5>
          <p>Max Temp: ${day.temp.max}</p>
          <p>Min Temp:${day.temp.min}</p>
          <img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png">
        </div>
        `);
  });
  }})
})
