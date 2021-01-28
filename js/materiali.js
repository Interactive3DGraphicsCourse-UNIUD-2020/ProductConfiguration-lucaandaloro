
function cambiaMateriale(tipo){
    while(scene.children.length > 0){ 
	    scene.remove(scene.children[0]); 
	}
    switch(tipo){
		case 'azzurro':
			aggiungiModello3(material_color, material_glossy);
			break;
		case 'cromato':
			aggiungiModello3(material_glossy, material_glossy);		
            break;
        case 'ruggine':
            aggiungiModello3(material_textures, material_glossy);	
            break;   
	}
}

function materialWithTextures(){
   
}

function textureLoader( file ){
    var tl = new THREE.TextureLoader();
    var newTex = tl.load( file );
    newTex.magFilter = THREE.NearestFilter; 
    return newTex;
}
