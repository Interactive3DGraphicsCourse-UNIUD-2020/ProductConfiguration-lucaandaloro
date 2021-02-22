			//Recupero gli Shader

			vs = document.getElementById("vertex_glossy").textContent;
			fs = document.getElementById("fragment_glossy").textContent;
			vs_color = document.getElementById("vertex_color").textContent;
			fs_color = document.getElementById("fragment_color").textContent;
			vs_textures = document.getElementById("vertex_textures").textContent;
			fs_textures = document.getElementById("fragment_textures").textContent;	
			vs_irradiance = document.getElementById("vertex_irradiance").textContent;
			fs_irradiance = document.getElementById("fragment_irradiance").textContent;	
			
			var renderer = new THREE.WebGLRenderer( { antialias: true } );
			var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
			var controls = new THREE.OrbitControls( camera, renderer.domElement );
			var scene = new THREE.Scene();
			var materiale = "colore";
			var studio = true;
			var prezzo = 1300;
			var width = window.innerWidth-500;
			var height = window.innerHeight -200;
			
			
			 
	
			// Luci

			var lightMesh = new THREE.Mesh( new THREE.SphereGeometry( 1, 16, 16),
			new THREE.MeshBasicMaterial ({color: 0xffff00, wireframe:true}));
			lightMesh.position.set( 7.0, 7.0, 7.0 );

			var light = new THREE.SpotLight(0xffffff, 0.8, 100, Math.PI / 2, 0.2, 2);
			light.position.set(0.0, 25.0, -10.0);
		
			var light1 = new THREE.SpotLight(0xd1e264, 0.8, 100, Math.PI / 3, 1, 8);
			light1.position.set(22.0, 19.0, -11.0);
			
			var light2 = new THREE.SpotLight(0x0f4c81, 0.8, 100, Math.PI / 3, 0.9, 6);
			light2.position.set(-28.0, 15.0, 3.0);
			
			var bool = true;
			var stats = new Stats();

			function init() {
				
				
				renderer.setClearColor( 0xf0f0f0 );

				camera.position.set( 6, 5, 6 );
				camera.up = new THREE.Vector3(0,1,0);
				camera.lookAt(new THREE.Vector3(70,20,0));
				
		
				scene.add( camera );
				//scene.add(lightMesh);
				scene.add(light);
				scene.add(light1);
				scene.add(light2);
				 renderer.shadowMap.enabled = true;
				// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
				 light.castShadow = true;
				 light1.castShadow = true;
				 light2.castShadow = true;
		   
				 light.shadow.mapSize.width = 1024;
				 light.shadow.mapSize.height = 1024;
				 light1.shadow.mapSize.width = 1024;
				 light1.shadow.mapSize.height = 1024;
				 light2.shadow.mapSize.width = 1024;
				 light2.shadow.mapSize.height = 1024;

				

				// Richiamo funzioni per setup base
				if(bool){
					caricaModello(getMateriale("color"), getMateriale("glossy"), getMateriale("sella"));
					cambiaAmbiente("studio");
					bool = false;
				}
				
				if(ambiente != null){
					ambiente.minFilter = THREE.LinearMipMapLinearFilter;
				}
				

				document.body.appendChild( renderer.domElement );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( width, height );

				controls.minDistance = 1;
				controls.maxDistance = 30;
				controls.enablePan = false;
				controls.maxPolarAngle = 1.50;
				controls.update();

				window.addEventListener( 'resize', onResize, false );

				stats.domElement.style.position = 'absolute';
				stats.domElement.style.top = '0px';
				document.body.appendChild( stats.domElement );
				var material_glossy = getMateriale("glossy");

				material_glossy.needsUpdate = true;



			}

			function onResize() {
				renderer.setSize( width, height  );
				camera.aspect = ( window.innerWidth / window.innerHeight );
				camera.updateProjectionMatrix();
			}

			function update() {
				requestAnimationFrame( update );
				stats.update();
				updateUniformsGlossy();
				updateUniformsTexturesSella();
				updateUniformsTexturesManopola();
				render();
			}

			function render() {
				renderer.render( scene, camera );

			}
		

			function updateUniformsGlossy() {
				uniforms_glossy.envMap.value = ambiente;
			}
	

			function updateUniformsTexturesSella() {

				uniforms_textures_sella.textureRepeat.value = new THREE.Vector2( repeatS_sella, repeatT_sella);
				uniforms_textures_sella.diffuseMap.value = diffuseMapSella;
				uniforms_textures_sella.specularMap.value = specularMapSella;
				uniforms_textures_sella.roughnessMap.value = roughnessMapSella;
				uniforms_textures_sella.normalMap.value = normalMapSella;
			}

			function updateUniformsTexturesManopola() {

				uniforms_textures_manopola.textureRepeat.value = new THREE.Vector2( repeatS_manopola, repeatT_manopola);
				uniforms_textures_manopola.diffuseMap.value = diffuseMapManopola;
				uniforms_textures_manopola.specularMap.value = specularMapManopola;
				uniforms_textures_manopola.roughnessMap.value = roughnessMapManopola;
				uniforms_textures_manopola.normalMap.value = normalMapManopola;
			}

			
			init();
			
			update();
			render();
