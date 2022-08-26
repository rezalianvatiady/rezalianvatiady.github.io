/* Bike Racks */
var bikeRacksIcon = L.icon({
    iconUrl: 'icons/bicycle.png',
    iconSize: [
        20,
        24
    ],
    iconAnchor: [
        12,
        28
    ],
    popupAnchor: [
        0,
        -25
    ]
});
bikeRacks = new L.geoJson(null,
{
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng,
        {
        icon: bikeRacksIcon,
        title: feature.properties.address
        });
    },
    onEachFeature: function (feature, layer) {
      if (feature.properties) {
        var content = '<table border="1" style="border-collapse:collapse;" cellpadding="2">' +
        '<tr>' + '<th>Nama Kecamatan </th>' + '<td>' + feature.properties.namobj + '</td>' + '</tr>' +
        '<tr>' + '<th>Luas Area </th>' + '<td>' + feature.properties.shape_area + '</td>' + '</tr>' +
        '<table>';
        layer.bindPopup(content);
        }
    }
});
bikeRackClusters = new L.MarkerClusterGroup({
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
  disableClusteringAtZoom: 16
});
$.getJSON("geojson/rumahsakit_pt_50k.geojson", function (data) {
  bikeRacks.addData(data);
    bikeRackClusters.addLayer(bikeRacks);
}).complete(function () {
map.fitBounds(bikeRacks.getBounds());
});