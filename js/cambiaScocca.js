function cambiaMateriale(tipo){
    while(scene.children.length > 0){ 
	    scene.remove(scene.children[0]); 
	}
    switch(tipo){
		case 'azzurro':
			aggiungiModello(material_color, material_glossy);
			break;
		case 'cromato':
			aggiungiModello(material_glossy, material_glossy);		
            break;
        case 'ruggine':
            aggiungiModello(material_textures, material_glossy);	
            break;   
	}
}