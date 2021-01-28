var model;
function aggiungiModello3(materiale_scocca, materiale_cerchione){
    
  var loader = new THREE.GLTFLoader();
  loader.useIndices = true;
    loader.load( "modello_3d/vespa.gltf", function ( model ) {
      cerchione_ant = model.scene.children[4];
      pneumatico = model.scene.children[5];
      ammortizzatore_anteriore = model.scene.children[6];
      maschera_anteriore = model.scene.children[7];
      manubrio = model.scene.children[8];
      scocca = model.scene.children[9];
      bande_pedana = model.scene.children[10];
      freno_posteriore = model.scene.children[11];
      borse_lat = model.scene.children[14];
      bande_borse = model.scene.children[15];
      marmitta = model.scene.children[17];
      motore = model.scene.children[18];
      ammortizzatore_posteriore = model.scene.children[19];
      cerchione_post = model.scene.children[20];
      pneumatico_anteriore = model.scene.children[21];
      test = model.scene.children[0];
      
                
      model2  = model.scene;
      scene.add(model2);
     
                
                scocca.traverse(o => {
                    if (o.isMesh) {
                    o.castShadow = true;
                    o.receiveShadow = true;
                    o.material = materiale_scocca; // Add this line
                    }
                });
                
                borse_lat.traverse(o => {
                  if (o.isMesh) {
                  o.castShadow = true;
                  o.receiveShadow = true;
                  o.material = materiale_scocca; // Add this line
                  }
              });

              cerchione_post.traverse(o => {
                if (o.isMesh) {
                o.castShadow = true;
                o.receiveShadow = true;
                o.material = materiale_cerchione; // Add this line
                }
            });

            manubrio.traverse(o => {
              if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
              o.material = materiale_cerchione; // Add this line
              }
          });

          cerchione_ant.traverse(o => {
            if (o.isMesh) {
            o.castShadow = true;
            o.receiveShadow = true;
            o.material = materiale_cerchione; // Add this line
            }
        });
             
    } );

   
}

