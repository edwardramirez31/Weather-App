// Objects Creation
const weather = new Weather();
const ui = new UI();
const storage = new Storage();
let weatherLocation = storage.getLocationData();
// Event listeners
// DOM ready
document.addEventListener("DOMContentLoaded", (e) => {
  weather.getData(weatherLocation.city, weatherLocation.country)
    .then((data) => {
      ui.setData(data);
    })
    .catch(err => console.log(err));
});

// Change Button
document.getElementById('change-button').addEventListener('click', (e) => {
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;

  weather.getData(city, country)
    .then(data => {
      ui.setData(data);
      console.log(data);
  })
    .catch(err => console.log(err));
  storage.setLocationData(city, country);
  $('#locationModal').modal('hide');
});




