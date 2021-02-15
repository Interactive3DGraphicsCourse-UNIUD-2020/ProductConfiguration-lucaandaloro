function cambiaAmbiente(tipo){
	switch(tipo){
		case 'chiesa':
			ambiente = caricaCubeMap("chiesa");
			break;
		case 'colosseo':
			ambiente=caricaCubeMap("colosseo");		
			break;
		case 'studio':
			ambiente = new THREE.Color( 0xeeeeee );
			scene.fog = new THREE.Fog(0xeeeeee, 30, 100);
			// Ground
			var groundMaterial = new THREE.MeshPhongMaterial({
				color: 0xffffff,
				bumpScale:  0.0005,
				shininess: 10,
				specular: 0xffffff,
				side: THREE.FrontSide
			});
			var geometry = new THREE.PlaneBufferGeometry(2000, 2000);
			ground = new THREE.Mesh(geometry, groundMaterial);
			ground.castShadow = false;
			ground.receiveShadow = true;
			ground.rotation.x = -Math.PI/2;;
			scene.add(ground);
		break;
	}
	scene.background = ambiente;
}

function caricaCubeMap(path){
	// load cube map for background
	var loader = new THREE.CubeTextureLoader();
	loader.setPath( 'textures/cubemap/'+path+"/" );

	var textureCube = loader.load( [
			'posx.jpg', 'negx.jpg',
			'posy.jpg', 'negy.jpg',
			'posz.jpg', 'negz.jpg'
		] );
	return textureCube;
}