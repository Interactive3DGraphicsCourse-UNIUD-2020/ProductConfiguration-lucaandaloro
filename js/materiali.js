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
        case "vetro_post":
            var material =  new THREE.MeshPhongMaterial({
                color: 'rgb(255,87,87)',
                shininess: 64,
                specular: new THREE.Color(0.31,0.31,0.31),
                opacity: 0.93,
                transparent: true,
                blendSrc: THREE.SrcAlphaFactor,
                blendDst: THREE.OneMinusSrcAlphaFactor,
                blendEquation: THREE.AddEquation
            });
            break;
       
        case "gomma":
            var material =  new THREE.MeshPhongMaterial({
                color: 'rgb(38, 38, 38)',
                side: THREE.DoubleSide
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
