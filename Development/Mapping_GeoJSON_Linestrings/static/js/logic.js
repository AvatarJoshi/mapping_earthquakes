// Add console.log to check to see if our code is working.
console.log("logic.js is working");


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
});

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/satellite-streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/dark-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/light-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
});



// Create a base layer that holds both maps
let baseMaps = {
    Streets: streets,
    Satellite: satelliteStreets,
    Light: light,
    Dark: dark
};

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [44, -80],
    zoom: 2,
    layers: [dark]
});

// Pass our map layers into our layers control
// and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);


// Access torontoData GeoJSON data from URL
let torontoData = "https://raw.githubusercontent.com/AvatarJoshi/mapping_earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2,
    opacity: 0.4
}

// Grab the GeoJSON data
d3.json(torontoData).then(data => {
    console.log(data.features[0]);
    // Create a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        style: myStyle
    }).bindPopup("<h2>" + "Airline: " + data.features[0].properties.airline + 
    "</h2> <hr> <h3>" + "Destination: " + data.features[0].properties.dst + "</h3>")
    .addTo(map);
});


