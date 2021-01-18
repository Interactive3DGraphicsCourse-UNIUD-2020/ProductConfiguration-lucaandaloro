var model;
function aggiungiModello3(){
    const stacy_mtl = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        skinning: true
      });
    let loader = new THREE.GLTFLoader();
    loader.load('modello_3d/vespa.gltf', function(gltf){
    car = gltf.scene.children[4];
    model  = gltf.scene;
    scene.add(model);

    car.traverse(o => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
          o.material = stacy_mtl; // Add this line
        }
       });
    });

   
}