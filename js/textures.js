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

