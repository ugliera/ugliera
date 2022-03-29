var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_COMMUNE_1 = new ol.format.GeoJSON();
var features_COMMUNE_1 = format_COMMUNE_1.readFeatures(json_COMMUNE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_1.addFeatures(features_COMMUNE_1);
var lyr_COMMUNE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNE_1, 
                style: style_COMMUNE_1,
                interactive: true,
    title: 'COMMUNE<br />\
    <img src="styles/legend/COMMUNE_1_0.png" /> Bazouges-sur-le-Loir<br />\
    <img src="styles/legend/COMMUNE_1_1.png" /> Bousse<br />\
    <img src="styles/legend/COMMUNE_1_2.png" /> Clermont-Créans<br />\
    <img src="styles/legend/COMMUNE_1_3.png" /> Cré<br />\
    <img src="styles/legend/COMMUNE_1_4.png" /> Crosmières<br />\
    <img src="styles/legend/COMMUNE_1_5.png" /> La Flèche<br />\
    <img src="styles/legend/COMMUNE_1_6.png" /> Le Bailleul<br />\
    <img src="styles/legend/COMMUNE_1_7.png" /> Ligron<br />\
    <img src="styles/legend/COMMUNE_1_8.png" /> Mareil-sur-Loir<br />\
    <img src="styles/legend/COMMUNE_1_9.png" /> Villaines-sous-Malicorne<br />\
    <img src="styles/legend/COMMUNE_1_10.png" /> <br />'
        });
var format_CHEF_LIEU_2 = new ol.format.GeoJSON();
var features_CHEF_LIEU_2 = format_CHEF_LIEU_2.readFeatures(json_CHEF_LIEU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHEF_LIEU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHEF_LIEU_2.addFeatures(features_CHEF_LIEU_2);cluster_CHEF_LIEU_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CHEF_LIEU_2
});
var lyr_CHEF_LIEU_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CHEF_LIEU_2, 
                style: style_CHEF_LIEU_2,
                interactive: true,
                title: '<img src="styles/legend/CHEF_LIEU_2.png" /> CHEF_LIEU'
            });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_COMMUNE_1.setVisible(true);lyr_CHEF_LIEU_2.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_COMMUNE_1,lyr_CHEF_LIEU_2];
lyr_COMMUNE_1.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'Nom de la commune', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'Population', 'MULTICAN': 'MULTICAN', });
lyr_CHEF_LIEU_2.set('fieldAliases', {'ID': 'ID', 'ID_COM': 'ID_COM', 'ORIGIN_NOM': 'ORIGIN_NOM', 'NATURE': 'NATURE', 'NOM': 'NOM', 'IMPORTANCE': 'IMPORTANCE', });
lyr_COMMUNE_1.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_CHEF_LIEU_2.set('fieldImages', {'ID': 'TextEdit', 'ID_COM': 'TextEdit', 'ORIGIN_NOM': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'IMPORTANCE': 'TextEdit', });
lyr_COMMUNE_1.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'NOM': 'header label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'CANTON': 'inline label', 'ARRONDISST': 'inline label', 'DEPART': 'no label', 'REGION': 'inline label', 'POPUL': 'inline label', 'MULTICAN': 'header label', });
lyr_CHEF_LIEU_2.set('fieldLabels', {'ID': 'no label', 'ID_COM': 'no label', 'ORIGIN_NOM': 'header label', 'NATURE': 'header label', 'NOM': 'header label', 'IMPORTANCE': 'no label', });
lyr_CHEF_LIEU_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});