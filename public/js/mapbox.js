mapboxgl.accessToken = mapboxToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-97.1, 38.7], // starting position [lng, lat]
  zoom: 3, // starting zoom
});
