// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);



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

// // Add a circle to the map
// var circle = L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 300
//  }).addTo(map);

 // Add a circle to the map using circleMarker
var circleMarker = L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: '#ffffa1',
    fillOpacity: 0.5,
    radius: 30
 }).addTo(map);