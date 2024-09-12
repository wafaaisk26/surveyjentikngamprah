var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_kelcilame_1 = new ol.format.GeoJSON();
var features_kelcilame_1 = format_kelcilame_1.readFeatures(json_kelcilame_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelcilame_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kelcilame_1.addFeatures(features_kelcilame_1);
var lyr_kelcilame_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kelcilame_1, 
                style: style_kelcilame_1,
                popuplayertitle: "kel cilame",
                interactive: true,
                title: '<img src="styles/legend/kelcilame_1.png" /> kel cilame'
            });
var format_bufferingpraktekke2fix_2 = new ol.format.GeoJSON();
var features_bufferingpraktekke2fix_2 = format_bufferingpraktekke2fix_2.readFeatures(json_bufferingpraktekke2fix_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufferingpraktekke2fix_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufferingpraktekke2fix_2.addFeatures(features_bufferingpraktekke2fix_2);
var lyr_bufferingpraktekke2fix_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bufferingpraktekke2fix_2, 
                style: style_bufferingpraktekke2fix_2,
                popuplayertitle: "buffering praktek ke 2 fix",
                interactive: true,
                title: '<img src="styles/legend/bufferingpraktekke2fix_2.png" /> buffering praktek ke 2 fix'
            });
var format_shapefilepraktekke2_3 = new ol.format.GeoJSON();
var features_shapefilepraktekke2_3 = format_shapefilepraktekke2_3.readFeatures(json_shapefilepraktekke2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shapefilepraktekke2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shapefilepraktekke2_3.addFeatures(features_shapefilepraktekke2_3);
var lyr_shapefilepraktekke2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shapefilepraktekke2_3, 
                style: style_shapefilepraktekke2_3,
                popuplayertitle: "shapefile praktek ke 2",
                interactive: true,
                title: '<img src="styles/legend/shapefilepraktekke2_3.png" /> shapefile praktek ke 2'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_kelcilame_1.setVisible(true);lyr_bufferingpraktekke2fix_2.setVisible(true);lyr_shapefilepraktekke2_3.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_kelcilame_1,lyr_bufferingpraktekke2fix_2,lyr_shapefilepraktekke2_3];
lyr_kelcilame_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_bufferingpraktekke2fix_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_shapefilepraktekke2_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kelcilame_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_bufferingpraktekke2fix_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_shapefilepraktekke2_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_kelcilame_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_bufferingpraktekke2fix_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_shapefilepraktekke2_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_shapefilepraktekke2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});