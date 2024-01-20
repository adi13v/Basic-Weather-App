const key = '711504f9a5aebe3e229d5d3ee0e08bbf';

//geocoding
let URL1 = "http://api.openweathermap.org/geo/1.0/direct?q=Tel-Aviv&limit=5&appid=711504f9a5aebe3e229d5d3ee0e08bbf"
let isSuccess;
let lat;
let long;
let temp;
let max_temp;
let min_temp;
let wind_speed;
let feels_like;
let humidity;
let visibility;

async function get( cityname ) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=5&appid=711504f9a5aebe3e229d5d3ee0e08bbf`);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
   try{
    lat = data[0].lat
    long= data[0].lon;
   }
   catch{
    isSuccess = 0;
   }
}
   
    



let URL2 = "https://api.openweathermap.org/data/2.5/weather?lat=32.0852997&lon=34.7818064&appid=711504f9a5aebe3e229d5d3ee0e08bbf"

async function getWeather(lat , long) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=711504f9a5aebe3e229d5d3ee0e08bbf`);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    temp= data.main.temp;
    max_temp = data.main.temp_max;
    min_temp = data.main.temp_min;
    wind_speed = data.wind.speed;
    feels_like = data.main.feels_like;
    humidity = data.main.humidity;
    visibility = data.visibility;




}


 //getData();

let x = document.querySelector("input");
let searchtext = document.querySelector("input placeholder");


let btn = document.querySelector('button');
btn.addEventListener('click' , async () => {
const cityname = x.value;


 if(!cityname.length) {
x.placeholder="Fill The Box!!!!";
return;
 }

console.log(cityname);
 await get(cityname);

 if(isSuccess===0) {
    x.value="Invalid";
    return;
 }


 // we have all the necessary data now
 console.log(lat);
 console.log(long);
 await getWeather(lat , long);

let min_temp_degrees = parseInt(min_temp-273);
let max_temp_degrees = parseInt(max_temp-273);
let feels_like_degrees = parseInt((feels_like)-273);



 document.querySelector(".cityname").innerHTML = cityname[0].toUpperCase() + cityname.substring(1);
document.querySelector(".max-min-temp").innerHTML = min_temp_degrees +"/" +max_temp_degrees+ "℃";

document.querySelector(".feels-like").innerHTML= "Feels Like: " + feels_like_degrees + "℃";

document.querySelector("#Visibility").innerHTML= "Visibility: "+ parseInt(visibility);
document.querySelector("#wind-speed").innerHTML = "Wind Speed: "+parseInt(wind_speed);

if(feels_like_degrees<0) {

    document.querySelector(".weather-type ").innerHTML = "<i class='fa-solid fa-snowflake'></i>" + "  Freezing";
    

    document.querySelector(".box").style.backgroundImage= "url('cold.jpg')";
    document.querySelector(".box").style.backgroundSize= "cover";
    document.querySelector(".cityname").style.color = "black";
document.querySelector(".max-min-temp").style.color = "black";

document.querySelector(".feels-like").style.color = "black";

document.querySelector("#Visibility").style.color = "black";
document.querySelector("#wind-speed").style.color = "black";
document.querySelector(".weather-type").style.color = "black";
    
}
else if (feels_like_degrees<10) {

    document.querySelector(".weather-type ").innerHTML = "<i class='fa-solid fa-mitten'></i>";
    document.querySelector(".weather-type").append("  Cold");
    document.querySelector(".box").style.backgroundImage= "url('cold.jpg')";
    document.querySelector(".box").style.backgroundSize= "cover";
    document.querySelector(".cityname").style.color = "black";
    document.querySelector(".max-min-temp").style.color = "black";
    
    document.querySelector(".feels-like").style.color = "black";
    
    document.querySelector("#Visibility").style.color = "black";
    document.querySelector("#wind-speed").style.color = "black";
    document.querySelector(".weather-type").style.color = "black";

}

else if(feels_like_degrees>10) {
    document.querySelector(".weather-type ").innerHTML = "<i class='fa-solid fa-cloud'></i>";

    document.querySelector(".weather-type").append(" Mild");
    document.querySelector(".box").style.backgroundImage= "url('mild.jpg')";
    document.querySelector(".max-min-temp").style.color = "black";
    
    document.querySelector(".feels-like").style.color = "black";
    
    document.querySelector("#Visibility").style.color = "black";
    document.querySelector("#wind-speed").style.color = "black";
    document.querySelector(".weather-type").style.color = "black";

}

else if(feels_like_degrees>25) {
    document.querySelector(".weather-type ").innerHTML = "<i class='fa-solid fa-sun'></i>";

    document.querySelector(".weather-type").append("  Warm And Sunny");
    document.querySelector(".box").style.backgroundImage= "url('clear.avif')";
    document.querySelector(".max-min-temp").style.color = "black";
    
    document.querySelector(".feels-like").style.color = "black";
    
    document.querySelector("#Visibility").style.color = "black";
    document.querySelector("#wind-speed").style.color = "black";
    document.querySelector(".weather-type").style.color = "black";


}
})










 

