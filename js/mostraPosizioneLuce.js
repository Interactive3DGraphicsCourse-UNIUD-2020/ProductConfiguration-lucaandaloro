var lucePos = false;
function mostraPosizioneLuce(){
    if(!lucePos){
        scene.add(lightMesh);
        lightMesh.name = "lucePrincipale";
        scene.add(lightMesh);
        lucePos = true;
    }else{
        scene.remove(scene.getObjectByName("lucePrincipale"));
        lucePos = false;
    }



}