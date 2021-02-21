var luce = false;
function aggiungiLuceAmbientale(){
    if(!luce){
        var luceAmbientale = new THREE.AmbientLight( 0x777777 );
        luceAmbientale.name = "luceAmbientale";
        scene.add(luceAmbientale);
        luce = true;
    }else{
        scene.remove(scene.getObjectByName("luceAmbientale"));
        luce = false;
    }



}