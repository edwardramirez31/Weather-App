// Objects Creation
const weather = new Weather();


// Event listeners
document.getElementById('change-button').addEventListener('click', (e) => {
  const city = document.querySelector('#city').value;
  const state = document.querySelector('#state').value;

  weather.getData(city, state)
  .then(data => console.log(data))
  .catch(err => console.log(err));
});



