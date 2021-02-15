function cambiaMateriale(tipo){
    while(scene.children.length > 0){ 
	    scene.remove(scene.children[0]); 
	}
    switch(tipo){
		case 'azzurro':
			init();
			aggiungiModello(material_color, material_glossy, material_textures_sella);
			break;
		case 'cromato':
			init();
			aggiungiModello(material_glossy, material_glossy, material_textures_sella);		
            break;
        case 'ruggine':
			init();
            aggiungiModello(material_textures, material_glossy, material_textures_sella);	
            break;   
	}
}