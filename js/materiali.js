
var ambiente;
// default: white, 1.0 intensity
var lightParameters = {
    red: 1,
    green: 1,
    blue: 1,
    intensity: 1,
}
// Parte dedicata al glossy scocca

var normalMap_casco = null;
var uniforms_glossy = {
    cspec:	{ type: "v3", value: new THREE.Vector3(0.8,0.8,0.8) },
    normalMap:	{ type: "t", value: normalMap_casco},
    normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
    envMap:	{ type: "t", value: ambiente},
    roughness: { type: "f", value: 0.2},
};

// Parte dedicata alla sella

var repeatS_sella = 3;
var repeatT_sella = 3;
var diffuseMapSella = loadTexture( "textures/sella/Leather001_2K_Diffuse.png" );
var specularMapSella = loadTexture( "textures/sella/Leather001_2K_Specular.png" );
var roughnessMapSella = loadTexture( "textures/sella/Leather001_2K_Roughness.png" );
var normalMapSella = loadTexture( "textures/sella/Leather001_2K_Normal.png" );
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

// Parte dedicata alle manopole

var repeatS_manopola = 1;
var repeatT_manopola = 1;
var diffuseMapManopola = loadTexture( "textures/manopole/Tiles072_2K_Diffuse.png" );
var specularMapManopola = loadTexture( "textures/manopole/Tiles072_2K_Specular.png" );
var roughnessMapManopola = loadTexture( "textures/manopole/Tiles072_2K_Roughness.png" );
var normalMapManopola = loadTexture( "textures/manopole/Tiles072_2K_Normal.png" );
var uniforms_textures_manopola = {
        specularMap: { type: "t", value: specularMapManopola},
        diffuseMap:	{ type: "t", value: diffuseMapManopola},
        roughnessMap:	{ type: "t", value: roughnessMapManopola},
        normalMap:	{ type: "t", value: normalMapManopola},
        normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
        pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
        clight:	{ type: "v3", value: new THREE.Vector3() },
        textureRepeat: { type: "v2", value: new THREE.Vector2(2.0,2.0) }
};

function getMateriale(materiale){
    switch(materiale){
        case "vetro":
            var material =  new THREE.MeshPhongMaterial({
                color: 'rgb(249,246,246)',
                shininess: 64,
                specular: new THREE.Color(0.31,0.31,0.31),
                opacity: 0.7,
                transparent: true,
                blendSrc: THREE.SrcAlphaFactor,
                blendDst: THREE.OneMinusSrcAlphaFactor,
                blendEquation: THREE.AddEquation
            });
            break;
        case "vetro_post":
            var material =  new THREE.MeshPhongMaterial({
                color: 'rgb(255,87,87)',
                shininess: 64,
                specular: new THREE.Color(0.31,0.31,0.31),
                opacity: 0.93,
                transparent: true,
                blendSrc: THREE.SrcAlphaFactor,
                blendDst: THREE.OneMinusSrcAlphaFactor,
                blendEquation: THREE.AddEquation
            });
            break;
       
        case "gomma":
            var material =  new THREE.MeshPhongMaterial({
                color: 'rgb(38, 38, 38)',
                side: THREE.DoubleSide
            });
            break;
            
        case "ruggine":
            var diffuseMap = loadTexture( "textures/scocca/Metal022_4K_Diffuse.jpg" );
			var specularMap = loadTexture( "textures/scocca/Metal022_4K_Specular.png" );
			var roughnessMap = loadTexture( "textures/scocca/Metal022_4K_Roughness.jpg" );
			var normalMap = loadTexture( "textures/scocca/Metal022_4K_Normal.jpg" );
            var uniforms_textures = {
				specularMap: { type: "t", value: specularMap},
				diffuseMap:	{ type: "t", value: diffuseMap},
				roughnessMap:	{ type: "t", value: roughnessMap},
				normalMap:	{ type: "t", value: normalMap},
				normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
				pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
				clight:	{ type: "v3", value: new THREE.Vector3() },
				textureRepeat: { type: "v2", value: new THREE.Vector2(2.0,2.0) }
			};
            uniforms_textures.pointLightPosition.value = new THREE.Vector3(lightMesh.position.x, lightMesh.position.y, lightMesh.position.z);
            uniforms_textures.clight.value = new THREE.Vector3(lightParameters.red * lightParameters.intensity, lightParameters.green * lightParameters.intensity, lightParameters.blue * lightParameters.intensity);
            var material = new THREE.ShaderMaterial({ uniforms: uniforms_textures, vertexShader: vs_textures, fragmentShader: fs_textures });
            break;
        
        case "glossy":
            
            materialExtensions = {
				shaderTextureLOD: true 
			};
            var material = new THREE.ShaderMaterial({ uniforms: uniforms_glossy, vertexShader: vs, fragmentShader: fs, extensions: materialExtensions });
            break;

        
        
        case "color":
            var uniforms_color = {
                cspec:	{ type: "v3", value: new THREE.Vector3(1.53, 2.04, 2.5) },
                roughness: {type: "f", value: 0.4},
                pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
                clight:	{ type: "v3", value: new THREE.Vector3() },
            };
            uniforms_color.pointLightPosition.value = new THREE.Vector3(lightMesh.position.x, lightMesh.position.y, lightMesh.position.z);
            uniforms_color.clight.value = new THREE.Vector3(lightParameters.red * lightParameters.intensity,lightParameters.green * lightParameters.intensity, lightParameters.blue * lightParameters.intensity);
            var material = new THREE.ShaderMaterial({ uniforms: uniforms_color, vertexShader: vs_color, fragmentShader: fs_color });
            break;

        case "sella":
            uniforms_textures_sella.pointLightPosition.value = new THREE.Vector3(lightMesh.position.x, lightMesh.position.y, lightMesh.position.z);
            uniforms_textures_sella.clight.value = new THREE.Vector3(lightParameters.red * lightParameters.intensity, lightParameters.green * lightParameters.intensity, lightParameters.blue * lightParameters.intensity);
            var material = new THREE.ShaderMaterial({ uniforms: uniforms_textures_sella, vertexShader: vs_textures, fragmentShader: fs_textures });
            break;

        case "pedali":
            var diffuseMap = loadTexture( "textures/pedali/Plastic004_1K_Diffuse.png" );
            var specularMap = loadTexture( "textures/pedali/Plastic004_1K_Specular.png" );
            var roughnessMap = loadTexture( "textures/pedali/Plastic004_1K_Roughness.png" );
            var normalMap = loadTexture( "textures/pedali/Plastic004_1K_Normal.png" );
            var uniforms_textures = {
                    specularMap: { type: "t", value: specularMap},
                    diffuseMap:	{ type: "t", value: diffuseMap},
                    roughnessMap:	{ type: "t", value: roughnessMap},
                    normalMap:	{ type: "t", value: normalMap},
                    normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
                    pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
                    clight:	{ type: "v3", value: new THREE.Vector3() },
                    textureRepeat: { type: "v2", value: new THREE.Vector2(2.0,2.0) }
            };
            uniforms_textures.pointLightPosition.value = new THREE.Vector3(lightMesh.position.x, lightMesh.position.y, lightMesh.position.z);
            uniforms_textures.clight.value = new THREE.Vector3(lightParameters.red * lightParameters.intensity, lightParameters.green * lightParameters.intensity, lightParameters.blue * lightParameters.intensity);
            var material = new THREE.ShaderMaterial({ uniforms: uniforms_textures, vertexShader: vs_textures, fragmentShader: fs_textures });
            break;

        case "manopola":
            
                uniforms_textures_manopola.pointLightPosition.value = new THREE.Vector3(lightMesh.position.x, lightMesh.position.y, lightMesh.position.z);
                uniforms_textures_manopola.clight.value = new THREE.Vector3(lightParameters.red * lightParameters.intensity, lightParameters.green * lightParameters.intensity, lightParameters.blue * lightParameters.intensity);
                var material = new THREE.ShaderMaterial({ uniforms: uniforms_textures_manopola, vertexShader: vs_textures, fragmentShader: fs_textures });
                break;
    }
    return material;
}

function loadTexture(file) {
    var texture = new THREE.TextureLoader().load( file , function ( texture ) {

        texture.minFilter = THREE.LinearMipMapLinearFilter;
        texture.anisotropy = renderer.getMaxAnisotropy();
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
         texture.offset.set( 0, 0 );
        texture.needsUpdate = true;
        render();
    } )
    return texture;
}
