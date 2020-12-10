/* import ui and data */
import Ui from "./ui.js";
import api from "./api.js";

/* main function that links back to the ui and data */
const form = document.querySelector(".form");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();

  const city = document.querySelector(".input-txt").value;
  const weatherapi = api.getCity(city); // input.value
  weatherapi
    .then((res) => res.json())
    .then((data) => {
      if (!data.list || data.list == null || data.list.length == 0) {
        return;
      }

      // vi har filter array och lagt det i ny array
      let days = data.list.filter((item) => {
        if (item.dt_txt.includes("12:00:00") === true) {
          return true;
        } else {
          return false;
        }
      });
      Ui.setCityName(data.city.name);
      Ui.render(days);
      //select the fisrt index
      Ui.setDayIndex(0);
    });
}
