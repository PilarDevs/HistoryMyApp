document.getElementById('new-story-btn').addEventListener('click', () => {
  window.location.href = 'editor.html'; // redirige al editor de nueva historia
});

document.getElementById('edit-story-btn').addEventListener('click', () => {
  const panel = document.getElementById('existing-stories-panel');
  panel.classList.remove('hidden');
  panel.classList.add('modal-active');
  loadSimulatedStories();
});

function loadSimulatedStories() {
  const stories = [
    {
      title: "El reino perdido",
      description: "Una aventura épica en tierras olvidadas.",
      cover: "https://via.placeholder.com/400x200?text=Reino+Perdido"
    },
    {
      title: "Diario del vacío",
      description: "Pensamientos flotando entre estrellas.",
      cover: "https://via.placeholder.com/400x200?text=Diario+del+Vacío"
    },
    {
      title: "Magia oculta",
      description: "Hechizos, secretos y poder en las sombras.",
      cover: "https://via.placeholder.com/400x200?text=Magia+Oculta"
    }
  ];

  const grid = document.getElementById('stories-grid');
  grid.innerHTML = '';

  stories.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card';

    card.innerHTML = `
      <img src="${story.cover}" alt="${story.title}">
      <div class="info">
        <h4>${story.title}</h4>
        <p>${story.description}</p>
      </div>
    `;

    card.addEventListener('click', e => {
      e.stopPropagation();
      alert(`Editar "${story.title}" (simulado)`);
    });

    grid.appendChild(card);
  });
}

// Cerrar modal al hacer clic fuera de las tarjetas
window.addEventListener('click', e => {
  const panel = document.getElementById('existing-stories-panel');
  if (!panel.classList.contains('hidden') && !e.target.closest('.story-card') && !e.target.closest('#edit-story-btn')) {
    panel.classList.add('hidden');
    panel.classList.remove('modal-active');
  }
});
