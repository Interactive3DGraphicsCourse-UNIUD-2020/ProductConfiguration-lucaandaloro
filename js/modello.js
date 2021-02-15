var model;
function aggiungiModello(materiale_scocca, materiale_cerchione, material_sella){
    
  var loader = new THREE.GLTFLoader();
  loader.useIndices = true;
    loader.load( "modello_3d/prova2.gltf", function ( model ) {

      cerchione_ant = model.scene.children[4];
      parafango_ant = model.scene.children[5];
      pneumatico_parafango_ant = model.scene.children[6];
      ammortizzatore_ant = model.scene.children[7];
      logo = model.scene.children[8];
      clacson = model.scene.children[9];
      maschera_ant = model.scene.children[10];
      vetrino_ant = model.scene.children[11];
      munubrio_centrale = model.scene.children[12];
      manubri_laterali = model.scene.children[13];
      scocca = model.scene.children[14];
      pneumatico_scorta = model.scene.children[15];
      bande_pedana = model.scene.children[16];
      freno_posteriore = model.scene.children[17];
      sella = model.scene.children[19];
      borse_lat = model.scene.children[21];
      bande_laterali = model.scene.children[22];
      pedivella_accensione = model.scene.children[23];
      marmitta = model.scene.children[24];
      motore = model.scene.children[25];
      ammortizzatore_posteriore = model.scene.children[26];
      cerchione_post = model.scene.children[27];
      pneumatico_anteriore = model.scene.children[28];
      fanalino_post = model.scene.children[29];
      test = model.scene.children[21];
      
     
    
                
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

            munubrio_centrale.traverse(o => {
              if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
              o.material = materiale_scocca; // Add this line
              }
          });
          parafango_ant.traverse(o => {
            if (o.isMesh) {
            o.castShadow = true;
            o.receiveShadow = true;
            o.material = materiale_scocca; // Add this line
            }
        });
          maschera_ant.traverse(o => {
            if (o.isMesh) {
            o.castShadow = true;
            o.receiveShadow = true;
            o.material = materiale_scocca; // Add this line
            }
           });
           bande_laterali.traverse(o => {
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
        vetrino_ant.traverse(o => {
          if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
          o.material = getMateriale("vetro"); // Add this line
          }
      });
      fanalino_post.traverse(o => {
        if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        o.material = getMateriale("vetro_post"); // Add this line
        }
    });
      clacson.traverse(o => {
        if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        o.material = materiale_cerchione;
        }
    });  
    pneumatico_anteriore.traverse(o => {
      if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
      o.material = getMateriale("gomma");
      }
  });  
  sella.traverse(o => {
    if (o.isMesh) {
    o.castShadow = true;
    o.receiveShadow = true;
    o.material = material_sella;
    }
});  
  
             
    } );

   
}

