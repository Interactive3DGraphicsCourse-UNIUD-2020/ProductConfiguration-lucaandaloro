
		
		var scene, camera, renderer, controls, stats, sole;
		var mulino = false;
        var cascata = false;
        var ponte = false;
        var albero = false;
		var windowWidth = window.innerWidth - 550;
		var windowHeight = window.innerHeight - 350;
		function Start() {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			renderer = new THREE.WebGLRenderer( {antialias: true} );
			renderer.setSize(windowWidth , windowHeight );
			renderer.setClearColor( 0xf0f0f0 );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.gammaInput = true;
			renderer.gammaOutput = true;
			renderer.shadowMap.enabled = true;
			document.body.appendChild( renderer.domElement );
			
			camera.position.set(0, 10, -4 );
			
			hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
			hemiLight.color.setHSL( 0.6, 1, 0.6 );
			hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
			hemiLight.position.set( 0, 500, 0 );
			scene.add( hemiLight );

			dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
			dirLight.color.setHSL( 0.1, 1, 0.95 );
			dirLight.position.set(0, 20, 0);
			dirLight.position.multiplyScalar( 50 );
			scene.add( dirLight );
			dirLight.castShadow = true;
			dirLight.shadow.mapSize.width = 128;
			dirLight.shadow.mapSize.height = 128;


			// GROUND
			var groundGeo = new THREE.PlaneBufferGeometry( 1000, 1000 );
			var groundMat = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x050505 } );
			groundMat.color.setHSL( 0.095, 1, 0.75 );
			var ground = new THREE.Mesh( groundGeo, groundMat );
			ground.position.y = -0.5;
			ground.rotation.x = -Math.PI/2;
			scene.add( ground );
			ground.receiveShadow = true;
			
			stats = new Stats();
			stats.domElement.style.position = 'absolute';
			stats.domElement.style.top = '0px';
			document.body.appendChild( stats.domElement );
			
			
			controls = new THREE.OrbitControls( camera );
			controls.addEventListener( 'change', Render );
			const geometry = new THREE.BoxGeometry( 10, 1, 1 );
			const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );


         
			
	
			
		}
		
		function Update() {
			requestAnimationFrame( Update );
			controls.update();  
			stats.update();
		
			Render();
			
		}
		function Render(){
			renderer.render(scene, camera);
		}
		
		function Animazioni() {
			
		}

		
		
		Start();
		Update();

		
	