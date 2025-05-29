// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  // Animación de aparición para las cards de historias
  const storyCards = document.querySelectorAll(".story-card");
  storyCards.forEach((card, index) => {
    // Añade un retardo progresivo para que aparezcan de forma secuencial
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 100); // 100ms de retardo entre cada tarjeta
  });

  // Animación de búsqueda de historias (si quieres animar el foco)
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("focus", () => {
      searchInput.style.transition = "box-shadow 0.3s";
      searchInput.style.boxShadow = "0 0 8px rgba(0, 123, 255, 0.5)";
    });
    searchInput.addEventListener("blur", () => {
      searchInput.style.boxShadow = "none";
    });
  }

  // Animación para resaltar la tarjeta al pasar el mouse
  storyCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.3s, box-shadow 0.3s";
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });
  });
});
