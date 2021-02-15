function cambiaMateriale(tipo){
    while(scene.children.length > 0){ 
	    scene.remove(scene.children[0]); 
	}
    switch(tipo){
		case 'azzurro':
			init();
			caricaModello(getMateriale("color"), getMateriale("glossy"), getMateriale("sella"));
			break;
		case 'cromato':
			init();
			caricaModello(getMateriale("glossy"), getMateriale("glossy"), getMateriale("sella"));		
            break;
        case 'ruggine':
			init();
            caricaModello(getMateriale("ruggine"), getMateriale("glossy"), getMateriale("sella"));	
			
			break;   
	}
}