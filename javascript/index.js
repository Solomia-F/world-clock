/* function updateTime() {
  let currentCityElement = document.querySelector("#current-city");
  let currentCityTimeZone = currentCityElement.querySelector("#city-title");
  let currentCityDateElement = currentCityElement.querySelector(".date");
  let currentCityTimeElement = currentCityElement.querySelector(".time");

  currentCityTimeZone.innerHTML = moment.tz.guess();
  currentCityDateElement.innerHTML = moment().format("MMMM Do YYYY");
  currentCityTimeElement.innerHTML = moment().format("h:mm:ss");
}
*/
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
  <div class="city" id="current-city">
        <div>
          <h2 id="city-title">${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}</div>
      </div>
    </div>`;
}

//updateTime();
//setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
