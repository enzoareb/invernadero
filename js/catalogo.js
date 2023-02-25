	 const catalogo = [
				{
					id:"1",
					codigo:"AR001",
					nombre:"Olivo",
					nombre_cientifico:"Olea europaea",
					especie:"arborea",
					fruto:"aceituna",
					color:"verde",
					detalle_cuidado:
						{
						ciclo_riego:" ",
						temp:"7 a 40",
						humedad:" ",
						descripcion:"De 7 a los 30 años el árbol crece con un constante aumento de la productividad. Desde los 35 a los 75 años el árbol alcanza la madurez y la plena producción"
						}
					,
					imagen:"arboreas/olivo.jpg",
					estado:"EN STOCK"
				},
				
				{
					id:"2",
					codigo:"AR002",
					nombre:"Arce",
					nombre_cientifico:"Acer",
					especie:"arborea",
					fruto:"samaras",
					color:"rojo intenso",
					detalle_cuidado:
						{
						ciclo_riego:" ",
						temp:" ",
						humedad:" ",
						descripcion:"Lugar luminoso sin sol directo. Sustrato con un pH bajo (de entre 4 y 6).Trasplantar cada dos años."
						}
					,
					imagen:"arboreas/arce.png",
					estado:"EN STOCK"
				},
				
				{
					id:"3",
					codigo:"AR003",
					nombre:"Limonero",
					nombre_cientifico:"Citrus limon",
					especie:"arborea",
					fruto:"limon",
					color:"verde mate",
					detalle_cuidado:
						{
						ciclo_riego:" ",
						temp:"10 A 13",
						humedad:" ",
						descripcion:"Suelos ácidos, o neutrales. sol pleno.fertilizante rico en nitrógeno, potasio y magnesio"
						}
					,
					imagen:"arboreas/limonero.jpg",
					estado:"SIN STOCK"
				},
				
				{
					id:"4",
					codigo:"AR004",
					nombre:"Naranjo",
					nombre_cientifico:"Citrus sinensis",
					especie:"arborea",
					fruto:"naranja",
					color:"verde",
					detalle_cuidado:
						{
						ciclo_riego:" ",
						temp:" ",
						humedad:" ",
						descripcion:"Tipo de suelos fértiles, bien drenados, de tipo limo-arenoso"
						}
					,
					imagen:"arboreas/naranjo.jpg",
					estado:"SIN STOCK"
				},		
							{
					id:"5",
					codigo:"AB001",
					nombre:"Abelia",
					nombre_cientifico:"abelia",
					especie:"arbustiva",
					fruto:" ",
					color:"verde",
					detalle_cuidado:
						{
						ciclo_riego:"Riego moderado",
						temp:" ",
						humedad:" ",
						descripcion:"Si clima es cálido,se cultiva en un lugar de sombra o semisombra orientado al norte.Si es fresco, a pleno sol pero a resguardo del viento.Suelo aireado y permeable que no sea calcárea"
						}
					,
					imagen:"arbustivas/abelia.jpg",
					estado:"EN STOCK"
				},
				
				{
					id:"6",
					codigo:"AB002",
					nombre:"Rosa mosqueta",
					nombre_cientifico:"rosa eglanteria",
					especie:"arbustiva",
					fruto:"escaramujo",
					color:"rosa pálido",
					detalle_cuidado:
						{
						ciclo_riego:" ",
						temp:" ",
						humedad:" ",
						descripcion:"Mucho sol con suelo fértil, húmedo y bien drenado.Fertilizante orgánico, a modo de mantillo, a fines del invierno o principios de la primavera. "
						}
					,
					imagen:"arbustivas/rosa-mosqueta.jpg",
					estado:"EN STOCK"
				},
				
				{
					id:"7",
					codigo:"AB003",
					nombre:"Adelfa",
					nombre_cientifico:"Nerium Oleander",
					especie:"arbustiva",
					fruto:"Fruto alargado y seco",
					color:"gris y marrón",
					detalle_cuidado:
						{
						ciclo_riego:"El riego se hará únicamente en periodo estival.",
						temp:" ",
						humedad:" ",
						descripcion:"Mucho sol y no necesita demasiado riego"
						}
					,
					imagen:"arbustivas/adelfa.jpg",
					estado:"SIN STOCK"
				},
				
				{
					id:"8",
					codigo:"AB004",
					nombre:"Durillo",
					nombre_cientifico:"Viburnum tinus",
					especie:"arbustiva",
					fruto:" ",
					color:"verde",
					detalle_cuidado:
						{
						ciclo_riego:"Riego moderado, que no encharque el sustrato",
						temp:" ",
						humedad:" ",
						descripcion:"Sustrato con mantillo de hojas y compost o con una manta de hibernación."
						}
					,
					imagen:"arbustivas/durillo.png",
					estado:"SIN STOCK"
				},	
				
				{
					id:"9",
					codigo:"HE001",
					nombre:"Albahaca",
					nombre_cientifico:"Ocimum basilicum",
					especie:"herborea",
					fruto:"Fruto alargado y seco",
					color:"gris y marrón",
					detalle_cuidado:
						{
						ciclo_riego:"El riego se hará únicamente en periodo estival.",
						temp:"+ 70",
						humedad:" ",
						descripcion:"No tolera el frío, las semillas germinan y se desarrollan cuando la temperatura promedio es de 70 grados como mínimo."
						}
					,
					imagen:"herboreas/albahaca.png",
					estado:"EN STOCK"
				},
				
				{
					id:"10",
					codigo:"HE001",
					nombre:"Cilantro",
					nombre_cientifico:"Coriandrum sativum",
					especie:"herborea",
					fruto:" ",
					color:"verde",
					detalle_cuidado:
						{
						ciclo_riego:"Una vez que las plantas están establecidas, no necesitan mucha agua",
						temp:" ",
						humedad:" ",
						descripcion:"se debe fertilizar dos veces. Aplique ½ cucharadita de nitrato de amonio (34-0-0) o urea (21-0-0) por pie cuadrado."
						}
					,
					imagen:"herboreas/cilantro.jpg",
					estado:"EN STOCK"
				},
				
				{
					id:"11",
					codigo:"TU001",
					nombre:"Zanahoria",
					nombre_cientifico:"Daucus carota",
					especie:"tuberosa",
					fruto:"Fruto alargado",
					color:"naranja",
					detalle_cuidado:
						{
						ciclo_riego:"Se riega con goteo dos o tres veces por semana entre 30 y 45 minutos.",
						temp:" ",
						humedad:" ",
						descripcion:"Clima templado. Suelo arcilloso. Exposición a luz solar.Arcillosa y rica en materia orgánica, así como en nitrógeno.pH del suelo ligeramente ácido (6.0-6.8).."
						}
					,
					imagen:"tuberosas/zanahoria.jpg",
					estado:"EN STOCK"
				},
				
				{
					id:"12",
					codigo:"TU002",
					nombre:"Batata",
					nombre_cientifico:"Ipomoea batatas",
					especie:"tuberosa",
					fruto:"batata",
					color:"violeta",
					detalle_cuidado:
						{
						ciclo_riego:"Se riega con goteo dos o tres veces por semana entre 30 y 45 minutos.",
						temp:"14-26ºC",
						humedad:" ",
						descripcion:"se debe fertilizar dos veces. Aplique ½ cucharadita de nitrato de amonio (34-0-0) o urea (21-0-0) por pie cuadrado."
						}
					,
					imagen:"tuberosas/batata.jpg",
					estado:"EN STOCK"
				},
			
			]
	 