let inputval = document.querySelector('#cityinput')
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')

apik = "3045dd712ffe6e702e3245525ac7fa38"

    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        .then(data => {
            let nameval = data['name']
            let tempature = data['main']['temp']
            let celsius = Math.round(tempature -  273.15)
            let windSpeed = data['wind']['speed']

            city.innerHTML=`Shahar: <span>${nameval}<span>`
            temp.innerHTML = `Temperatura: <span>${celsius}°C            </span>`
            wind.innerHTML = `Shamol tezligi: <span>${windSpeed} km/soat<span>`

        })

        .catch(err => alert('Xatolik'))
    })