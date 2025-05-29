// Array con frases filosóficas y de escritores
const phrases = [
  "La vida es como montar en bicicleta. Para mantener el equilibrio, debes seguir adelante. - Albert Einstein",
  "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
  "No hay caminos para la paz; la paz es el camino. - Mahatma Gandhi",
  "La felicidad no es algo hecho. Proviene de tus propias acciones. - Dalai Lama",
  "Pienso, luego existo. - René Descartes",
  "El hombre es la medida de todas las cosas. - Protágoras",
  "La única verdadera sabiduría está en saber que no sabes nada. - Sócrates",
  "Sé tú el cambio que quieres ver en el mundo. - Mahatma Gandhi",
  "En medio de la dificultad reside la oportunidad. - Albert Einstein",
  "El tiempo es la cosa más valiosa que una persona puede gastar. - Theophrastus"
];

// Historias de ejemplo
const stories = [
  { title: "El viaje del héroe", content: "", likes: 0, visits: 0 },
  { title: "La noche estrellada", content: "", likes: 0, visits: 0 },
  { title: "El despertar", content: "", likes: 0, visits: 0 },
  { title: "Caminos cruzados", content: "", likes: 0, visits: 0 },
  { title: "La última carta", content: "", likes: 0, visits: 0 }
];

// Elementos DOM
const phraseEl = document.getElementById('phrase-of-day');
const searchInput = document.getElementById('search-input');
const cardsContainer = document.getElementById('cards-container');

// Mostrar frase aleatoria
function showRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  phraseEl.textContent = phrases[randomIndex];
}
showRandomPhrase();
setInterval(showRandomPhrase, 120000); // Cada 2 minutos

function createCard(story) {
  const card = document.createElement('div');
  card.className = 'card';

  const hasContent = story.content.trim() !== '';
  const title = hasContent ? story.title : 'Próximamente...';
  const content = hasContent ? story.content : 'Pronto habrá contenido...';

  card.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <div class="card-stats">
      <div class="like-container">
        <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 010 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span class="like-count">${story.likes}</span>
      </div>
      <div class="visit-container">
        <svg class="eye-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span class="visit-count">${story.visits}</span>
      </div>
    </div>
  `;
  return card;
}


// Mostrar historias
function showStories(filteredStories) {
  cardsContainer.innerHTML = '';

  if (filteredStories.length === 0) {
    cardsContainer.innerHTML = '<p>No se encontraron historias.</p>';
    return;
  }

  filteredStories.forEach(story => {
    const card = createCard(story);
    cardsContainer.appendChild(card);
  });
}

showStories(stories);

// Filtrar historias
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = stories.filter(story =>
    story.title.toLowerCase().includes(query) || story.content.toLowerCase().includes(query)
  );
  showStories(filtered);
});
