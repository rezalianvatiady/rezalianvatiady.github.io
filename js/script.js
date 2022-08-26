 //PENTINGNYA MEMPERHATIKAN POSISI URUTAN PROSES DARI FUNGSI YANG SATU KE FUNGSI LAINNYA AGAR PENGAMBILAN DATA DAN REFERENSI BERJALAN SESUAI DENGAN RUMUS/FORMULASI DAN FUNCTION

//osm map
var osm = new L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmF0aWFkeSIsImEiOiJja3F4NjFsMmowcTY3MnZuenlkeXRzeTh2In0.Xg0o43TEZ3bU04YXtloN6A'
});

//esri map
var esri = new L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
});

// Google Satelite Layer
googleSat = new L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

// Google Satelite 2 Layer MiniMap
googleSat2 = new L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

//base map layer setting
var kotaagung = [-5.498423015704785, 104.62223693102368];
var map = new L.map('map',{
    center: kotaagung,
    zoom: 15,
    layers: [googleSat]
});

//geolocation

//High Accuracy
/* L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map); */

//MiniMap
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data &copy; OpenStreetMap contributors';
var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib }); //buat layer mapnya
var miniMap = new L.control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);    //buat panel minimapnya

//Navbar
L.control.navbar().addTo(map);
/* var map = L.map('map').setView([-5.498423015704785, 104.62223693102368], 15); */

//Leaflet Layer Control
var baseMaps = {
    'Google Satellite': googleSat,
    'OSM': osm,
    'Esri': esri
}

L.control.layers(baseMaps).addTo(map)

//Search Location
L.Control.geocoder().addTo(map);

// or, add to an existing map:
map.addControl(new L.Control.Fullscreen({
title: {
    'false': 'View Fullscreen',
    'true': 'Exit Fullscreen'
}
}));

map.isFullscreen() // Is the map fullscreen?
map.toggleFullscreen() // Either go fullscreen, or cancel the existing fullscreen.

// `fullscreenchange` Event that's fired when entering or exiting fullscreen.
map.on('fullscreenchange', function () {
    if (map.isFullscreen()) {
        console.log('entered fullscreen');
    } else {
        console.log('exited fullscreen');
    }
});



//File layer
var style = {color:'red', opacity: 1.0, fillOpacity: 1.0, weight: 2, clickable: false};
    L.Control.FileLayerLoad.LABEL = '<img class="icon" src="folder.svg" alt="file icon"/>';
    L.Control.fileLayerLoad({
        fitBounds: true,
        layerOptions: {style: style,
                       pointToLayer: function (data, latlng) {
                          return L.circleMarker(latlng, {style: style});
                       }},
    }).addTo(map);
    control.addTo(map);
    control.loader.on('data:loaded', function (e) {
        var layer = e.layer;
        console.log(layer);
    });
