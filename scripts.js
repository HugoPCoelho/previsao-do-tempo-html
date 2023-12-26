

const key = "8b6f231d051c7841bed2b4936a93d542"

function DisplayDataOnScreen(data) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "˚C"
    document.querySelector(".forecast").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    
    console.log(data)
}

async function findCidade(cidade) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    
    DisplayDataOnScreen(data)
}

function buttonClick() {
    const cidade = document.querySelector(".input-cidade").value

    findCidade(cidade)
}