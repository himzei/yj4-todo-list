const API_KEY = "532b43b6e382f182b0c43695a34f48ae";

function onGeoSuccess(position) {
  // console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather");
      weather.innerText = data.weather[0].main;
    });
}

function onGeoFail() {
  alert("현재 위치를 가져올 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
