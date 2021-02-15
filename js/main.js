			//Recupero gli Shader

			vs = document.getElementById("vertex_glossy").textContent;
			fs = document.getElementById("fragment_glossy").textContent;
			vs_color = document.getElementById("vertex_color").textContent;
			fs_color = document.getElementById("fragment_color").textContent;
			vs_textures = document.getElementById("vertex_textures").textContent;
			fs_textures = document.getElementById("fragment_textures").textContent;	
			
			
			var renderer = new THREE.WebGLRenderer( { antialias: true } );
			var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 1000 );
			var controls = new THREE.OrbitControls( camera, renderer.domElement );
			var scene = new THREE.Scene();
			

			// default: white, 1.0 intensity
			var lightParameters = {
				red: 1,
				green: 1,
				blue: 1,
				intensity: 1,
			}

			var lightMesh = new THREE.Mesh( new THREE.SphereGeometry( 1, 16, 16),
			new THREE.MeshBasicMaterial ({color: 0xffff00, wireframe:true}));
			lightMesh.position.set( 7.0, 7.0, 7.0 );


			var bool = true;
			var stats = new Stats();

			function init() {
				
				var width = window.innerWidth-500;
				renderer.setClearColor( 0xf0f0f0 );

				camera.position.set( 10, 7, 10 );
				scene.add( camera );
				//scene.add(lightMesh);

				// Ground

				var plane = new THREE.Mesh(
					new THREE.PlaneBufferGeometry( 40, 40 ),
					new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
				);
				plane.rotation.x = -Math.PI/2;
				
				scene.add( plane );
			 
				plane.receiveShadow = true;

				// Richiamo funzioni per setup base
				if(bool){
					caricaModello(getMateriale("color"), getMateriale("glossy"), getMateriale("sella"));
					cambiaAmbiente("colosseo");
					bool = false;
				}
				

				ambiente.minFilter = THREE.LinearMipMapLinearFilter;

				// Lights

				scene.add( new THREE.AmbientLight( 0x777777 ) );

				  

				document.body.appendChild( renderer.domElement );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( width, window.innerHeight );

				controls.minDistance = 1;
				controls.maxDistance = 100;
				controls.enablePan = false;
				controls.update();

				window.addEventListener( 'resize', onResize, false );

				stats.domElement.style.position = 'absolute';
				stats.domElement.style.top = '0px';
				document.body.appendChild( stats.domElement );
				var material_glossy = getMateriale("glossy");

				material_glossy.needsUpdate = true;



			}

			function onResize() {
				renderer.setSize( window.innerWidth, window.innerHeight );
				camera.aspect = ( window.innerWidth / window.innerHeight );
				camera.updateProjectionMatrix();
			}

			function update() {
				requestAnimationFrame( update );
				stats.update();
				render();
			}

			function render() {
				updateUniforms();
				
				updateUniformsTexturesSella();
				renderer.render( scene, camera );

			}


		

			function updateUniforms() {
				uniforms_glossy.envMap.value = ambiente;
			}
	

			function updateUniformsTexturesSella() {

				
				uniforms_textures_sella.textureRepeat.value = new THREE.Vector2( repeatS_sella, repeatT_sella);
				uniforms_textures_sella.diffuseMap.value = diffuseMapSella;
				uniforms_textures_sella.specularMap.value = specularMapSella;
				uniforms_textures_sella.roughnessMap.value = roughnessMapSella;
				uniforms_textures_sella.normalMap.value = normalMapSella;
			}

			init();
			
			update();
			render();
