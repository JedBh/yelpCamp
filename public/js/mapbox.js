objCampground = JSON.parse(campground);

mapboxgl.accessToken = mapboxToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: objCampground.coordinates,
  zoom: 10, // starting zoom
});

new mapboxgl.Marker().setLngLat(objCampground.coordinates).addTo(map);
