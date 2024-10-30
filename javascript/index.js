function updateTime() {
  let currentCityElement = document.querySelector("#current-city");
  let currentCityTimeZone = currentCityElement.querySelector("#city-title");
  let currentCityDateElement = currentCityElement.querySelector(".date");
  let currentCityTimeElement = currentCityElement.querySelector(".time");

  console.log(currentCityTimeZone);

  currentCityTimeZone.innerHTML = moment.tz.guess();
  currentCityDateElement.innerHTML = moment().format("MMMM Do YYYY");
  currentCityTimeElement.innerHTML = moment().format("h:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
