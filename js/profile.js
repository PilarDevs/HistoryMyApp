document.addEventListener('DOMContentLoaded', () => {
  // Simulación de datos recibidos de la base de datos
  const userProfile = {
    username: 'Usuario123',
    description: '¡Hola! Me encanta escribir historias. Bienvenido a mi espacio creativo.',
    photoUrl: '', // Deja vacío para usar la foto por defecto
  };

  const userStories = [
    { title: 'Historia Épica', description: 'Una aventura increíble...' },
    { title: 'Otra Historia', description: 'Una breve descripción...' },
    { title: 'Cuento Misterioso', description: 'Lo que ocurrió aquella noche...' },
    { title: 'Relato Fantástico', description: 'Un mundo de fantasía...' },
    { title: 'Aventura Urbana', description: 'Descubre la ciudad...' },
  ];

  // Mostrar perfil
  const usernameEl = document.getElementById('username');
  const descriptionEl = document.getElementById('description');
  const photoEl = document.getElementById('profile-photo');

  usernameEl.textContent = userProfile.username;
  descriptionEl.textContent = userProfile.description;
  photoEl.src = userProfile.photoUrl || 'img/user.png';

  // Mostrar historias
  const storiesContainer = document.getElementById('stories-container');
  storiesContainer.innerHTML = ''; // Limpiar el mensaje "Cargando..."

  if (userStories.length > 0) {
    userStories.forEach(story => {
      const storyCard = document.createElement('div');
      storyCard.classList.add('story-card');

      const storyTitle = document.createElement('h3');
      storyTitle.textContent = story.title;

      const storyDesc = document.createElement('p');
      storyDesc.textContent = story.description;

      storyCard.appendChild(storyTitle);
      storyCard.appendChild(storyDesc);

      storiesContainer.appendChild(storyCard);
    });
  } else {
    storiesContainer.innerHTML = '<p>No has subido historias aún.</p>';
  }

  // Deslizar con el mouse
  let isDown = false;
  let startX;
  let scrollLeft;

  storiesContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    storiesContainer.classList.add('active');
    startX = e.pageX - storiesContainer.offsetLeft;
    scrollLeft = storiesContainer.scrollLeft;
  });

  storiesContainer.addEventListener('mouseleave', () => {
    isDown = false;
    storiesContainer.classList.remove('active');
  });

  storiesContainer.addEventListener('mouseup', () => {
    isDown = false;
    storiesContainer.classList.remove('active');
  });

  storiesContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - storiesContainer.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad aquí
    storiesContainer.scrollLeft = scrollLeft - walk;
  });
});
