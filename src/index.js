import axios from "axios";
import debounce from "debounce";

const searchInput = document.getElementById("input");
const imagesList = document.querySelector(".list");

async function getName(valueInput) {
    try {
    const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${valueInput}`
    );
    makeHtml(data);
    } catch (error) {
    console.error(Error);
    }
}

function makeHtml(countrys) {
    const markup = countrys.map((country) => {
        if (countrys.length > 1) {
            imagesList.style.flexDirection = "row";
            return `
            <li class="item">
            <a class="country-name" target="_blank" href="${country.maps.googleMaps}">${country.name.common}</a>                
            </li>
            `;
        } else if (countrys.length === 1) {
            imagesList.style.flexDirection = "column";
            return `
            <li class="item">            
                <h2 class="country-name">${country.name.common}</h2>
                <img class="country-flag" src="${country.flags.png}">
                <h3 class="country-capital">capital: ${country.capital}</h3>
                <h3 class="country-area">area: ${country.area}</h3>
                <h3 class="country-population">population: ${country.population}</h3>                
                <h3 class="country-continents">continents: ${country.continents}</h3>
            </li>
        `;
        } else {
            
            alert('введіть коректну назву країни')
        }
    });
    imagesList.innerHTML = markup;
}

function searchCountry(e) {
    const value = searchInput.value;
    getName(value);
}

searchInput.addEventListener("input", debounce(searchCountry, 250));



    //     "name": {
    //         "common": "Switzerland",
    //         "official": "Swiss Confederation",
    //         "nativeName": {
    //             "fra": {
    //                 "official": "Confédération suisse",
    //                 "common": "Suisse"
    //             },
    //             "gsw": {
    //                 "official": "Schweizerische Eidgenossenschaft",
    //                 "common": "Schweiz"
    //             },
    //             "ita": {
    //                 "official": "Confederazione Svizzera",
    //                 "common": "Svizzera"
    //             },
    //             "roh": {
    //                 "official": "Confederaziun svizra",
    //                 "common": "Svizra"
    //             }
    //         }
    //     },
    //     "tld": [
    //         ".ch"
    //     ],
    //     "cca2": "CH",
    //     "ccn3": "756",
    //     "cca3": "CHE",
    //     "cioc": "SUI",
    //     "independent": true,
    //     "status": "officially-assigned",
    //     "unMember": true,
    //     "currencies": {
    //         "CHF": {
    //             "name": "Swiss franc",
    //             "symbol": "Fr."
    //         }
    //     },
    //     "idd": {
    //         "root": "+4",
    //         "suffixes": [
    //             "1"
    //         ]
    //     },
    //     "capital": [
    //         "Bern"
    //     ],
    //     "altSpellings": [
    //         "CH",
    //         "Swiss Confederation",
    //         "Schweiz",
    //         "Suisse",
    //         "Svizzera",
    //         "Svizra"
    //     ],
    //     "region": "Europe",
    //     "subregion": "Western Europe",
    //     "languages": {
    //         "fra": "French",
    //         "gsw": "Swiss German",
    //         "ita": "Italian",
    //         "roh": "Romansh"
    //     },

    //     "latlng": [
    //         47.0,
    //         8.0
    //     ],
    //     "landlocked": true,
    //     "borders": [
    //         "AUT",
    //         "FRA",
    //         "ITA",
    //         "LIE",
    //         "DEU"
    //     ],
    //     "area": 41284.0,
    //     "demonyms": {
    //         "eng": {
    //             "f": "Swiss",
    //             "m": "Swiss"
    //         },
    //         "fra": {
    //             "f": "Suisse",
    //             "m": "Suisse"
    //         }
    //     },
    //     "flag": "🇨🇭",
    //     "maps": {
    //         "googleMaps": "https://goo.gl/maps/uVuZcXaxSx5jLyEC9",
    //         "openStreetMaps": "https://www.openstreetmap.org/relation/51701"
    //     },
    //     "population": 8654622,
    //     "gini": {
    //         "2018": 33.1
    //     },
    //     "fifa": "SUI",
    //     "car": {
    //         "signs": [
    //             "CH"
    //         ],
    //         "side": "right"
    //     },
    //     "timezones": [
    //         "UTC+01:00"
    //     ],
    //     "continents": [
    //         "Europe"
    //     ],
    //     "flags": {
    //         "png": "https://flagcdn.com/w320/ch.png",
    //         "svg": "https://flagcdn.com/ch.svg",
    //         "alt": "The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field."
    //     },
    //     "coatOfArms": {
    //         "png": "https://mainfacts.com/media/images/coats_of_arms/ch.png",
    //         "svg": "https://mainfacts.com/media/images/coats_of_arms/ch.svg"
    //     },
    //     "startOfWeek": "monday",
    //     "capitalInfo": {
    //         "latlng": [
    //             46.92,
    //             7.47
    //         ]
    //     },
    //     "postalCode": {
    //         "format": "####",
    //         "regex": "^(\\d{4})$"
    //     }
    // },