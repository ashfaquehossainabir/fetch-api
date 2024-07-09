// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})



// --> Optional Code for understanding API

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Could not fetch resource.");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));



// --> Fetching data using async/await

async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error("Could not fetch resource.");
        }

        const data = await response.json();
        // console.log(data);

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemon-sprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch(error) {
        console.error(error);
    }
}