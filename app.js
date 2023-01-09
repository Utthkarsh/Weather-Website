let weather = {
  api: "12af57446fd8048918e236504a271f35",
  getweather: function(city){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.api
    ).then((response) => response.json()).then((data) => this.showeather(data));
  },
  showeather: function(data){
    const {name} = data;
    const {icon,description} = data.weather[0];
    const {temp,humidity} = data.main;
    const {speed} = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector('.description').innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
    document.querySelector('.weather').classList.remove('loading');
     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
  },
  search: function(){
    this.getweather(document.querySelector('.search-bar').value)
  }
};
document.querySelector('button').addEventListener('click',function(){
    weather.search()
})



