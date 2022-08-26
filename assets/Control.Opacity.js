/*
        Leaflet.OpacityControls, a plugin for adjusting the opacity of a Leaflet map.
        (c) 2013, Jared Dominguez
        (c) 2013, LizardTech

        https://github.com/lizardtechblog/Leaflet.OpacityControls
*/

//Declare global variables
var opacity_layer;

//Create a control to increase the opacity value. This makes the image more opaque.
/* L.Control.higherOpacity = L.Control.extend({
    options: {
        position: 'topright'
    },
    setOpacityLayer: function (layer) {     //buat method dengan function opacity_layer = layer
            opacity_layer = layer;
    },
    onAdd: function () {

        var higher_opacity_div = L.DomUtil.create('div', 'higher_opacity_control');     //membuat higher_opacity kerangka html dan css

        L.DomEvent.addListener(higher_opacity_div, 'click', L.DomEvent.stopPropagation)     //menambahkan event pada saat diclick
            .addListener(higher_opacity_div, 'click', L.DomEvent.preventDefault)
            .addListener(higher_opacity_div, 'click', function () { onClickHigherOpacity() });  //ketika diclick maka buat function

        return higher_opacity_div;    //maka keluarkan variabel sebagai variable global
    }
}); */

//Create a control to decrease the opacity value. This makes the image more transparent.
    /* L.Control.lowerOpacity = L.Control.extend({
        options: {
            position: 'topright'
        },
        setOpacityLayer: function (layer) {
                opacity_layer = layer;
        },
        onAdd: function (map) {     //pada fungsi map tambahkan....

            var lower_opacity_div = L.DomUtil.create('div', 'lower_opacity_control');   //mebuat lower opacity div untuk simbol

            L.DomEvent.addListener(lower_opacity_div, 'click', L.DomEvent.stopPropagation)  //dibaca"pada saat lower_opacity_div diclick maka stop propagation"
                .addListener(lower_opacity_div, 'click', L.DomEvent.preventDefault)
                .addListener(lower_opacity_div, 'click', function () { onClickLowerOpacity() });

            return lower_opacity_div;
        }
    }); */

//Create a jquery-ui slider with values from 0 to 100. Match the opacity value to the slider value divided by 100.
L.Control.opacitySlider = L.Control.extend({
    options: {
        position: 'topright'
    },
    setOpacityLayer: function (layer) {     //membuat property layer didalam function declaration tanpa nama
            opacity_layer = layer;          //var nya udah didefinisikan terlebih dahulu diluar function //untuk menentukan layer yang akan diberikan opacity
    },
    onAdd: function (map) {     //membuat property map didalam function declaration tanpa nama //ketika di AddTo(map), maka buat wadah kontrol dengan nama kelas tertentu

        var opacity_slider_div = L.DomUtil.create('div', 'opacity_slider_control');   //didalam property kita buat/deklarasikan var opacity_slider_div  //maka buat variabel yg didalamnya berisi perintah DOM untuk membuat class opacity_slider_control

        $(function() {  //dolar akan memanggil supply apabila halaman telah selesai diload
            $( ".opacity_slider_control" ).slider({     //hubungkan class .opacity_slider_control  dengan slider
              //tambahkan spesifikasi slider berikut:
                /* orientation: "vertical", */ //ini juga dapat diganti dengan custom pada css
              range: "min", //posisi saat memulai pada min = 0
              min: 0,
              max: 100,     //maximal opacity = 100
              value: 60,
              step: 10,
              start: function ( event, ui) {    //membuat property event dan ui di dalam function declaration tanpa nama
                //When moving the slider, disable panning.
                map.dragging.disable();
                map.once('mousedown', function (e) {    //pada saat mouse bergerak kebawah
                    map.dragging.enable();              //maka dapat melakukan drag pada slider
                });
              },
              slide: function ( event, ui ) {       //membuat property event dan ui di dalam function declaration tanpa nama //pada saat method slide

                var slider_value = ui.value / 100;   //buat slider value sebagai input nilai opacity
                opacity_layer.setOpacity(slider_value);     //untuk opacity layer dihubungkan dengan setOpacity yang nilainya diisi berdasarkan slider_value

              }
            });

        });


        return opacity_slider_div;
    }
});


/* function onClickHigherOpacity() {
    var opacity_value = opacity_layer.options.opacity;

    if (opacity_value > 1) {
        return;
    } else {
        opacity_layer.setOpacity(opacity_value + 0.2);
        //When you double-click on the control, do not zoom.
        map.doubleClickZoom.disable();
        map.once('click', function (e) {
            map.doubleClickZoom.enable();
        });
    }

}

function onClickLowerOpacity() {
    var opacity_value = opacity_layer.options.opacity;

    if (opacity_value < 0) {
        return;
    } else {
        opacity_layer.setOpacity(opacity_value - 0.2);
        //When you double-click on the control, do not zoom.
        map.doubleClickZoom.disable();
        map.once('click', function (e) {
            map.doubleClickZoom.enable();
        });
    }

} */
