var diffuseMap = loadTexture( "textures/Metal022_4K_Diffuse.jpg" );
var specularMap = loadTexture( "textures/Metal022_4K_Specular.png" );
var roughnessMap = loadTexture( "textures/Metal022_4K_Roughness.jpg" );

vs_textures = document.getElementById("vertex_textures").textContent;
			fs_textures = document.getElementById("fragment_textures").textContent;	

var uniforms_textures = {
    specularMap: { type: "t", value: specularMap},
    diffuseMap:	{ type: "t", value: diffuseMap},
    roughnessMap:	{ type: "t", value: roughnessMap},
    normalMap: {type: "t", value: normalMap_ruggine},
    pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
    clight:	{ type: "v3", value: new THREE.Vector3() },
    textureRepeat: { type: "v2", value: new THREE.Vector2(1,1) }
};

var material_sella = new THREE.ShaderMaterial({ uniforms: uniforms_textures, vertexShader: vs_textures, fragmentShader: fs_textures });


function cambiaMaterialeSella(tipo){
    while(scene.children.length > 0){ 
	    scene.remove(scene.children[0]); 
	}
    switch(tipo){
		case 'azzurro':
            diffuseMap = loadTexture( "textures/Metal022_4K_Diffuse.jpg" );
            specularMap = loadTexture( "textures/Metal022_4K_Specular.png" );
            roughnessMap = loadTexture( "textures/Metal022_4K_Roughness.jpg" );
            var uniforms_textures = {
                specularMap: { type: "t", value: specularMap},
                diffuseMap:	{ type: "t", value: diffuseMap},
                roughnessMap:	{ type: "t", value: roughnessMap},
                normalMap: {type: "t", value: normalMap_ruggine},
                pointLightPosition:	{ type: "v3", value: new THREE.Vector3() },
                clight:	{ type: "v3", value: new THREE.Vector3() },
                textureRepeat: { type: "v2", value: new THREE.Vector2(1,1) }
            };
            var material_sella = new THREE.ShaderMaterial({ uniforms: uniforms_textures, vertexShader: vs_textures, fragmentShader: fs_textures });
			aggiungiModello(material_color, material_glossy, material_sella);
			break;
		case 'cromato':
			aggiungiModello(material_glossy, material_glossy);		
            break;
        case 'ruggine':
            aggiungiModello(material_textures, material_glossy);	
            break;   
	}
}