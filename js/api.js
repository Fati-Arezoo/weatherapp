const apiUrl =
  "https://api.openweathermap.org/data/2.5/forecast?appid=bb3008fede2fb1727598d3ce4f955f91";

class api {
  static getCity(city) {
    return fetch(apiUrl + "&q=" + city);
  }
}

export default api;

// när vi return fetch behöver vi inte ha then efterosm vi return fetch
