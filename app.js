// Objects Creation
const weather = new Weather();
const ui = new UI();

// Event listeners
document.getElementById('change-button').addEventListener('click', (e) => {
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;

  weather.getData(city, country)
    .then(data => {
      ui.setData(data);
      console.log(data);
  })
  .catch(err => console.log(err));
});



