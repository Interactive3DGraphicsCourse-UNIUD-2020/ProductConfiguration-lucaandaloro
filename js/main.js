			var renderer = new THREE.WebGLRenderer( { antialias: true } );
			var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 1000 );
			var controls = new THREE.OrbitControls( camera, renderer.domElement );
			var scene = new THREE.Scene();
			var ambiente;

			var textureParameters = {
				normalScale: 0.0,
				roughness: 0.3,
			}

			var textureParameterss = {
				material: "Wood_StaggeredFloorPlanks",
				repeatS: 1.0,
				repeatT: 1.0,
			}

			//Recupero gli Shader

			vs = document.getElementById("vertex_glossy").textContent;
			fs = document.getElementById("fragment_glossy").textContent;
			vs_color = document.getElementById("vertex_color").textContent;
			fs_color = document.getElementById("fragment_color").textContent;
			vs_textures = document.getElementById("vertex_textures").textContent;
			fs_textures = document.getElementById("fragment_textures").textContent;	

			//var normalMap_casco = loadTexture( "textures/normal.jpg" );
			var normalMap_casco = null;
			cambiaAmbiente("colosseo");

			ambiente.minFilter = THREE.LinearMipMapLinearFilter;

			// default: white, 1.0 intensity
			var lightParameters = {
				red: 1,
				green: 1,
				blue: 1,
				intensity: 1,
			}

			
			var cspec = {
				red: 1.53,
				green: 2.04,
				blue: 2.5,
				roughness: 0.1
			}

			var uniforms_color = {
						cspec:	{ type: "v3", value: new THREE.Vector3(1.0, 0.71, 0.29) },
						roughness: {type: "f", value: 0.1},
						pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
						clight:	{ type: "v3", value: new THREE.Vector3() },
			};

			var uniforms = {
				    cspec:	{ type: "v3", value: new THREE.Vector3(0.8,0.8,0.8) },
				    normalMap:	{ type: "t", value: normalMap_casco},
					normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
					envMap:	{ type: "t", value: ambiente},
					roughness: { type: "f", value: 0.5},
			};
			var uniforms_textures = {
				specularMap: { type: "t", value: specularMap},
				diffuseMap:	{ type: "t", value: diffuseMap},
				roughnessMap:	{ type: "t", value: roughnessMap},
				normalMap:	{ type: "t", value: normalMap},
				normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
				pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
				clight:	{ type: "v3", value: new THREE.Vector3() },
				textureRepeat: { type: "v2", value: new THREE.Vector2(50,50) }
			};

			var uniforms_textures_sella = {
				specularMap: { type: "t", value: specularMapSella},
				diffuseMap:	{ type: "t", value: diffuseMapSella},
				roughnessMap:	{ type: "t", value: roughnessMapSella},
				normalMap:	{ type: "t", value: normalMapSella},
				normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
				pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
				clight:	{ type: "v3", value: new THREE.Vector3() },
				textureRepeat: { type: "v2", value: new THREE.Vector2(repeatS_sella,repeatT_sella) }
			};
			
			materialExtensions = {
				shaderTextureLOD: true // set to use shader texture LOD
			};
			var lightMesh = new THREE.Mesh( new THREE.SphereGeometry( 1, 16, 16),
			new THREE.MeshBasicMaterial ({color: 0xffff00, wireframe:true}));
			lightMesh.position.set( 7.0, 7.0, 7.0 );
			uniforms_color.pointLightPosition.value = new THREE.Vector3(lightMesh.position.x, lightMesh.position.y, lightMesh.position.z);
			uniforms_textures.pointLightPosition.value = new THREE.Vector3(lightMesh.position.x, lightMesh.position.y, lightMesh.position.z);
			uniforms_textures_sella.pointLightPosition.value = new THREE.Vector3(lightMesh.position.x, lightMesh.position.y, lightMesh.position.z);

			var diffuseMap = loadTexture( "textures/scocca/Metal022_4K_Diffuse.jpg" );
			var specularMap = loadTexture( "textures/scocca/Metal022_4K_Specular.png" );
			var roughnessMap = loadTexture( "textures/scocca/Metal022_4K_Roughness.jpg" );
			var normalMap = loadTexture( "textures/scocca/Metal022_4K_Normal.jpg" );

			var diffuseMapSella = loadTexture( "textures/sella/Leather001_2K_Diffuse.png" );
			var specularMapSella = loadTexture( "textures/sella/Leather001_2K_Specular.png" );
			var roughnessMapSella = loadTexture( "textures/sella/Leather001_2K_Roughness.png" );
			var normalMapSella = loadTexture( "textures/sella/Leather001_2K_Normal.png" );
			var repeatS_sella = 3;
			var repeatT_sella = 3;
			
			

			var material_color = new THREE.ShaderMaterial({ uniforms: uniforms_color, vertexShader: vs_color, fragmentShader: fs_color });

			var material_glossy = new THREE.ShaderMaterial({ uniforms: uniforms, vertexShader: vs, fragmentShader: fs, extensions: materialExtensions });
			 
			var material_textures = new THREE.ShaderMaterial({ uniforms: uniforms_textures, vertexShader: vs_textures, fragmentShader: fs_textures });
			var material_textures_sella = new THREE.ShaderMaterial({ uniforms: uniforms_textures_sella, vertexShader: vs_textures, fragmentShader: fs_textures });

			

			

		

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
				plane.position.y = 0;
				scene.add( plane );
			 
				plane.receiveShadow = true;
				aggiungiModello(material_color, material_glossy, material_textures_sella);

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
				updateUniformsColor();
				updateUniformsTextures();
				updateUniformsTexturesSella();
				renderer.render( scene, camera );

			}


		

			function updateUniforms() {
					uniforms.normalScale.value = new THREE.Vector2( textureParameters.normalScale, textureParameters.normalScale );
					uniforms.roughness.value = textureParameters.roughness;
					uniforms.envMap.value = ambiente;
			}
			function updateUniformsColor(){
				uniforms_color.cspec.value = new THREE.Vector3(cspec.red,cspec.green,cspec.blue);
				uniforms_color.roughness.value = 0.4;
				uniforms_color.clight.value = new THREE.Vector3(
					lightParameters.red * lightParameters.intensity,
					lightParameters.green * lightParameters.intensity,
					lightParameters.blue * lightParameters.intensity);

			}
			function updateUniformsTextures() {

				uniforms_textures.clight.value = new THREE.Vector3(
				lightParameters.red * lightParameters.intensity,
				lightParameters.green * lightParameters.intensity,
				lightParameters.blue * lightParameters.intensity);
				uniforms_textures.textureRepeat.value = new THREE.Vector2( textureParameterss.repeatS, textureParameterss.repeatT);
				uniforms_textures.diffuseMap.value = diffuseMap;
				uniforms_textures.specularMap.value = specularMap;
				uniforms_textures.roughnessMap.value = roughnessMap;
				uniforms_textures.normalMap.value = normalMap;
			}

			function updateUniformsTexturesSella() {

				uniforms_textures_sella.clight.value = new THREE.Vector3(
				lightParameters.red * lightParameters.intensity,
				lightParameters.green * lightParameters.intensity,
				lightParameters.blue * lightParameters.intensity);
				uniforms_textures_sella.textureRepeat.value = new THREE.Vector2( repeatS_sella, repeatT_sella);
				uniforms_textures_sella.diffuseMap.value = diffuseMapSella;
				uniforms_textures_sella.specularMap.value = specularMapSella;
				uniforms_textures_sella.roughnessMap.value = roughnessMapSella;
				uniforms_textures_sella.normalMap.value = normalMapSella;
			}

			init();
			
			update();
			render();
