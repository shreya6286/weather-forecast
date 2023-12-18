let place = ""

async function onButtonClick() {
    let api = "http://api.weatherapi.com/v1/current.json?key=45c8d47bb9dc459abf9171635230601&q="
    place = document.getElementById('city').value
    api = api + place + "&aqi=no";
    const api_output = await fetch(api);
    const data = await api_output.json(); 
    console.log(data);
    document.getElementById("cloud").innerHTML = "cloud: " + data.current.cloud  
    document.getElementById("feels").innerHTML = "feelslike_c: " + data.current.feelslike_c
    document.getElementById("gust").innerHTML = "gust_kph: " + data.current.gust_kph
    document.getElementById("hum").innerHTML = "humidity: " + data.current.humidity
    document.getElementById("day").innerHTML = "is_day: " + data.current.is_day
    document.getElementById("last").innerHTML = "last_updated: " + data.current.last_updated   
    document.getElementById("precip").innerHTML = "precip_mm: " + data.current.precip_mm
    document.getElementById("press").innerHTML = "pressure_in: " + data.current.pressure_in
    document.getElementById("temp").innerHTML = "temp_c: " + data.current.temp_c
    document.getElementById("uv").innerHTML = "uv: " + data.current.uv
    document.getElementById("km").innerHTML = "vis_km: " + data.current.vis_km
    document.getElementById("miles").innerHTML = "vis_miles: " + data.current.vis_miles
    document.getElementById("deg").innerHTML = "wind_degree: " + data.current.wind_degree
    document.getElementById("dir").innerHTML = "wind_dir: " + data.current.wind_dir
    document.getElementById("wind").innerHTML = "wind_kph: " + data.current.wind_kph

    document.getElementById("country").innerHTML = "country: " + data.location.country 
    document.getElementById("lat").innerHTML = "lat: " + data.location.lat
    document.getElementById("loctime").innerHTML = "localtime: " + data.location.localtime
    document.getElementById("epoch").innerHTML = "localtime_epoch: " + data.location.localtime_epoch
    document.getElementById("lon").innerHTML = "lon: " + data.location.lon
    document.getElementById("name").innerHTML = "name: " + data.location.name  
    document.getElementById("region").innerHTML = "region: " + data.location.region
    document.getElementById("tz_id").innerHTML = "tz_id: " + data.location.tz_id
}

