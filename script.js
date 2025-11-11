// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "../assets/img/alcohol.jpeg",
  "../assets/img/airelibre.jpeg",
];

const cuando = [
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
"El próximo trimestre.",
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
"Habrá un DJ.",
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
"Habrá actuaciones en vivo.",
"Habrá asientos para todos.",
"Habrá servicio de catering.",
"Habrá una alfombra roja.",
"Habrá música para bailar.",
"Habrá ambiente festivo.",
"Habrá risas",
"Habrá fotógrafos.",
"Habrá una fogata",
  
];
const sentimientos = [
  "Sentirás mucha alegría.",
  "Sentirás mucha paz.",
  "Sentirás mucha emoción.",
  "Sentirás mucha energía positiva.",
  "Sentirás mucha gratitud.",
  "Sentiras mucha diversión.",
"Sentirás nostalgia por recuerdos.",
"Sentirás asombro.",
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
  "Descubrirás algo nuevo sobre ti mismo.",
  "Serás el centro de atención.",
"Harás un nuevo amigo.",
"Recibirás un regalo inesperado.",
"Te embarcarás en una aventura.",
];
  

// Trae los elementos del HTML que tienen ese id
const body = document.body;
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

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  tiempo.innerText = cuando[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  
  body.style.backgroundImage = `url(${imagenes[numeroRandom(0, imagenes.length)]})`;

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${cosas[indice]}</p>`;
  prediccion1.innerHTML = `<p>${sentimientos[indice]}</p>`;
  prediccion2.innerHTML = `<p>${acontecimientos[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();