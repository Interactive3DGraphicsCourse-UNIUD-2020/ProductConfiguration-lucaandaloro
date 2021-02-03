
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

function getMateriale(materiale){
    switch(materiale){
        case "vetro":
            var material =  new THREE.MeshPhongMaterial({
                color: 'rgb(255,255,210)',
                shininess: 64,
                specular: new THREE.Color(0.31,0.31,0.31),
                opacity: 0.9,
                transparent: true,
                blendSrc: THREE.SrcAlphaFactor,
                blendDst: THREE.OneMinusSrcAlphaFactor,
                blendEquation: THREE.AddEquation
            });
            break;
        case "grass":
             var material = new THREE.MeshPhongMaterial({
                map: textureLoader('textures/erba.jpg'),
                color: 0x98e070,
                side: THREE.DoubleSide
            });
            break;
    
            case "gomma":
            var material =  new THREE.MeshPhongMaterial({
                color: 'rgb(38, 38, 38)',
                side: THREE.DoubleSide
            });
            break;
            
        
            case "mulinoPali":
            var material =  new THREE.MeshPhongMaterial({
                map: textureLoader('../textures/wood2.jpg'),
                side: THREE.DoubleSide,
                
            });
            break;
            case "nuvola":
            var material =  new THREE.MeshPhongMaterial({
                color: "white",
                side: THREE.DoubleSide,
                
            });
            break;
            case "foglie":
                var material =  new THREE.MeshPhongMaterial({
                    color: 'rgb(45,80,40)',
                    side: THREE.DoubleSide,
                    
                });
                break;
    }
    return material;
}

function textureLoader( file ){
    var tl = new THREE.TextureLoader();
    var newTex = tl.load( file );
    newTex.magFilter = THREE.NearestFilter; 
    return newTex;
}
