import base64 from "base-64";

const rootEndpoint = "https://api.punkapi.com/v2";

export const getRandomBrewdog = () =>
    fetch(`${rootEndpoint}/beers/random`)  
        .then(function(response) {
        return response.json()
    });