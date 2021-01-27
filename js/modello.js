var model;
function aggiungiModello3(materiale){
    
  var loader = new THREE.GLTFLoader();
  loader.useIndices = true;
    loader.load( "modello_3d/vespa.gltf", function ( model ) {
      cerchione_ant = model.scene.children[4];
                scocca = model.scene.children[9];
                borse_lat = model.scene.children[14];
                cerchione_post = model.scene.children[20];
                
                model2  = model.scene;
                scene.add(model2);
                
                scocca.traverse(o => {
                    if (o.isMesh) {
                    o.castShadow = true;
                    o.receiveShadow = true;
                    o.material = materiale; // Add this line
                    }
                });
                borse_lat.traverse(o => {
                    if (o.isMesh) {
                    o.castShadow = true;
                    o.receiveShadow = true;
                    o.material = materiale; // Add this line
                    }
                });
             
    } );

   
}

