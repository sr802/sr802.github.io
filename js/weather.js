const API_KEY = "a9805cc390920c67b9e17f9218204d5d";

function onGeoOk(position){
    //위도 경도 받아오기
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data=> {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
           city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
             
            });
}

function onGeoError(){
    alert("Can't find you.  No weather for you.");
}
//위치를 나타내줌
//getCurrentPosition: (잘될때실행, 오류날때 실행될거)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);