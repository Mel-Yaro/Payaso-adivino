// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "../Oraculo-festivo/assets/img/comida.jpeg",
  "../Oraculo-festivo/assets/img/gente.jpeg",
  "../Oraculo-festivo/assets/img/baile.jpeg",
  "../Oraculo-festivo/assets/img/regalos.jpeg",
  "../Oraculo-festivo/assets/img/sorpresa.jpeg",
  "../Oraculo-festivo/assets/img/baile2.jpeg",
  "../Oraculo-festivo/assets/img/barra.jpeg",
  "../Oraculo-festivo/assets/img/banda.jpeg",
  "../Oraculo-festivo/assets/img/luces.jpeg",
  "../Oraculo-festivo/assets/img/confeti.jpeg",
  "../Oraculo-festivo/assets/img/pastel.jpeg",
  "../Oraculo-festivo/assets/img/juego.jpeg",
  "../Oraculo-festivo/assets/img/karaoke.jpeg",
  "../Oraculo-festivo/assets/img/photo.jpeg",
  "../Oraculo-festivo/assets/img/globos.jpeg",
  "../Oraculo-festivo/assets/img/alcohol.jpeg",
  "../Oraculo-festivo/assets/img/mesero.jpeg",
  "../Oraculo-festivo/assets/img/pistadebaile.jpeg",
  "../Oraculo-festivo/assets/img/tacon.jpeg",
  "../Oraculo-festivo/assets/img/niños.jpeg",
  "../Oraculo-festivo/assets/img/bartender.jpeg",
  "../Oraculo-festivo/assets/img/comida2.jpeg",
  "../Oraculo-festivo/assets/img/sinalcohol.jpeg",
  "../Oraculo-festivo/assets/img/acto.jpeg",
  "../Oraculo-festivo/assets/img/fuegosartificiales.jpeg",
  "../Oraculo-festivo/assets/img/sillas.jpeg",
  "../Oraculo-festivo/assets/img/catering.jpeg",
  "../Oraculo-festivo/assets/img/presentacion.jpeg",
  "../Oraculo-festivo/assets/img/alcohol2.jpeg",
  "../Oraculo-festivo/assets/img/ambiente.jpeg",
  "../Oraculo-festivo/assets/img/dj.jpeg",
  "../Oraculo-festivo/assets/img/airelibre.jpeg",
  "../Oraculo-festivo/assets/img/personas.jpeg",
  "../Oraculo-festivo/assets/img/disco.jpeg",
  "../Oraculo-festivo/assets/img/tranquilo.jpeg",
];

const titulos = [
  "El próximo año",
  "En un mes",
  "En una semana",
  "Mañana",
  "En seis meses",
  "En dos meses",
  "En tres meses",
  "Dentro de cuatro meses",
  "En cinco meses",
  "En siete meses",
  "En ocho meses",
  "En nueve meses",
  "En diez meses",
  "Dentro de once meses",
  "Dentro de una hora.",
"Dentro de dos horas.",
"Hoy por la tarde.",
"Esta noche.",
"A medianoche.",
"Al amanecer.",
"En dos días.",
"En tres días.",
"En dos semanas.",
"En quince días.",
"En un mes y medio.",
"En seis semanas.",
"En un año y medio.",
"En dos años.",
"Dentro de cinco años.",
"En el próximo fin de semana.",
"La próxima primavera.",
"El próximo verano.",
"El próximo invierno.",
"Al finalizar el mes.",
];

const cosas = [
  "Habrá mucha comida.",
  "Habrá muchos invitados.",
  "Habrá música y baile.",
  "Habrá regalos para todos.",
  "Habrá sorpresas inesperadas.",
"Habrá baile toda la noche.",
"Habrá barra de bebidas.",
"Habrá una banda en vivo.",
"Habrá luces de colores.",
"Habrá confeti.",
"Habrá un pastel grande.",
"Habrá juegos y dinámicas.",
"Habrá karaoke.",
"Habrá un photobooth para fotos.",
"Habrá globos y decoración.",
"Habrá un brindis.",
"Habrá meseros atendiendo.",
"Habrá pista de baile.",
"Habrá regalos para los invitados.",
"Habrá una zona para niños.",
"Habrá bartender profesional.",
"Habrá una mesa de snacks.",
"Habrá bebidas sin alcohol.",
"Habrá un espectáculo sorpresa.",
"Habrá fuegos artificiales.",
"Habrá asientos para todos.",
"Habrá servicio de catering.",
"Habrá una alfombra roja.",
"Habrá música para bailar.",
"Habrá buen ambiente.",
"Habrá risas",
"Habrá un DJ.",
"Habrá una fogata",
"El ambiente será frenetico.",

"El ambiente será tranquilo.",
  
];
const sentimientos = [
  "Sentirás mucha alegría.",
  "Sentirás mucha paz.",
  "Sentirás mucha emoción.",
  "Sentirás mucha energía positiva.",
  "Sentirás mucha gratitud.",
  "Sentiras mucha diversión.",
"Sentirás nostalgia por recuerdos.",
"Sentirás sorpresa.",
"Sentirás curiosidad.",
"Sentirás adrenalina.",
"Sentirás ternura.",
"Sentirás entusiasmo.",
"Sentirás alivio.",
"Sentirás orgullo.",
"Sentirás complicidad con amigos.",
"Sentirás conexión.",
"Sentirás serenidad.",
"Sentirás euforia.",
"Sentirás intimidad y confianza.",
"Sentirás inspiración.",
"Sentirás risa contagiosa.",
"Sentirás calor humano.",
"Sentirás alivio y descanso.",
"Sentirás seguridad.",
"Sentirás esperanza.",
"Sentirás calidez humana.",
"Sentirás alegría desbordante.",
"Sentirás ternura inesperada.",
"Sentirás nostalgia dulce.",
"Sentirás curiosidad renovada.",
"Sentirás energía contagiosa.",
"Sentirás paz interior.",
"Sentirás admiración por alguien.",
"Sentirás alivio reconfortante.",
"Sentirás unión con quienes te rodean.",
];

const acontecimientos = [
  "Conocerás a alguien especial.",
  "Recibirás una gran noticia.",
  "Tendrás una oportunidad única.",
  "Vivirás una experiencia inolvidable.",
  "Descubrirás algo nuevo sobre",
"te reencontrarás con alguien del pasado.",
"Te pediran bailar",
"Te dedicaran una canción.",
"Recibirás un cumplido sincero.",
"Te presenteran a una nueva amistad.",
"Te ofrezran un trago.",
"Te tomanrás una foto con alguien.",
"Alguien recordará una anécdota compartida.",
"Rematarás en un plan fuera de la fiesta.",
"Te pedirán perdón por algo pasado.",
"Te van a pedir un consejo o tu opinión.",
"Alguien provocará una risa inesperada.",
"Habrá quien te sorprenda con un pequeño regalo.",
"Te dedicarán un brindis.",
"Alguien preguntará por tu vida y se interesará de verdad.",
"Habrá quien te haga sentir en confianza.",
"Habrá quien te proponga colaborar en un proyecto.",
"Habrá quien te ofrezca ayuda.",
"Te besarán.",
"Habrá quien te invite a subir al escenario o participar en un juego.",
"Te dedicarán una canción",
"Habrá quien te cuide si no te sientes bien.",
"Habrá quien te presente a alguien especial.",
"Te escribirán luego para agradecer la compañía.",
"Alguien te acompañará hasta la salida.",
"Al siguiente día tendrás que ir a trabajar.",
  "Serás el centro de atención.",
"Harás un nuevo amigo.",
"Recibirás un regalo inesperado.",
"Te embarcarás en una aventura.",
];
  

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const tiempo = document.getElementById("fecha");
const prediccion = document.getElementById("objetos");
const prediccion1 = document.getElementById("sentidos");
const prediccion2 = document.getElementById("futuro");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, cosas.length); // 0, 1, 2, 3
  const indiceT = numeroRandom(0, titulos.length); 
  const indiceS = numeroRandom(0, sentimientos.length);
  const indiceA = numeroRandom(0, acontecimientos.length); 

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  
  tiempo.innerText = titulos[indiceT]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${cosas[indice]}</p>`;
  prediccion1.innerHTML = `<p>${sentimientos[indiceS]}</p>`;
  prediccion2.innerHTML = `<p>${acontecimientos[indiceA]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();