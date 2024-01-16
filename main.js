let peli = [
	[
		"Soy el rey del mundo.",
		"Estás temblando.",
		"La vida es un juego de azar..",
		["titanic", "taitanic", "La del barco "]
	],
	[
		"Yo soy tu padre.",
		"Tengo un mal presentimiento.",
		"Usa la fuerza.",
		["starwars", "star wars", "la guerra de las galaxias"]
	],
	[
		"Huid insensatos.",
		"Al amanecer del tercer día, mira al este.",
		"Comarca, Bolsón.",
		["el señor de los anillos", "lord of the rings", "El señor de los anillos"]
	],
	[
		"He visto cosas que jamás creeríais.",
		"Más allá de las puertas de Tanjauser.",
		"Todos estos momentos se perderán en el tiempo como lágrimas en la lluvia.",
		["blade Runner", "bladerunner", "Blade runner"]
	],
	[
		"Tus carencias como hijo son mis defectos como padre.",
		"Sangre y arena.",
		"Ahora somos libres.",
		["gladiator", "gladiador", "gladiador"]
	],
	[
		"Voy a hacerle una oferta que no podrá rechazar.",
		"Un hombre que no pasa tiempo con su familia no puede ser considerado hombre.",
		"Guarda tus amigos cerca y a tus enemigos aún más cerca.",
		["el Padrino", "el padríno", "the goodfather"]
	],
	[
		"Que la Fuerza te acompañe.",
		"Ayuda me, Obi-Wan Kenobi; eres mi única esperanza.",
		"No, yo soy tu padre.",
		["star Wars", "star wars", "la guerra de las galaxias"]
	],
	[
		"Eres un mago, Harry.",
		"Después de todo este tiempo? -Siempre.",
		"Las cosas que perdemos siempre regresan a nosotros de alguna manera.",
		["harry Potter", "harry potter", "las Reliquias de la Muerte"]
	],
	[
		"¡Hasta la vista, baby!",
		"Ven conmigo si quieres vivir.",
		"Yo volveré.",
		["terminator", "el Exterminador", "exterminador del Futuro"]
	],
	[
		"Houston, tenemos un problema.",
		"La vida se abre camino.",
		"En el espacio nadie puede oír tus gritos.",
		["apolo 13", "apollo 13", "misión a la Luna"]
	],
	[
		"Hasta el infinito y más allá.",
		"Siempre estaré contigo.",
		"Al infinito y más allá.",
		["toy Story", "toy story", "la historia de los juguetes"]
	],
	[
		"¿Por qué tan serio?",
		"Creo que lo que no te mata, simplemente te hace más raro.",
		"Pongamos una sonrisa en esa cara.",
		["el Caballero de la Noche", "el caballero oscuro", "el caballero oscuro"]
	],
	[
		"Aquí tienes mirándote, chaval.",
		"Siempre nos quedará París.",
		"Louis, creo que este es el comienzo de una hermosa amistad.",
		["casablanca", "casablanca", "la ciudad de la alegría"]
	],
	[
		"No hay lugar como el hogar.",
		"Te atraparé, mi preciosa, ¡y también a tu perrito!",
		"No hagas caso al hombre que está detrás de la cortina.",
		["el Mago de Oz", "el mago de Oz", "el Mago de Oz"]
	],
	[
		"Que la suerte esté siempre de tu lado.",
		"¡Felices Juegos del Hambre! ¡Y que la suerte esté siempre de tu lado!",
		"¡Me ofrezco como voluntario!",
		[
			"los Juegos del Hambre",
			"los juegos del hambre",
			"los juegos de la hambruna"
		]
	],
	[
		"Elemental, mi querido Watson.",
		"El juego está en marcha.",
		"Es elemental, mi querido Watson.",
		["sherlock Holmes", "sherlock holmes", "las aventuras de sherlock holmes"]
	],
	[
		"¡Aquí está Johnny!",
		"Todo trabajo y nada de diversión hacen de Jack un chico aburrido.",
		"¡Wendy, ya estoy en casa!",
		["el Resplandor", "el resplandor", "el iluminado"]
	],
	[
		"Volveré.",
		"¡Hasta la vista, baby!",
		"Ven conmigo si quieres vivir.",
		[
			"terminator 2: juicio final",
			"terminator 2",
			"el Exterminador 2: Día del juicio"
		]
	],
	[
		"¡Tú no puedes manejar la verdad!",
		"Voy a hacerle una oferta que no podrá rechazar.",
		"¡Lo juro por Dios!",
		[
			"algunos hombres buenos",
			"unos pocos hombres buenos",
			"algunos hombres honrados"
		]
	],
	[
		"Veo gente muerta.",
		"¡Están aquí!",
		"¡Ya están aquí! ¡Tú serás el siguiente!",
		["el Sexto Sentido", "sexto sentido", "El sexto sentido"]
	],
	[
		"No existe el amor en el mundo.",
		"Vete, olvídame. Por favor, olvídame, Faline.",
		"Siempre recordaré que me encontré con bambi.",
		["bambi", "el pequeño ciervo", "bambi"]
	],
	[
		"Mi tesoro.",
		"No te dejaré ir, Jack.",
		"Solo podemos abrazarnos y esperar.",
		["titanic", "taitanic", "la tragedia del mar"]
	],
	[
		"Que se haga la luz.",
		"Simba, tú aún no estás listo para ser rey.",
		"¿Vas a ignorar mis órdenes?",
		["el Rey León", "el rey león", "el monarca león"]
	],
	[
		"Yo amo el olor del napalm por la mañana.",
		"He matado a muchas personas.",
		"No puedo morir, ¡no puedo morir!",
		["apocalypse Now", "apocalipsis ahora", "el día del fin"]
	],
	[
		"No te muevas, o te mueres.",
		"Atrévete, no tienes nada que perder.",
		"¿Y si me abrazas hasta que me sienta mejor?",
		["kill Bill", "Kill Bill: Volumen 1", "Kill Bill: La venganza"]
	],
	[
		"Los sueños, sueños son.",
		"Nada es ni bueno ni malo, solo lo es el pensamiento.",
		"Buenos amigos, buenos libros y una conciencia tranquila: esa es la vida ideal.",
		["romeo y julieta", "Romeo y Julieta", "Romeo y Julieta"]
	],
	[
		"Solo hay una cosa que el poder no puede comprar: el tiempo.",
		"El pasado ya no se puede cambiar. El futuro aún está en tu poder.",
		"El tiempo es demasiado lento para aquellos que esperan... demasiado rápido para aquellos que temen...",
		["tiempos modernos", "modern Times", "tiempos de cambio"]
	],
	[
		"Para aquellos que luchan por ella, la vida tiene un sabor que los protegidos nunca conocerán.",
		"Cierro los ojos para no ver lo que pasa a mi alrededor.",
		"Un hombre puede ser destruido pero no derrotado.",
		["adiós a las armas", "farewell to Arms", "despedida de armas"]
	],
	[
		"El arte de perder no es difícil de aprender.",
		"Nadie osó molestar al sonido de mi pie.",
		"No puedo evitarlo, es emocionante. Se siente bien estar perdido en la dirección correcta.",
		["lost in translation", "perdidos en Tokio", "traducción perdida"]
	],
	[
		"No te rindas, no importa lo que suceda, no te rindas.",
		"Siempre he confiado en la bondad de los extraños.",
		"Allá voy, a ser famoso... y morir joven.",
		[
			"o que el viento se llevó",
			"Lo que el viento se llevó",
			"Gone with the Wind"
		]
	]
];
let npeli = 0;
let npista = 0;
let puntos = 0;

function cargar() {
	if (npista < 3) {
		document.querySelector("#contenido").innerHTML ="🎬"+ peli[npeli][npista] ;
		npista++;
	} else {
		let respuesta = prompt("Qué película es?");
		let mensaje = "No has acertado, la película es..." + peli[npeli][3][0];
		for (let i = 0; i < peli[npeli][3].length; i++) {
			if (respuesta == peli[npeli][3][i]) {
				mensaje = "Muy bien, la película es " + peli[npeli][3][i];
				puntos++;
				break;
			} // cierre del if
		} // cierre del for

		alert(mensaje);

		npista = 0;
		npeli++;
		document.querySelector("#contador").innerHTML =
			"Aciertos:" + puntos + "🎞" + " de " + npeli + "🎦";
		cargar();
	}
}

cargar();
