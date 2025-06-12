console.log("hello world");

// const apiUrlWeather = `http://api.weatherapi.com/v1/current.json?q="Manila"&key=0e18b1e66e6d418e91e220356253005`;

// async function getCurrentWeather() {
//     const apiRes = await fetch(apiUrlWeather)
//     const result = await apiRes.json();

//     const  currentTempCel = result.current.temp_c;
//     console.log('current temp: ', currentTempCel);

//     const nameCity = result.location.name;
//     const nameCountry = result.location.country;
//     const text = result.current.condition.text;
//     const icon = result.current.condition.icon;

//     const placeHolder = document.querySelector("#weather-info");
//     placeHolder.innerHTML = `
//         <p>Right now it is...</p>
//         <p>${currentTempCel} C in ${nameCity}, ${nameCountry}</p>
//         <p><img src="${icon}" alt="${text}">${text}</p>
//     `

//     console.log('country: ', nameCountry);

//     console.log('api response: ', JSON.stringify(result));
// }

// getCurrentWeather();
// let formLocation;

// const form = document.getElementById("inputForm");
// const formData = new FormData(form);

// document.getElementById("inputForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     var formData = new FormData(form);
//     // output as an object
//     console.log(Object.fromEntries(formData));
// });

// let formLocation;
// let formDate;

// document.getElementById("submit").onclick = function(e){
//     e.preventDefault();
//     // formLocation = document.getElementById("formLocal").value;
//     // console.log(formLocation);

//     // formDate = document.getElementById("formDate").value;
//     // console.log(formDate);

//     const formLocation = document.getElementById("formLocal").value;
//     const formDate = document.getElementById("formDate").value;
//     const apiUrlAstro = `https://api.weatherapi.com/v1/astronomy.json?q=${formLocation}o&dt=${formDate}&key=0e18b1e66e6d418e91e220356253005`;

//     getCurrentAstro(apiUrlAstro);
// };

// async function getCurrentAstro(apiUrl) {
//     const apiRes = await fetch(apiUrl)
//     const result = await apiRes.json();

//     const moonPhase = result.astronomy.astro.moon_phase;
//     console.log('moon phase: ', moonPhase);


//     const nameCity = result.location.name;
//     console.log('moon phase: ', nameCity);
//     const nameCountry = result.location.country;
//     console.log('moon phase: ', nameCountry);
//     const moonRise = result.astronomy.astro.moonrise;
//     console.log('moon phase: ', moonRise);
// };

document.getElementById("submit").onclick = function(e) {
    e.preventDefault();

    const formLocation = document.getElementById("formLocal").value;
    const formDate = document.getElementById("formDate").value;

    const apiUrlAstro = `https://api.weatherapi.com/v1/astronomy.json?q=${formLocation}&dt=${formDate}&key=0e18b1e66e6d418e91e220356253005`;

    getCurrentAstro(apiUrlAstro);
};

async function getCurrentAstro(apiUrl) {
    try {
        const apiRes = await fetch(apiUrl);
        const result = await apiRes.json();

        const moonPhase = result.astronomy.astro.moon_phase;
        console.log('Moon phase:', moonPhase);

        const nameCity = result.location.name;
        console.log('City:', nameCity);

        const nameCountry = result.location.country;
        console.log('Country:', nameCountry);

        const moonRise = result.astronomy.astro.moonrise;
        console.log('Moonrise:', moonRise);
    } catch (err) {
        console.error('Error fetching astro data:', err);
    }
}



// const apiUrlAstro = `https://api.weatherapi.com/v1/astronomy.json?q=${formLocation}o&dt=${formDate}&key=0e18b1e66e6d418e91e220356253005`;

// async function getCurrentAstro() {
//     const apiRes = await fetch(apiUrlAstro)
//     const result = await apiRes.json();

//     const moonPhase = result.astronomy.astro.moon_phase;
//     console.log('moon phase: ', moonPhase);


//     const nameCity = result.location.name;
//     console.log('moon phase: ', nameCity);
//     const nameCountry = result.location.country;
//     console.log('moon phase: ', nameCountry);
//     const moonRise = result.astronomy.astro.moonrise;
//     console.log('moon phase: ', moonRise);

//     // const placeHolder = document.querySelector("#astro-info");
//     // placeHolder.innerHTML = `
//     //     <p>On [DATE] in ${nameCity}...</p>
//     //     <p>The moon will rise at ${moonRise} and it will be a ${moonPhase}</p>
//     // `
// };

// getCurrentAstro();