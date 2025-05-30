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
  { title: "Proximamente", content: "", likes: 0, visits: 0 },
  { title: "Proximamente", content: "", likes: 0, visits: 0 },
  { title: "Proximamente", content: "", likes: 0, visits: 0 },
  { title: "Proximamente", content: "", likes: 0, visits: 0 },
  { title: "Proximamente", content: "", likes: 0, visits: 0 }
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
      <div class="comment-container">
        <svg class="comment-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4-4 7-9 7-1.22 0-2.38-.17-3.43-.48l-4.31 1.28a.75.75 0 01-.95-.95l1.28-4.31C4.17 14.38 4 13.22 4 12c0-5 4-9 9-9s9 4 9 9z" />
        </svg>
        <span class="comment-count">${story.comments || 0}</span>
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

// Referencias al panel
const previewPanel = document.getElementById('story-preview');
const previewTitle = document.getElementById('preview-title');
const previewImage = document.getElementById('preview-image');
const previewDescription = document.getElementById('preview-description');
const closePreview = document.getElementById('close-preview');
const readBtn = document.getElementById('preview-read-btn');

// Agregar datos de portada a las historias (¡ejemplo!)
stories.forEach(story => {
  story.coverImage = 'img/default.jpg'; // Puedes cambiar la ruta a la imagen real
  story.description = 'Descripción de ejemplo para ' + story.title;
  story.link = 'lectura.html'; // Enlace al leer la historia
});

// Abrir panel de vista previa al hacer clic en la tarjeta
function openPreview(story) {
  previewTitle.textContent = story.title;
  previewImage.src = story.coverImage || 'img/default.jpg';
  previewDescription.textContent = story.description || 'Pronto habrá contenido...';
  readBtn.onclick = () => window.location.href = story.link;

  previewPanel.classList.add('show');
}

// Cerrar panel
closePreview.addEventListener('click', () => {
  previewPanel.classList.remove('show');
});

// Modifica showStories() para que las tarjetas se puedan clickear
function showStories(filteredStories) {
  cardsContainer.innerHTML = '';

  if (filteredStories.length === 0) {
    cardsContainer.innerHTML = '<p>No se encontraron historias.</p>';
    return;
  }

  filteredStories.forEach(story => {
    const card = createCard(story);

    // Agrega evento para abrir panel
    card.addEventListener('click', () => openPreview(story));

    cardsContainer.appendChild(card);
  });
}

// Inicializa con historias de ejemplo
showStories(stories);


// Filtrar historias
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = stories.filter(story =>
    story.title.toLowerCase().includes(query) || story.content.toLowerCase().includes(query)
  );
  showStories(filtered);
});

