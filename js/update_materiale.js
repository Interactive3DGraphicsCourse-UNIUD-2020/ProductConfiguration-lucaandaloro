function updateMaterialScocca(tipo){
	switch(tipo){
		case 'azzurro_pastello':
			nuovoUniformsScocca = uniformsAcciaio;
			break;
		case 'cromato':
			nuovoUniformsScocca = uniformsZinco;
			break;
		case 'ruggine':
			nuovoUniformsScocca = uniformsRame;
			break;
	}
					/*if(tipo == "azzurro_pastello"){		
						new_uniforms = generateGlossyLambertUniforms(Plastic_Cspec,normalMaps[0],cubemap,1,1,0.9,new THREE.Vector3(new_color.r,new_color.g,new_color.b));
						new_material = createMaterial(new_uniforms,vertexLambGlossy,fragmentLambGlossy);
						changePartMaterial(part_to_update,new_material);
					}else if(tipo == "cromato"){
						new_uniforms = generateGlossyLambertUniforms(Plastic_Cspec,normalMaps[5],cubemap,0.25,0.25,0.4,new THREE.Vector3(new_color.r,new_color.g,new_color.b));
						new_material = createMaterial(new_uniforms,vertexLambGlossy,fragmentLambGlossy);
						changePartMaterial(part_to_update,new_material);
					}else if(tipo == "ruggine"){
						changePartMaterial(part_to_update,GoldMetal);
					}*/
					
				}