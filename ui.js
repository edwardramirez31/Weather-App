String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function UI() {
  this.location = document.getElementById('location');
  this.description = document.getElementById('description');
  this.temperature = document.getElementById('temp');
  this.icon = document.getElementById('icon');
  this.humidity = document.getElementById('humidity');
  this.wind = document.getElementById('wind');
}
UI.prototype.setTemperature = function (temperature) {
  const celsius = Math.round((temperature - 273.15) * 100 ) / 100;
  // const fahrenheit = Math.round((celsius * 9 / 5 + 32) * 100 ) / 100;
  return `${Math.round(celsius)}`;
}


UI.prototype.setData = function (data) {
  console.log(data);
  this.location.innerHTML = data.name + `, ${data.sys.country}</span>`;
  this.description.innerHTML = data.weather[0].description.capitalize();
  this.temperature.innerHTML = this.setTemperature(data.main.temp);
  this.icon.className = `wi wi-owm-${data.weather[0].id}`;
  this.humidity.innerHTML = 'Humidity: '+ data.main.humidity + '%';
  this.wind.innerHTML = `Wind speed: ${data.wind.speed} m/s`; 
};

