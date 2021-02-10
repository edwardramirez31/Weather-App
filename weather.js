function Weather() {
  this.apiKey = '9d1da533ab12ffa6758b3dcf82f1751b';
}

Weather.prototype.getData = async function (city, state) {
  let url;
  if (state) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${this.apiKey}`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
  }
  const response = await fetch(url);
  const data = response.json();
  return data
} 