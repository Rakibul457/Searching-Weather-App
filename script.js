const API_KEY = "128b1d0462f961a26e21b42ca7d4885f"
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
const search = document.querySelector('#search')
const form = document.querySelector('form')
const weather = document.querySelector('#weather')





// const getWeather = async(city)=>{
//     weather.innerHTML = `<h1>Loading......</h1>`
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//     const respons = await fetch(url)
//     const data = await respons.json();
//     showData(data);
     
// }


// const showData = (data)=>{
//     if(data.cod == "404"){
//         weather.innerHTML = `<h1>City not found</h1>`
//         return;
//     }
//     weather.innerHTML = `
//      <div>
//         <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//      </div>
//      <div>
//       <h1>${data.main.temp}</h1>
//       <h3>${data.weather[0].main}</h3>
//      </div>
//     `
// }



// form.addEventListener('submit',(event)=>{
//     getWeather(search.value);
//     event.preventDefault();
    
// })
  



const getWeather = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const respons = await fetch(url);
    const data = await respons.json();
    showData(data);
    
}

const showData = (data)=>{
    console.log(data);
    weather.innerHTML = `
      <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h1>${data.main.temp}</h1>
            <h3>${data.weather[0].main}</h3>
        </div>
    `
    
}


form.addEventListener('submit',(event)=>{
    getWeather(search.value);
    event.preventDefault();
    
})