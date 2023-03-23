// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30.1900,  -97.6687], 4
    );

// Coordinates for each point to be used in the line.
let line = [
    [37.773972, -122.431297],
    [30.1900,  -97.6687],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow",
    weight: 4,
    dashArray: 10,
    opacity: .7
    
  }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/satellite-streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add a marker to the map
var markerCenter = L.marker([40.7, -94.5]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
let markerLA = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle to the map at Santa Cruz CA
var circle = L.circle([36.974117, -122.030792], {
    color: 'black',
    fillColor: '#ffffa1',
    fillOpacity: 0.5,
    radius: 100000
 }).addTo(map);

 // Add a circle to the map using circleMarker
var circleMarker = L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: '#ffffa1',
    fillOpacity: 0.5,
    radius: 30
 }).addTo(map);



// Get city data from city.js
let cityData = cities;

console.log(cityData);

// Loop through the cities array and create one marker for each city
cityData.forEach(city => {    
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: 'orange',
        fillColor: '#FFA500'
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map)
})

