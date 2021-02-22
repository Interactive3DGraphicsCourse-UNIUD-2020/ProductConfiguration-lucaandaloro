function cambiaMaterialeSella(tipo){
	diffuseMapSella = loadTexture( "textures/sella/" + tipo + "_Diffuse.png" );
	specularMapSella = loadTexture( "textures/sella/" + tipo + "_Specular.png" );
	roughnessMapSella = loadTexture( "textures/sella/" + tipo + "_Roughness.png" );
	normalMapSella = loadTexture( "textures/sella/" + tipo+ "_Normal.png" );
    diffuseMapSella.minFilter = THREE.LinearMipMapLinearFilter;
    specularMapSella.minFilter = THREE.LinearMipMapLinearFilter;
    roughnessMapSella.minFilter = THREE.LinearMipMapLinearFilter;
    normalMapSella.minFilter = THREE.LinearMipMapLinearFilter;
    switch(tipo){
        case "pelle":
            repeatS_sella = 5;
            repeatS_sella = 5;
        break;
        case "stoffa":
                repeatS_sella = 5;
                repeatS_sella = 5;
         break;
        case "tessuto":
            repeatS_sella = 2;
            repeatS_sella = 2;
     break;
    }
}