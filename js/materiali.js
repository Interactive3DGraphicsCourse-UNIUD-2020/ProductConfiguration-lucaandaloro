
var ambiente;
// default: white, 1.0 intensity
var lightParameters = {
    red: 1,
    green: 1,
    blue: 1,
    intensity: 1,
}

var ambientLightParameters = {
    red: 0.2,
    green: 0.2,
    blue: 0.2,
    intensity: 0.0,
}

// Parte dedicata al glossy scocca

var uniforms_glossy = {
    cspec:	{ type: "v3", value: new THREE.Vector3(0.8,0.8,0.8) },
    envMap:	{ type: "t", value: ambiente},
    
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

// Parte dedicata alla ruggine

var diffuseMapScocca ;
var specularMapScocca;
var roughnessMapScocca;
var normalMapScocca;
var aoMapScocca;           
var uniforms_textures_scocca = {
            specularMap: { type: "t", value: specularMapScocca },
            diffuseMap:	{ type: "t", value:   diffuseMapScocca},
            roughnessMap:	{ type: "t", value: roughnessMapScocca },
            normalMap:	{ type: "t", value: normalMapScocca },
            aoMap:	{ type: "t", value: aoMapScocca },
            normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
            pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
            ambientLight:	{ type: "v3", value: new THREE.Vector3() },
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
            
             diffuseMapScocca = loadTexture( "textures/scocca/diffuse.jpg" );
             specularMapScocca  = loadTexture( "textures/scocca/Metal022_4K_Specular.jpg" );
             roughnessMapScocca  = loadTexture( "textures/scocca/Metal022_4K_Roughness.jpg" );
             normalMapScocca  = loadTexture( "textures/scocca/Metal022_4K_Normal.jpg" );
             aoMapScocca  = loadTexture( "textures/scocca/Metal022_4K_Ambient_occlusion.jpg" );
             uniforms_textures_scocca.diffuseMap.value = diffuseMapScocca;
             uniforms_textures_scocca.specularMap.value = specularMapScocca ;
             uniforms_textures_scocca.roughnessMap.value = roughnessMapScocca;
             uniforms_textures_scocca.normalMap.value = normalMapScocca;     
             uniforms_textures_scocca.aoMap.value = aoMapScocca;  
             material = new THREE.ShaderMaterial({ uniforms: uniforms_textures_scocca, vertexShader: vs_textures_ao, fragmentShader: fs_textures_ao });
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
                pointLightPosition2:	{ type: "v3", value: new THREE.Vector3() },
                clight:	{ type: "v3", value: new THREE.Vector3() },
            };
            uniforms_color.pointLightPosition.value = new THREE.Vector3(lightMesh.position.x, lightMesh.position.y, lightMesh.position.z);
            uniforms_color.pointLightPosition2.value = new THREE.Vector3(light.position.x, light.position.y, light.position.z);
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
            var normalMapPedali = loadTexture( "textures/pedali/Plastic004_1K_Normal.png" );
            var uniforms_textures = {
                    specularMap: { type: "t", value: specularMap},
                    diffuseMap:	{ type: "t", value: diffuseMap},
                    roughnessMap:	{ type: "t", value: roughnessMap},
                    normalMap:	{ type: "t", value: normalMapPedali},
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

        case "irradiance":
            var irradianceMap = caricaCubeMap("irradiancemap");
            var uniforms_irradiance = {
                    cdiff:	{ type: "v3", value: new THREE.Vector3(0.8,0.8,0.8) },
                    normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
                    irradianceMap:	{ type: "t", value: irradianceMap},
                };
            var material = new THREE.ShaderMaterial({ uniforms: uniforms_irradiance, vertexShader: vs_irradiance, fragmentShader: fs_irradiance });
            // scene.background = irradianceMap; // da attivare per test
            break;
    }
    return material;
}

function loadTexture(file) {
    var texture = new THREE.TextureLoader().load( file , function ( texture ) {

        texture.minFilter = THREE.LinearMipMapLinearFilter;
        texture.magFilter = THREE.LinearFilter; // Usato per test
        texture.anisotropy = renderer.getMaxAnisotropy();
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.needsUpdate = true;
        render();
    } )
    return texture;
}
