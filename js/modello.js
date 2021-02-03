var model;
function aggiungiModello3(materiale_scocca, materiale_cerchione){
    
  var loader = new THREE.GLTFLoader();
  loader.useIndices = true;
    loader.load( "modello_3d/modello_vespa_piaggio.gltf", function ( model ) {

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
      borse_lat = model.scene.children[20];
      bande_laterali = model.scene.children[21];
      pedivella_accensione = model.scene.children[22];
      marmitta = model.scene.children[23];
      motore = model.scene.children[24];
      ammortizzatore_posteriore = model.scene.children[25];
      cerchione_post = model.scene.children[26];
      pneumatico_anteriore = model.scene.children[27];
      fanalino_post = model.scene.children[28];
      //test = model.scene.children[4];
      
     
    
                
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
             
    } );

   
}

