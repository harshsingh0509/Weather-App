const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '097341bc96msh4c420aaf5c6297cp138971jsn755c429b9db6',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune',options)
.then(response => response.json())
.then((response) => {
    
    
    console.log(response)


    cloud_pct.innerHTML = response.clould_pct
    temp.innerHTML = response.temp 
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
           })
.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)  
})

getWeather("Pune")
