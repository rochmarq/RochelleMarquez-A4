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

const moonPhaseImages = {
    "New Moon": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_new.1026_print.jpg",
    "Waxing Crescent": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_waxing_crescent.0398_print.jpg",
    "First Quarter": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_first_quarter.5440_print.jpg",
    "Waxing Gibbous": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_waxing_gibbous.4801_print.jpg",
    "Full Moon": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_full.3492_print.jpg",
    "Waning Gibbous": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_waning_gibbous.2172_print.jpg",
    "Third Quarter": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_third_quarter.2243_print.jpg",
    "Waning Crescent": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_waning_crescent.0903_print.jpg"
};

document.getElementById("submit").onclick = function(e) {
    e.preventDefault();

    const formLocation = document.getElementById("formLocal").value;
    const formDate = document.getElementById("formDate").value;
    console.log(formDate)

    const apiUrlAstro = `https://api.weatherapi.com/v1/astronomy.json?q=${formLocation}&dt=${formDate}&key=0e18b1e66e6d418e91e220356253005`;

    getCurrentAstro(apiUrlAstro, formDate);
};

async function getCurrentAstro(apiUrl, formDateRaw) {
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

    const moonSet = result.astronomy.astro.moonset;
    console.log('Moonrise:', moonSet);

    const readableDate = new Date(formDateRaw  + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const placeHolder = document.querySelector("#astro-info");
    placeHolder.innerHTML = `
        <div class="card mt-4 m-auto p-2">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="${moonPhase}">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">In ${nameCity}, ${nameCountry} on ${readableDate}...</h5>
                    <p class="card-text">The moon rose at ${moonRise} and set at ${moonSet}. On that day, the moon was in the ${moonPhase} phase.</p>
                </div>
                </div>
            </div>
        </div>
    `
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