// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);


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

// // Add a marker to the map
// var markerCenter = L.marker([40.7, -94.5]).addTo(map);

// //  Add a marker to the map for Los Angeles, California.
// let markerLA = L.marker([34.0522, -118.2437]).addTo(map);

// // Add a circle to the map at Santa Cruz CA
// var circle = L.circle([36.974117, -122.030792], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 100000
//  }).addTo(map);

//  // Add a circle to the map using circleMarker
// var circleMarker = L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 30
//  }).addTo(map);



// Get city data from city.js
let cityData = cities;
console.log(cityData);

// Access airport GeoJSON data from URL
let airportData = "https://raw.githubusercontent.com/AvatarJoshi/mapping_earthquakes/main/majorAirports.json";

// // Grab the GeoJSON data
// d3.json(airportData).then(data => {
//     console.log(data);
//     // Create a GeoJSON layer with the retrieved data
//     L.geoJSON(data).addTo(map);
// })

// Grab the GeoJSON data
d3.json(airportData).then(data => {
    console.log(data);
    // Create a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2>" + "City: " + feature.properties.city +
            "</h2> <hr> <h3>" + "Airport Name: " + feature.properties.name + "</h3> <hr> <h4>" + 
            "Airport Code: " + feature.properties.faa);
        }
    }).addTo(map);
})

// L.geoJSON(sanFranAirport, {
// onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>" + feature.properties.city +
//     "</h2> <hr> <h3>" + feature.properties.name + "</h3> <hr> <h4>" +
//     feature.properties.faa);
// }
// }).addTo(map);



// // Loop through the cities array and create one marker for each city
// cityData.forEach(city => {    
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000,
//         color: 'orange',
//         fillColor: '#FFA500'
//     })
    // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map)
// })

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.city + "</h2> <hr> <h3>" + feature.properties.name + "</h3>");
//     }

//   }).addTo(map);

//   L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + feature.properties.city +
//         "</h2> <hr> <h3>" + feature.properties.name + "</h3> <hr> <h4>" +
//         feature.properties.faa);
//     }
//   }).addTo(map);