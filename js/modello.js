function aggiungiModello(){
    // instantiate a loader
    var loader = new THREE.OBJLoader();
    // load a resource
    loader.load(
        // resource URL
        'modello_3d/test4.obj',
        // Function when resource is loaded
        function ( object ) {
            scene.add( object );
        }
    );
}

function aggiungiModello2(){
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setBaseUrl( 'modello_3d/' );
    mtlLoader.setPath( 'modello_3d/' );
    var url = "test4.mtl";
    mtlLoader.load( url, function( materials ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'modello_3d/' );
        objLoader.load( 'test4.obj', function ( object ) {

            //object.position.y = - 95;
            scene.add( object );

        }, onProgress, onError );

    });
}