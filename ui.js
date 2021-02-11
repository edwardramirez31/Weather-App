String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function UI() {
  this.location = document.getElementById('location');
  this.description = document.getElementById('description');
  this.temperature = document.getElementById('temp');
  this.icon = document.getElementById('weather-icon');
  this.humidity = document.getElementById('humidity');
  this.dewpoint = document.getElementById('dewpoint');
  this.feels = document.getElementById('feels');
  this.wind = document.getElementById('wind');
}
UI.prototype.setTemperature = function (temperature) {
  const celsius = Math.round((temperature - 273.15) * 100 ) / 100;
  const fahrenheit = Math.round((celsius * 9 / 5 + 32) * 100 ) / 100;
  return `${fahrenheit} °F (${celsius} °C)`;
}


UI.prototype.setData = function (data) {
  this.location.innerHTML = data.name + ', ' + data.sys.country;
  this.description.innerHTML = data.weather[0].description.capitalize();
  this.temperature.innerHTML = this.setTemperature(data.main.temp);
  this.icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
  this.humidity.innerHTML = 'Relative humidity: '+ data.main.humidity + '%';
  this.dewpoint.innerHTML = 'Minimum temperature: '+ this.setTemperature(data.main.temp_min);
  this.feels.innerHTML = 'Feels like: ' + this.setTemperature(data.main.feels_like);
  this.wind.innerHTML = `Wind speed: ${data.wind.speed} m/s`; 
};

