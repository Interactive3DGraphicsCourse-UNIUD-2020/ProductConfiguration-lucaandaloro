
function cambiaMateriale(tipo){
    
    switch(tipo){
		case 'azzurro':
			scene.remove(scene.getObjectByName("modello"));
			caricaModello(getMateriale("color"), getMateriale("glossy"), getMateriale("sella"));
			materiale = "colore";
			$("#prezzo").text("€ 1300");
			break;
		case 'cromato':
			if(!studio){
				scene.remove(scene.getObjectByName("modello"));
				caricaModello(getMateriale("glossy"), getMateriale("glossy"), getMateriale("sella"));
				materiale = "glossy";
				$("#prezzo").text("€ 1700");
			}else{
				alert("Il materiale glossy, può essere impostato solo con gli ambienti");
			}
					
            break;
        case 'ruggine':
			scene.remove(scene.getObjectByName("modello"));
            caricaModello(getMateriale("ruggine"), getMateriale("glossy"), getMateriale("sella"));	
			materiale = "ruggine";
			$("#prezzo").text("€ 900");
			break;   
	}
}