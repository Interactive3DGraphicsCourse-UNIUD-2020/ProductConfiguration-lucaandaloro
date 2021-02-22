function cambiaMaterialeManopola(tipo){
	diffuseMapManopola = loadTexture( "textures/manopole/" + tipo + "_Diffuse.png" );
	specularMapManopola = loadTexture( "textures/manopole/" + tipo + "_Specular.png" );
	roughnessMapManopola = loadTexture( "textures/manopole/" + tipo + "_Roughness.png" );
	normalMapManopola = loadTexture( "textures/manopole/" + tipo+ "_Normal.png" );
    diffuseMapManopola.minFilter = THREE.LinearMipMapLinearFilter;
    specularMapManopola.minFilter = THREE.LinearMipMapLinearFilter;
    roughnessMapManopola.minFilter = THREE.LinearMipMapLinearFilter;
    normalMapManopola.minFilter = THREE.LinearMipMapLinearFilter;

}