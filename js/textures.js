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

var diffuseMap = loadTexture( "textures/Metal022_4K_Diffuse.jpg" );
var specularMap = loadTexture( "textures/Metal022_4K_Specular.png" );
var roughnessMap = loadTexture( "textures/Metal022_4K_Roughness.jpg" );
var normalMap_ruggine = loadTexture( "textures/Metal022_4K_Normal.jpg" );

var normalMap = loadTexture( "textures/normal.jpg" );