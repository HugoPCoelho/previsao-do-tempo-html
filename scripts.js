

const key = "8b6f231d051c7841bed2b4936a93d542"

function displayDataOnScreen(data) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "˚C"
    document.querySelector(".forecast").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

function displayNotFound() {
    document.querySelector(".cidade").innerHTML = "Cidade não localizada!"
    document.querySelector(".temp").innerHTML = "0˚C"
    document.querySelector(".forecast").innerHTML = ""
    document.querySelector(".humidity").innerHTML = "Umidade: "
}

async function findCidade(cidade) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    
    if(data.cod == 200)
        displayDataOnScreen(data)
    else
        displayNotFound()
}

function buttonClick() {
    const cidade = document.querySelector(".input-cidade").value

    findCidade(cidade)
}