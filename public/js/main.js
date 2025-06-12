// moon images
const moonPhaseImages = {
    "New Moon": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_new.1026_print.jpg",
    "Waxing Crescent": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_waxing_crescent.0398_print.jpg",
    "First Quarter": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_first_quarter.5440_print.jpg",
    "Waxing Gibbous": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_waxing_gibbous.4801_print.jpg",
    "Full Moon": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_full.3492_print.jpg",
    "Waning Gibbous": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_waning_gibbous.2172_print.jpg",
    "Last Quarter": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_third_quarter.2243_print.jpg",
    "Waning Crescent": "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/phase_waning_crescent.0903_print.jpg"
};

// form data
document.getElementById("submit").onclick = function(e) {
    // prevent page from refreshing after submitting form
    e.preventDefault();

    // get form values
    const formLocation = document.getElementById("formLocal").value;
    const formDate = document.getElementById("formDate").value;
    console.log(formDate)

    // input form values into api url
    const apiUrlAstro = `https://api.weatherapi.com/v1/astronomy.json?q=${formLocation}&dt=${formDate}&key=0e18b1e66e6d418e91e220356253005`;

    getCurrentAstro(apiUrlAstro, formDate);
};

async function getCurrentAstro(apiUrl, formDateRaw) {
    // fetching api request
    const apiRes = await fetch(apiUrl);
    const result = await apiRes.json();

    // testing if it fetches api requests
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

    // reformatting the date value from the for to text
    const readableDate = new Date(formDateRaw  + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // selecting moon phase image using api data
    const moonImageUrl = moonPhaseImages[moonPhase];

    // html inserted
    const placeHolder = document.querySelector("#astro-info");
    placeHolder.innerHTML = `
        <div class="card mt-4 m-auto p-2">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${moonImageUrl}" class="img-fluid rounded-start" alt="${moonPhase}">
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
};