//Memanggil File format JSON mirip Roni

//Administrasi BandarLampung dengan Warna
$.getJSON("geojson/bandarlampungColor.geojson", function(
    color) { // $.getJSON mengambil data JSON  //membuat fungsi color
    L.geoJson(color, { //membuat layer geojson
        style: function(feature) { //membuat style dengan mengambil feature menggunakan function
            var fillColor = feature.properties
                .Color; //query pengambilan warna dari geoJSON kemudian disimpan di variable fillColor

            return { //kembalikan hasil query, return juga merupakan result yang jelas tentang data apa yang diambil
                color: 'white', //warna outline
                weight: 1, //ketebalan outline
                fillColor: fillColor, //diambil dari varibel hasil pemanggillan geoJSON
                fillOpacity: 0.3 //opacity layer
            };
        },
        onEachFeature: function(feature,
            layer) { //dibaca "pada setiap feature memiliki function" //function feature telah dibuat pada tahapan style
            /* layer.bindPopup(feature.properties.namobj), //pada layer saat diklick akan menampilkan popup */
            layer.bindPopup("<strong>Kecamatan: </strong>" + feature.properties.namobj + '<br>' +
                    "<strong>Luas Area: </strong>" + feature.properties.luas + " meter"
                ), //pada layer saat diklick akan menampilkan popup
                //dengan event sebagai berikut
                that = this;
            layer.on('mouseover', function(e) { //event ketika mouse diatas layer
                this.openPopup().setStyle({
                    color: 'white',
                    dashArray: '',
                    fillOpacity: 0,
                    weight: 3
                });
                if (!L.Browser.ie && !L.Browser.opera) {
                    layer.bringToFront();
                }
                info.update(layer.feature.properties);
            });
            layer.on('mouseout', function(e) { //event ketika mouse keluar layer
                this.closePopup().setStyle({
                    color: 'feature.properties.namobj',
                    dashArray: '',
                    fillOpacity: 0.2,
                    weight: 1
                });
            });
        }
    }).addTo(
        bandarlampungColor); //memasukkan hasil pemanggilan file dan style ke dalam Tile Layer kosong bandarlampungColor
});

//Loading dengan Layer Cara 2
//style
/* const geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.5
}; */


//Nama Point BandarLampung dengan Warna
$.getJSON("geojson/nama.geojson", function(
    geojson) { // $.getJSON mengambil RAW Data data JSON  //membuat fungsi color
    L.geoJson(geojson, { //membuat layer geojson
        /* style: function (feature) { //membuat style dengan mengambil feature menggunakan function
            var fillColor = feature.properties
                .Color; //query dari geoJSON kemudian disimpan di variable fillColor

            return { //kembalikan hasil query, return juga merupakan result yang jelas tentang data apa yang diambil
                radius:8,
                color: '#d00000', //warna outline
                weight: 2, //ketebalan outline
                fillColor: "blue", //diambil dari varibel hasil pemanggillan geoJSON
                opacity: 0.3,
                fillOpacity: 0.4 //opacity layer
            };
        }, */
        onEachFeature: function(feature,
            layer) { //dibaca "pada setiap feature memiliki function" //function feature telah dibuat pada tahapan style
            //layer.bindPopup(feature.properties.namobj), //pada layer saat diklick akan menampilkan popup
            layer.bindPopup("<strong>Lokasi: </strong>" + feature.properties.name), //pada layer saat diklick akan menampilkan popup
                //dengan event sebagai berikut
                that = this;
        },
        pointToLayer: function(feature, latlng) { //mengubah simbol marker menjadi custom
            return L.circleMarker(latlng, geojsonMarkerOptions)
        }
    }).addTo(
        namaPointBandarLampung); //memasukkan hasil pemanggilan file dan style ke dalam Tile Layer kosong bandarlampungColor
});

/* return markers.addLayer(L.Marker(latlng, geojsonMarkerOptions)) */



//Thiessen Polygon Rumah Sakit BandarLampung dengan Warna
$.getJSON("geojson/JoinThiessenRsFull.geojson", function(
    color) { // $.getJSON mengambil data JSON  //membuat fungsi color
    L.geoJson(color, { //membuat layer geojson
        style: function(feature) { //membuat style dengan mengambil feature menggunakan function
            var fillColor = feature.properties
                .Color; //query pengambilan warna dari geoJSON kemudian disimpan di variable fillColor

            return { //kembalikan hasil query, return juga merupakan result yang jelas tentang data apa yang diambil
                color: 'white', //warna outline
                weight: 2, //ketebalan outline
                fillColor: fillColor, //diambil dari varibel hasil pemanggillan geoJSON
                fillOpacity: 0.5 //opacity layer
            };
        },
        onEachFeature: function(feature,
            layer) { //dibaca "pada setiap feature memiliki function" //function feature telah dibuat pada tahapan style
            /* layer.bindPopup(feature.properties.namobj), //pada layer saat diklick akan menampilkan popup */
            layer.bindPopup("<strong>Area Terdekat: </strong>" + feature.properties.NAMOBJ + '<br>'), //pada layer saat diklick akan menampilkan popup
                //dengan event sebagai berikut
                that = this;
            layer.on('mouseover', function(e) { //event ketika mouse diatas layer
                this.openPopup().setStyle({
                    color: '#8eecf5',
                    dashArray: '',
                    fillOpacity: 0,
                    weight: 3
                });
                if (!L.Browser.ie && !L.Browser.opera) {
                    layer.bringToFront();
                }
                info.update(layer.feature.properties);
            });
            layer.on('mouseout', function(e) { //event ketika mouse keluar layer
                this.closePopup().setStyle({
                    color: 'feature.properties.namobj',
                    dashArray: '',
                    fillOpacity: 0.5,
                    weight: 1
                });
            });
        }
    }).addTo(
        rsThiessenIntersect); //memasukkan hasil pemanggilan file dan style ke dalam Tile Layer kosong bandarlampungColor
});



/* Jalan Bandar Lampung */

//Jalan Arteri
$.getJSON("geojson/jalanArteriBdl.geojson", function(
    color) { // $.getJSON mengambil data JSON  //membuat fungsi color
    L.geoJson(color, { //membuat layer geojson
        style: function(feature) { //membuat style dengan mengambil feature menggunakan function
            var fillColor = feature.properties
                .Color; //query pengambilan warna dari geoJSON kemudian disimpan di variable fillColor

            return { //kembalikan hasil query, return juga merupakan result yang jelas tentang data apa yang diambil
                color: '#d00000', //warna outline Red
                weight: 6, //ketebalan outline
                fillColor: fillColor, //diambil dari varibel hasil pemanggillan geoJSON
                fillOpacity: 0.5 //opacity layer
            };
        },
        onEachFeature: function(feature,
            layer) { //dibaca "pada setiap feature memiliki function" //function feature telah dibuat pada tahapan style
            /* layer.bindPopup(feature.properties.namobj), //pada layer saat diklick akan menampilkan popup */
            layer.bindPopup("<strong>Area Terdekat: </strong>" + feature.properties.NAMOBJ + '<br>'), //pada layer saat diklick akan menampilkan popup
                //dengan event sebagai berikut
                that = this;
        }
    }).addTo(
        jalanArteriBdl); //memasukkan hasil pemanggilan file dan style ke dalam Tile Layer kosong bandarlampungColor
});

//Jalan Kolektor
$.getJSON("geojson/jalanKolektorBdl.geojson", function(
    color) { // $.getJSON mengambil data JSON  //membuat fungsi color
    L.geoJson(color, { //membuat layer geojson
        style: function(feature) { //membuat style dengan mengambil feature menggunakan function
            var fillColor = feature.properties
                .Color; //query pengambilan warna dari geoJSON kemudian disimpan di variable fillColor

            return { //kembalikan hasil query, return juga merupakan result yang jelas tentang data apa yang diambil
                color: '#023e8a', //warna outline Blue
                weight: 4, //ketebalan outline
                fillColor: fillColor, //diambil dari varibel hasil pemanggillan geoJSON
                fillOpacity: 0.5 //opacity layer
            };
        },
        onEachFeature: function(feature,
            layer) { //dibaca "pada setiap feature memiliki function" //function feature telah dibuat pada tahapan style
            /* layer.bindPopup(feature.properties.namobj), //pada layer saat diklick akan menampilkan popup */
            layer.bindPopup("<strong>Area Terdekat: </strong>" + feature.properties.NAMOBJ + '<br>'), //pada layer saat diklick akan menampilkan popup
                //dengan event sebagai berikut
                that = this;
        }
    }).addTo(
        jalanKolektorBdl); //memasukkan hasil pemanggilan file dan style ke dalam Tile Layer kosong bandarlampungColor
});

//Jalan Lokal
$.getJSON("geojson/jalanLokalBdl.geojson", function(
    color) { // $.getJSON mengambil data JSON  //membuat fungsi color
    L.geoJson(color, { //membuat layer geojson
        style: function(feature) { //membuat style dengan mengambil feature menggunakan function
            var fillColor = feature.properties
                .Color; //query pengambilan warna dari geoJSON kemudian disimpan di variable fillColor

            return { //kembalikan hasil query, return juga merupakan result yang jelas tentang data apa yang diambil
                color: '#aacc00', //warna outline Green
                weight: 3, //ketebalan outline
                fillColor: fillColor, //diambil dari varibel hasil pemanggillan geoJSON
                fillOpacity: 0.5 //opacity layer
            };
        },
        onEachFeature: function(feature,
            layer) { //dibaca "pada setiap feature memiliki function" //function feature telah dibuat pada tahapan style
            /* layer.bindPopup(feature.properties.namobj), //pada layer saat diklick akan menampilkan popup */
            layer.bindPopup("<strong>Area Terdekat: </strong>" + feature.properties.NAMOBJ + '<br>'), //pada layer saat diklick akan menampilkan popup
                //dengan event sebagai berikut
                that = this;
        }
    }).addTo(
        jalanLokalBdl); //memasukkan hasil pemanggilan file dan style ke dalam Tile Layer kosong bandarlampungColor
});


//Jalan Lain
$.getJSON("geojson/jalanLainBdl.geojson", function(
    color) { // $.getJSON mengambil data JSON  //membuat fungsi color
    L.geoJson(color, { //membuat layer geojson
        style: function(feature) { //membuat style dengan mengambil feature menggunakan function
            var fillColor = feature.properties
                .Color; //query pengambilan warna dari geoJSON kemudian disimpan di variable fillColor

            return { //kembalikan hasil query, return juga merupakan result yang jelas tentang data apa yang diambil
                color: 'grey', //warna outline
                weight: 1, //ketebalan outline
                fillColor: fillColor, //diambil dari varibel hasil pemanggillan geoJSON
                fillOpacity: 0.5 //opacity layer
            };
        },
        onEachFeature: function(feature,
            layer) { //dibaca "pada setiap feature memiliki function" //function feature telah dibuat pada tahapan style
            /* layer.bindPopup(feature.properties.namobj), //pada layer saat diklick akan menampilkan popup */
            layer.bindPopup("<strong>Area Terdekat: </strong>" + feature.properties.NAMOBJ + '<br>'), //pada layer saat diklick akan menampilkan popup
                //dengan event sebagai berikut
                that = this;
        }
    }).addTo(
        jalanLainBdl); //memasukkan hasil pemanggilan file dan style ke dalam Tile Layer kosong bandarlampungColor
});


//Jalan Buffer By Attribut Bandar Lampung
$.getJSON("geojson/jalanBdlBufferAttribut.geojson", function(
    color) { // $.getJSON mengambil data JSON  //membuat fungsi color
    L.geoJson(color, { //membuat layer geojson
        style: function(feature) { //membuat style dengan mengambil feature menggunakan function
            var fillColor = feature.properties
                .Color; //query pengambilan warna dari geoJSON kemudian disimpan di variable fillColor

            return { //kembalikan hasil query, return juga merupakan result yang jelas tentang data apa yang diambil
                color: '#adb5bd', //warna outline Grey Smooth
                weight: 0, //ketebalan outline
                fillColor: fillColor, //diambil dari varibel hasil pemanggillan geoJSON
                fillOpacity: 0.6 //opacity layer
            };
        },
        onEachFeature: function(feature,
            layer) { //dibaca "pada setiap feature memiliki function" //function feature telah dibuat pada tahapan style
            /* layer.bindPopup(feature.properties.namobj), //pada layer saat diklick akan menampilkan popup */
            layer.bindPopup("<strong>Area Terdekat: </strong>" + feature.properties.NAMOBJ + '<br>'), //pada layer saat diklick akan menampilkan popup
                //dengan event sebagai berikut
                that = this;
        }
    }).addTo(
        jalanBdlBufferAttribut); //memasukkan hasil pemanggilan file dan style ke dalam Tile Layer kosong bandarlampungColor
});