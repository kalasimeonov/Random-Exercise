/*
Your task is to make a crawler for the "films" resource in The Star Wars API
The base URL for the API is: https://swapi.co/api
There is an interactive playground where you can send requests

You can refer to the documentation to see the available resources
https://swapi.co/documentation#films

Populate some of the nested resources for each film
For example each film has an array of "vehicles"
Go through that array and load the vehicle information for each of the entries
Repeat that process for the "planets" and "starships"

The final result should be an array of "films",
each of them with properly populated "vehicles", "planets" and "starships"

For each populated nested resource, extract only the following properties!
"vehicles" => name, model and vehicle_class props
"planets" => name and terrain props
"starships" => name, model and manufacturer props

Remove the "characters" "species", "url" and "opening_crawl" props from each film in the final result!

Advanced 1: Try to parallelize the requests as much as possible.
Advanced 2: Try to come up with a solution that minimizes the amount of requests needed to complete the crawl.

Use the fetch API
hints:
 * don't forget that you have to call res.json() in order to get the actual data
 * you can check how your response should look like in the provided ./test/crawler-data.json file
 * you can run this script with "npm run crawler"
 * you can run the automated tests with "npm run test"
 * don't forget to install the dependencies with "npm install"!
 */

import fetch from 'node-fetch';

const url = `https://swapi.co/api/films`;

async function filmsCrawler() {
    let films = await fetch(url)
        .then(res => res.json())
        .then(json => json.results)
        .then(async data => Promise.all(data.map(async (singleFilm) => {
            deleteMovieProps(singleFilm);
            singleFilm.planets = await Promise.all(singleFilm.planets.map(async (dataUrl) => {
                return await gatherData(dataUrl, 'planets')
            }));
            singgleFilm.vehicles = await Promise.all(singleFilm.vehicles.map(async (dataUrl) => {
                return await gatherData(dataUrl, 'vehicles')
            }));
            singleFilm.starships = await Promise.all(singleFilm.starships.map(async (dataUrl) => {
                return await gatherData(dataUrl, 'starships')
            }));
            return singleFilm;

        })));

    console.log(films);

}

function deleteMovieProps(movie) {
    delete movie['characters'];
    delete movie['species'];
    delete movie['url'];
    delete movie['opening_crawl'];
}

async function gatherData(url, dataType) {
    return await fetch(url)
        .then(response => response.json())
        .then((json) => {
            let data;
            if (dataType == 'planets') {
                data = {
                    name: json.name,
                    terrain: json.terrain
                };
            }
            if (dataType == 'vehicles') {
                data = {
                    name: json.name,
                    model: json.model,
                    vehicle_class: json.vehicle_class
                };
            }
            if (dataType == 'starships') {
                data = {
                    name: json.name,
                    model: json.model,
                    manufacturer: json.manufacturer
                };
            } else {
                data = json;
            }

            return JSON.stringify(data);

        })
}
filmsCrawler();

export default filmsCrawler;