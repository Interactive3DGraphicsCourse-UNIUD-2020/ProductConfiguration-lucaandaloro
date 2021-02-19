function cambiaMaterialeManopola(tipo){
	diffuseMapManopola = loadTexture( "textures/manopole/" + tipo + "_Diffuse.png" );
	specularMapManopola = loadTexture( "textures/manopole/" + tipo + "_Specular.png" );
	roughnessMapManopola = loadTexture( "textures/manopole/" + tipo + "_Roughness.png" );
	normalMapManopola = loadTexture( "textures/manopole/" + tipo+ "_Normal.png" );
    switch(tipo){
        case "pelle":
            repeatS_manopola = 5;
            repeatS_manopola = 5;
        break;
        case "stoffa":
                repeatS_manopola = 5;
                repeatS_manopola = 5;
         break;
        case "tessuto":
            repeatS_manopola = 2;
            repeatS_manopola = 2;
     break;
    }
}