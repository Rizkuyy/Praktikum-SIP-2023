var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_univ_surabaya_1 = new ol.format.GeoJSON();
var features_univ_surabaya_1 = format_univ_surabaya_1.readFeatures(json_univ_surabaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_1.addFeatures(features_univ_surabaya_1);
var lyr_univ_surabaya_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_univ_surabaya_1, 
                style: style_univ_surabaya_1,
                interactive: true,
    title: 'univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya_1_0.png" /> ITS<br />\
    <img src="styles/legend/univ_surabaya_1_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya_1_2.png" /> UNAIR<br />\
    <img src="styles/legend/univ_surabaya_1_3.png" /> UNESA<br />\
    <img src="styles/legend/univ_surabaya_1_4.png" /> UPNV Jatim<br />\
    <img src="styles/legend/univ_surabaya_1_5.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_univ_surabaya_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_univ_surabaya_1];
lyr_univ_surabaya_1.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Foto': 'Foto', 'Desk_QS WUR': 'Ranking', 'Desk_Didirikan': 'Tahun berdiri', 'Desk_Fakultas': 'Fakultas', });
lyr_univ_surabaya_1.set('fieldImages', {'fid': 'Hidden', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Foto': 'ExternalResource', 'Desk_QS WUR': 'TextEdit', 'Desk_Didirikan': 'UniqueValues', 'Desk_Fakultas': 'TextEdit', });
lyr_univ_surabaya_1.set('fieldLabels', {'Nama': 'inline label', 'Kampus': 'inline label', 'Foto': 'no label', 'Desk_QS WUR': 'inline label', 'Desk_Didirikan': 'inline label', 'Desk_Fakultas': 'header label', });
lyr_univ_surabaya_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});