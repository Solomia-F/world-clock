function updateTime() {
  let currentCityElement = document.querySelector("#current-city");
  if (currentCityElement) {
    let currentCityTimeZone = currentCityElement.querySelector("#city-title");
    let currentCityDateElement = currentCityElement.querySelector(".date");
    let currentCityTimeElement = currentCityElement.querySelector(".time");

    let cityTimeZone = moment.tz.guess().replace("_", " ").split("/")[1];
    currentCityTimeZone.innerHTML = cityTimeZone;

    currentCityDateElement.innerHTML = moment().format("MMMM Do YYYY");
    currentCityTimeElement.innerHTML = moment().format("h:mm:ss");
  }
}

function updateCity(event) {
  let interval = setInterval(function () {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#selected-city");
    citiesElement.innerHTML = ` 
  
        <div>
          <h2 id="city-title">${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}</div>
      </div>
    `;
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
