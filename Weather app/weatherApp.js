var apiKey = "296dad7cab74c160e0a5d21cabc9c565";
document.getElementById("search-btn").onclick = function () {
    const city = document.getElementById("search").value;

    var weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(weatherApi).then(res => res.json()).then(result => {
        const temp = toCelsius(result.main.temp);
        document.getElementById("temp").innerHTML = temp + "°C";

    });

    function toCelsius(data) {
        return Math.floor(data - 273.15);
    }

    document.getElementById("search").value = "";
}