var model;
function caricaModello(materiale_scocca, materiale_secondario, material_sella){
    
  var loader = new THREE.GLTFLoader();
  loader.useIndices = true;
    loader.load( "modello_3d/vespa.gltf", function ( model ) {

      // Seleziono tutti le parti dell'oggetto 3D
      cerchione_ant = model.scene.children[4];
      parafango_ant = model.scene.children[5];
      pneumatico_parafango_ant = model.scene.children[6];
      ammortizzatore_ant_asta = model.scene.children[7];
      ammortizzatore_ant_molla = model.scene.children[8];
      ammortizzatore_ant_attacco = model.scene.children[9];
      logo = model.scene.children[10];
      clacson = model.scene.children[11];
      maschera_ant = model.scene.children[12];
      vetrino_ant = model.scene.children[13];
      manubrio_destro_ferro = model.scene.children[14];
      manubrio_centrale = model.scene.children[15];
      manopola_destra = model.scene.children[16];
      scocca = model.scene.children[17];
      pneumatico_scorta = model.scene.children[18];
      bande_pedana = model.scene.children[19];
      freno_posteriore = model.scene.children[20];
      sella = model.scene.children[22];
      borse_lat = model.scene.children[24];
      bande_laterali = model.scene.children[25];
      pedivella_accensione = model.scene.children[26];
      marmitta = model.scene.children[27];
      motore = model.scene.children[28];
      ammortizzatore_posteriore = model.scene.children[29];
      cerchione_post = model.scene.children[30];
      pneumatico_anteriore = model.scene.children[31];
      fanalino_post = model.scene.children[32];
      manopola_sinistra = model.scene.children[36];
      leva_freno_sinistro = model.scene.children[37];
      leva_freno_destro = model.scene.children[38];
      manubrio_sinistro_ferro = model.scene.children[39];
      test = model.scene.children[34];
      
     
    
                
      model2  = model.scene;
      model2.castShadow = true;
      model2.receiveShadow = true;
      model2.name = "modello";
      scene.add(model2);

      var leva_mat;
      var cerchio_mat;
      var cornice_mat;
      var clacson_mat;
      if(studio == true){
        leva_mat = getMateriale("irradiance");
        cerchio_mat = getMateriale("irradiance");
        cornice_mat = getMateriale("irradiance");
        clacson_mat = getMateriale("irradiance");
      }else{
        leva_mat = materiale_secondario;
        cerchio_mat = materiale_secondario;
        cornice_mat = materiale_secondario;
        clacson_mat = materiale_secondario;
      }
     
                
                scocca.traverse(o => {
                    if (o.isMesh) {
                    o.castShadow = true;
                    o.receiveShadow = true;
                    o.material = materiale_scocca; // Add this line
                    }
                });
                manubrio_sinistro_ferro.traverse(o => {
                  if (o.isMesh) {
                  o.castShadow = true;
                  o.receiveShadow = true;
                  o.material = materiale_scocca; // Add this line
                  }
              });
              leva_freno_destro.traverse(o => {
                if (o.isMesh) {
                o.castShadow = true;
                o.receiveShadow = true;
                o.material = leva_mat; // Add this line
                }
            });
            leva_freno_sinistro.traverse(o => {
              if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
              o.material = leva_mat; // Add this line
              }
          });
              manubrio_destro_ferro.traverse(o => {
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
                o.material = cerchio_mat; // Add this line
                }
            });

            manubrio_centrale.traverse(o => {
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
              o.material = cornice_mat; // Add this line
              }
          });
          cerchione_ant.traverse(o => {
            if (o.isMesh) {
            o.castShadow = true;
            o.receiveShadow = true;
            o.material = cerchio_mat; // Add this line
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
        o.material = clacson_mat;
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
pedivella_accensione.traverse(o => {
  if (o.isMesh) {
  o.castShadow = true;
  o.receiveShadow = true;
  o.material = getMateriale("pedali");
  }
});
freno_posteriore.traverse(o => {
  if (o.isMesh) {
  o.castShadow = true;
  o.receiveShadow = true;
  o.material = getMateriale("pedali");
  }
});
manopola_sinistra.traverse(o => {
  if (o.isMesh) {
  o.castShadow = true;
  o.receiveShadow = true;
  o.material = getMateriale("manopola");
  }
}); 
manopola_destra.traverse(o => {
  if (o.isMesh) {
  o.castShadow = true;
  o.receiveShadow = true;
  o.material = getMateriale("manopola");
  }
}); 
             
    } );

   
}

