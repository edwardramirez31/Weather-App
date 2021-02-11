function Weather() {
  this.apiKey = '9d1da533ab12ffa6758b3dcf82f1751b';
}

Weather.prototype.getData = async function (city, country) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.apiKey}`;
  const response = await fetch(url);
  const data = response.json();
  return data
} 