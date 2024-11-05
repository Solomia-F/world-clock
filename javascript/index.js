function updateTime() {
  let currentCityElement = document.querySelector("#current-city");
  if (currentCityElement) {
    let currentCityTimeZone = currentCityElement.querySelector("#city-title");
    let currentCityDateElement = currentCityElement.querySelector(".date");
    let currentCityTimeElement = currentCityElement.querySelector(".time");

    currentCityTimeZone.innerHTML = moment.tz
      .guess()
      .replace("_", " ")
      .split("/")[1];
    currentCityDateElement.innerHTML = moment().format("MMMM Do YYYY");
    currentCityTimeElement.innerHTML = moment().format("HH:mm:ss");
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");
  }

  // Kyiv
  let kyivElement = document.querySelector("#kyiv");
  if (kyivElement) {
    let kyivDateElement = kyivElement.querySelector(".date");
    let kyivTimeElement = kyivElement.querySelector(".time");
    let kyivTime = moment().tz("Europe/Kyiv");

    kyivDateElement.innerHTML = kyivTime.format("MMMM	Do YYYY");
    kyivTimeElement.innerHTML = kyivTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let interval = setInterval(function () {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` 
   <div class="city">
        <div>
          <h2 id="city-title">${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("HH:mm:ss")}</div>
      </div>
    </div>
    <a href="/">← Back</a>
    `;
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
