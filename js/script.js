document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.getElementById("cards-container");

  // Función para formatear vistas en formato abreviado
  function formatViews(number) {
    if (number >= 1_000_000) {
      return (number / 1_000_000).toFixed(number % 1_000_000 === 0 ? 0 : 1) + 'M';
    } else if (number >= 1_000) {
      return (number / 1_000).toFixed(number % 1_000 === 0 ? 0 : 1) + 'K';
    }
    return number.toString();
  }

  const historiaDestacada = {
    title: "La Ciudad del Olvido",
    description: "Explora una ciudad misteriosa donde los recuerdos desaparecen cada noche.",
    visits: 1800000,
    link: "lecturas.html"
  };

  const historias = [
    historiaDestacada,
    ...Array(7).fill({
      title: "Proximamente",
      description: "Próximamente...",
      visits: 0,
      link: null
    }),
  ];

  const eyeIcon = `
    <svg class="eye-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0
        8.268 2.943 9.542 7-1.274 4.057-5.065
        7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  `;

  historias.forEach(historia => {
    const card = document.createElement("div");
    card.className = "story-card";

    const cardInner = `
      <h3>${historia.title}</h3>
      <p>${historia.description}</p>
      <div class="views-container" title="Vistas">
        ${eyeIcon}
        <span class="view-count">${formatViews(historia.visits)}</span>
      </div>
    `;

    if (historia.link) {
      const link = document.createElement("a");
      link.href = historia.link;
      link.innerHTML = cardInner;
      link.style.textDecoration = "none";
      link.style.color = "inherit";
      card.appendChild(link);
    } else {
      card.innerHTML = cardInner;
    }

    cardsContainer.appendChild(card);
  });
});
