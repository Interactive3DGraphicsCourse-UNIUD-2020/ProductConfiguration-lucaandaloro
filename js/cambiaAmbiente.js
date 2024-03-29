function cambiaAmbiente(tipo){
	switch(tipo){
		case 'bosco':
			if(studio){
				scene.remove(scene.getObjectByName("cube"));
				scene.remove(scene.getObjectByName("plane"));
				studio = false;
			}
			ambiente=caricaCubeMap("bosco");
				
			break;
		case 'studio':
			if (materiale == "colore" || materiale == "ruggine"){
				//Creo lo studio
				//Pareti
				var geometry = new THREE.BoxGeometry(200, 200, 200);
				var material = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.BackSide });
				var cube = new THREE.Mesh(geometry, material);
				cube.name = "cube";
				scene.add(cube);

				//Pavimento
				var geo = new THREE.PlaneGeometry(1000, 1000, 100, 100);
				var mat = new THREE.MeshPhongMaterial({ color: 0xffffff });
				var plane = new THREE.Mesh(geo, mat);
				plane.rotateX(- Math.PI / 2);
				scene.add(plane);
				plane.castShadow = false;
				plane.receiveShadow = true;
				plane.name = "plane";
				//ambiente=null
				studio = true;
			}else{
				
				alert("L'ambiente studio non può essere selezionato con il materiale glossy");
			}
			
		break;
		case 'mare':
			ambiente=caricaCubeMap("mare");		
		break;
		case 'garage':
			if(studio){
				scene.remove(scene.getObjectByName("cube"));
				scene.remove(scene.getObjectByName("plane"));
				studio = false;
			}
			ambiente=caricaCubeMap("garage");
			
		break;
		// Ambiente test per posizionare la vespa sul pavimento delle cubemaps
		case "test":
			var geometry = new THREE.BoxGeometry(1000, 1000, 1000);
			var mate = caricaCubeMap2("test");
			var mesh = new THREE.Mesh( geometry, mate );
			mesh.position.set( 0, 90, 0 );
			scene.add(mesh);
			//Pavimento
			var geo = new THREE.PlaneGeometry(100, 100, 100, 100);
			var mat = new THREE.MeshPhongMaterial({ color: 0xffffff });
			var mati = caricaCubeMap3("test");
			var plane = new THREE.Mesh(geo, mati);
			plane.rotateX(- Math.PI / 2);
			scene.add(plane);
			break;

	}
	scene.background = ambiente;
}

function caricaCubeMap(path){
	// load cube map for background
	var loader = new THREE.CubeTextureLoader();
	loader.setPath( 'textures/cubemap/'+path+"/" );
	if(path=="bosco" || path == "garage" || path == "irradiancemap"){
		var textureCube = loader.load( [
			'posx.png', 'negx.png',
			'posy.png', 'negy.png',
			'posz.png', 'negz.png'
		] );
	}else{
		var textureCube = loader.load( [
			'posx.jpg', 'negx.jpg',
			'posy.jpg', 'negy.jpg',
			'posz.jpg', 'negz.jpg'
		] );

	}
	return textureCube;
}

function caricaCubeMap2(path){
	// load cube map for background
	var loader = new THREE.TextureLoader();
	loader.setPath( 'textures/cubemap/'+path+"/" );
		var materialArray = [
			new THREE.MeshBasicMaterial( { map: loader.load('posx.png'),  side: THREE.BackSide } ),
			new THREE.MeshBasicMaterial( { map: loader.load('negx.png'),  side: THREE.BackSide  } ),
			new THREE.MeshBasicMaterial( { map: loader.load('posy.png'),  side: THREE.BackSide  } ),
			new THREE.MeshBasicMaterial( { map: loader.load('negy.png'),  side: THREE.BackSide  } ),
			new THREE.MeshBasicMaterial( { map: loader.load('posz.png'),  side: THREE.BackSide  } ),
			new THREE.MeshBasicMaterial( { map: loader.load('negz.png'),  side: THREE.BackSide  } ),
		];
	
	return materialArray;
}
function caricaCubeMap3(path){
	// load cube map for background
	var loader = new THREE.TextureLoader();
	loader.setPath( 'textures/cubemap/'+path+"/" );
		var material = new THREE.MeshBasicMaterial( { map: loader.load('negy.png') } );
	return material;
}