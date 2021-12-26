objCampground = JSON.parse(campground);

mapboxgl.accessToken = mapboxToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/dark-v9", // style URL
  center: objCampground.geometry.coordinates,
  zoom: 10, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
  .setLngLat(objCampground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${objCampground.title}</h3><p>${objCampground.location}</p>`
    )
  )
  .addTo(map);
