function successCallback(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=67a1e24abe9cadc92368288a218ae4a8`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}`;
    });
}
function errorCallback() {
  document.querySelector("#weather div").innerText = "No Weather Data";
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
