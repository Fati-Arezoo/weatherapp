/* anything that you show in the DOM */

class Ui {
  // set active class the selectet li
  // det vi
  static setDayIndex(showIndex) {
    const listToday = document.querySelectorAll(".list-today li");
    const listWeek = document.querySelectorAll(".list-week li");

    // i is a parameter i callback

    listToday.forEach((li, i) => {
      // remove every class
      li.className = "";
      if (i == showIndex) {
        li.className = "active";
      }
    });

    listWeek.forEach((li, i) => {
      li.className = "";
      if (i == showIndex) {
        li.className = "active";
      }
    });
  }

  // convert kelvin to celisus
  static kelvinToC(kelvin) {
    return Math.round(kelvin - 273.15);
  }

  // convert kelvin to f
  static kelvinToF(kelvin) {
    return this.kelvinToC(kelvin) * 1.8 + 32;
  }

  // Get the name of the week day
  static getDayName(date) {
    const dateObj = new Date(date);
    const day = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
      dateObj
    );
    return day;
  }

  static render(days) {
    // select ul
    const listWeek = document.querySelector(".list-week");
    const listToday = document.querySelector(".list-today");
    listWeek.innerHTML = "";
    listToday.innerHTML = "";

    // add list item
    // i is index
    for (let i = 0; i < days.length; i++) {
      const weather = days[i];
      listToday.innerHTML += `
      <li>
      <div class="weather-misc">
      <div class="desc">
      <div>
      <img src="https://raw.githubusercontent.com/rickellis/SVG-Weather-Icons/master/OpenWeatherMap/${weather.weather[0].id}.svg" alt="" />
        </div>
        <div class="description">
         ${weather.weather[0].description}
        </div>
      </div>

      <div>
        <div class="wind"></div>
        <div class="air"></div>
        <div class="weather"></div>
      </div>
    </div>
    </li>
      `;

      const listWeekItem = document.createElement("li");
      listWeekItem.className = "list-item";
      listWeekItem.addEventListener("click", (e) => {
        e.preventDefault();
        this.setDayIndex(i);
      });

      listWeekItem.innerHTML = `
        <div class="icon"><img src="https://raw.githubusercontent.com/rickellis/SVG-Weather-Icons/master/OpenWeatherMap/${
          weather.weather[0].id
        }.svg" alt="" /></div>
         <div class="temp">
          <span class="min">${Ui.kelvinToC(weather.main.temp_min)}
            </span>/<span class="max">${Ui.kelvinToC(
              weather.main.temp_max
            )}</span>
            </div>
          <div class="day">${Ui.getDayName(weather.dt_txt)}</div>
      `;

      // vi add li to ul
      listWeek.appendChild(listWeekItem);
    }
  }

  static setCityName(name) {
    const cityName = document.querySelector(".navbar-text");
    cityName.innerText = name;
  }
}
export default Ui;
