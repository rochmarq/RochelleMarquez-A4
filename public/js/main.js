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

const apiUrlAstro = 'https://api.weatherapi.com/v1/astronomy.json?q=Toronto&dt=2025-06-10&key=0e18b1e66e6d418e91e220356253005';

async function getCurrentAstro() {
    const apiRes = await fetch(apiUrlAstro)
    const result = await apiRes.json();

    const moonPhase = result.astronomy.astro.moon_phase;
    console.log('moon phase: ', moonPhase);


    const nameCity = result.location.name;
    console.log('moon phase: ', nameCity);
    const nameCountry = result.location.country;
    console.log('moon phase: ', nameCountry);
    const moonRise = result.astronomy.astro.moonrise;
    console.log('moon phase: ', moonRise);

    // const placeHolder = document.querySelector("#astro-info");
    // placeHolder.innerHTML = `
    //     <p>On [DATE] in ${nameCity}...</p>
    //     <p>The moon will rise at ${moonRise} and it will be a ${moonPhase}</p>
    // `
};

getCurrentAstro();