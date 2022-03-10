require([
				"esri/WebScene",
				"esri/views/SceneView",
				"esri/Camera",
				"esri/widgets/Home",
				"dojo/domReady!",
  "esri/widgets/Legend",
  "esri/widgets/LayerList",
			], function(WebScene, SceneView, Camera, Legend,LayerList, Home) {


					/*var map = new Map({
						basemap: "streets",
						ground: "world-elevation"
					});*/
					var scene = new WebScene({
						portalItem:{
						 id:"8046207c1c214b5587230f5e5f8efc77" 
						}
					});

					var camera = new Camera({
						position: [
							 -71.0589,
							42.3601,
							5000// elevation in meters
						],
						tilt:0,
						heading: 0
					})				

					var camera1 = new Camera({
						position: [
							 -71.0940,
							42.3394,
							2500// elevation in meters
						],
						tilt:35,
						heading: 0
					})

					var camera2 = new Camera({
						position: [
							 -71.0711,
							42.3675,
							1500// elevation in meters
						],
						tilt: 65,
						heading: 0
					});

					var camera3 = new Camera({
						position: [
							-70.96285593287432,
							42.33616242368304,
							500
						],
						tilt: 75,
						heading: 285
					})

					var view = new SceneView({
						container: "viewDiv",
						map: scene,
						viewingMode:"global",
						camera: camera,
						environment: {
								lighting: {
									date: new Date(),
									directShadowsEnabled: true,
								
									cameraTrackingEnabled: false
								}
						},
				});

				var homeBtn = new Home({
						view: view
					});

					
				view.ui.add(homeBtn, "top-left");

				[art, science, ocean].forEach(function(button) {
					button.style.display = 'flex';
					view.ui.add(button, 'top-right');
				});

				art.addEventListener('click', function() {
					// reuse the default camera position already established in the homeBtn
					view.goTo({
						target:camera2
					});
				});

				science.addEventListener('click', function() {
					// reuse the default camera position already established in the homeBtn
					view.goTo({
						target:camera1
					});
				});

				ocean.addEventListener('click',function(){
					view.goTo({
						target:camera3
					});
				});
  view.when(function() {
        var featureLayer = scene.layers.getItemAt(1);
var layerList = new LayerList({
  view: view
});
        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: "Major project buildings"
            
          }]
          
        });
      
   view.ui.add(legend,layerList, "bottom-right");
   });
			});
