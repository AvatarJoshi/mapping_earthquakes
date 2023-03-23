# Mapping_Earthquakes

**Deployed Site:** https://avatarjoshi.github.io/mapping_earthquakes/

## Project Overview
**Purpose**: Extracting and visualizing geoJSON data can provide unique insights into global phenomena. In this project I aimed to develop mastery of the Leaflet.js API to map and visualize global earthquake data in relation to the location of tectonic plates. 


## Resources

- This data is taken from the USGS earthquake feed, which contains geoJSON data on the location and magnitude of earthquakes that occur each week.
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

- Tectonic plate data was taken from:
https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json


## Features
- Earthquake intensity is indiciated by the size and color of the circular marker. In addition, a key is placed in the lower right indicating earthquake magnitude based on color.

- Additional information on each earthquake magnitude and location can be viewed by clicking on the marker. 

- Contains layers that allow the map to be toggled between "Streets", "Satellite", and "Dark" view (toggle located in upper right of the map)

- Contains layers that allows earthquake data to be toggled based on the users preference (toggle located in the upper right of the map). Users can choose to view all earthquakes, the tectonic plates, or major earthquakes (earthquakes with magnitude > 5).


## Results:
This dataset looks at the total earthquakes across the globe over a 7-day period. The visualizations of earthquake data (contained in the "Earthquake_Map" folder) reveals interesting trends regarding the location, magnitude, and frequency of the earthquakes. 

- Most earthquakes are localized on or near fault lines. 
- The frequency of earthquakes appears especially high along the west coast and pacific northwest regions of the United States. However, the magnitude of these earthquakes appears to be relatively low compared to other regions of the globe.
- High magnitude earthquakes (3+) appear to be especially prevalant in the eastern hemisphere; particularly along the east coasts of Japan and Australia. In addition, there are a high number of these higher magnitude earthquakes near Indonesia and Singapore. 

![earthquakes](/Earthquake_Map/earthquakes_screenshot.png)
NOTE: Since the USGS earthquake feed is updated every minute, the map will change depending upon the date viewed.