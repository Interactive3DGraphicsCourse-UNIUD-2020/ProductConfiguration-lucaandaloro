function cambiaAmbiente(tipo){
	switch(tipo){
		case 'chiesa':
			ambiente = caricaCubeMap("chiesa");
			break;
		case 'colosseo':
			ambiente=caricaCubeMap("colosseo");		
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