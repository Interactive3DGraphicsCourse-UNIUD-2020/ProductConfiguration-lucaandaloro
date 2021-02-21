function cambiaMateriale(tipo){
    scene.remove(scene.getObjectByName("modello"));
    switch(tipo){
		case 'azzurro':
			
			caricaModello(getMateriale("color"), getMateriale("glossy"), getMateriale("sella"));
			materiale = "colore";
			break;
		case 'cromato':
			
			caricaModello(getMateriale("glossy"), getMateriale("glossy"), getMateriale("sella"));
			materiale = "glossy";		
            break;
        case 'ruggine':
			
            caricaModello(getMateriale("ruggine"), getMateriale("glossy"), getMateriale("sella"));	
			materiale = "ruggine";
			break;   
	}
}