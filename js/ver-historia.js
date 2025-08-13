const chapters = [
  {
    title: "Capítulo 1: El Brillo del Comienzo",
    content: `Clara y Leo se conocieron una tarde de otoño, cuando el viento parecía escribir poemas entre las hojas caídas. Todo en ellos encajaba: risas espontáneas, miradas que decían más que mil palabras, silencios cómodos. Durante dos años, el mundo fue un lugar más amable mientras estuvieron juntos. Promesas eternas, cartas dobladas con cuidado, abrazos en medio de la lluvia.

    Pero el amor, cuando no se cuida, empieza a desvanecerse sin que uno lo note.`,
    image: "img/ciudadDelOlvido.png"
  },
  {
    title: "Capítulo 2: Grietas Invisibles",
    content: `Leo empezó a llegar más tarde. Clara hablaba menos. Las palabras ya no eran suaves, eran cuchillos envueltos en rutina. Las discusiones eran pequeñas al principio, pero crecieron como raíces envenenadas: celos, reproches, sospechas.

    Una noche, Clara leyó un mensaje que no era para ella. No gritó. Solo cerró el teléfono, bajó la mirada y supo que algo se había roto.`,
    image: ""
  },
  {
    title: "Capítulo 3: Lo Que Queda Después",
    content: `Clara no lloró cuando lo dejó. Solo escribió una carta con una línea: "No todo lo que se ama se puede salvar."  
    Leo la leyó sin entender. ¿Cómo pasó del amor al silencio tan rápido?

    Años después, ambos aún pensaban en el otro... pero no con amor. Con una mezcla de dolor, rabia y ese tipo de resentimiento que solo deja el amor no correspondido.  
    Porque a veces, el recuerdo de un amor mal terminado duele más que la soledad.`,
    image: ""
  }
];


const storyTitle = document.getElementById("story-title");
const label = document.getElementById("chapter-label");
const content = document.getElementById("chapter-content");
const image = document.getElementById("chapter-image");
const chapterList = document.getElementById("chapter-list");
const menuToggle = document.getElementById("menu-toggle");
const sidePanel = document.getElementById("side-panel");
const readerContainer = document.getElementById("reader-container");

// Mostrar capítulo inicial
let currentChapter = 0;

function displayChapter(index) {
  const chapter = chapters[index];
  label.textContent = chapter.title;
  content.innerText = chapter.content;  // innerText mantiene saltos de línea

  if (chapter.image) {
    image.src = chapter.image;
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }

  if (index === 0) {
    storyTitle.textContent = "La Ciudad del Olvido";
    storyTitle.style.display = "block";
  } else {
    storyTitle.textContent = "";
    storyTitle.style.display = "none";
  }

  // Actualizar capítulo activo en la lista
  const items = chapterList.querySelectorAll('li');
  items.forEach((li, i) => {
    if(i === index) {
      li.style.fontWeight = '700';
      li.style.color = '#333';
    } else {
      li.style.fontWeight = '600';
      li.style.color = '#007bff';
    }
  });

  currentChapter = index;
}
// Botones Next y Back
document.getElementById("btn-next").onclick = () => {
  if (currentChapter < chapters.length - 1) {
    displayChapter(currentChapter + 1);
  }
};

document.getElementById("btn-back").onclick = () => {
  if (currentChapter > 0) {
    displayChapter(currentChapter - 1);
  }
};


// Swipe solo si existe readerContainer
if (readerContainer) {
  let touchStartX = 0;
  let touchEndX = 0;

  readerContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  readerContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });

  function handleGesture() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      if (currentChapter < chapters.length - 1) {
        displayChapter(currentChapter + 1);
      }
    } else if (touchEndX > touchStartX + swipeThreshold) {
      if (currentChapter > 0) {
        displayChapter(currentChapter - 1);
      }
    }
  }
}

// Construir la lista de capítulos
chapters.forEach((chapter, i) => {
  const li = document.createElement("li");
  li.textContent = chapter.title;
  li.onclick = () => {
    displayChapter(i);
    sidePanel.classList.add("hidden");
  };
  chapterList.appendChild(li);
});

// Toggle menú
menuToggle.onclick = () => {
  sidePanel.classList.toggle("hidden");
};

// Cerrar panel al hacer clic fuera
document.body.addEventListener("click", (e) => {
  if (!sidePanel.contains(e.target) && !menuToggle.contains(e.target)) {
    sidePanel.classList.add("hidden");
  }
});

// Botón volver
document.getElementById("back-btn").onclick = () => {
  window.location.href = "lecturas.html";
};

// Mostrar el primer capítulo al cargar
displayChapter(0);

document.addEventListener("DOMContentLoaded", function () {
  const likeBtn = document.getElementById("like-btn");
  const likeIcon = likeBtn.querySelector("i");

  likeBtn.addEventListener("click", function () {
    likeIcon.classList.toggle("fa-solid");
    likeIcon.classList.toggle("fa-regular");
    likeBtn.classList.toggle("liked");
  });
});

// Comentarios
const commentBtn = document.getElementById("comment-btn");
const commentPanel = document.getElementById("comment-panel");
const closeComments = document.getElementById("close-comments");

commentBtn.addEventListener("click", () => {
  commentPanel.classList.add("show");
});

closeComments.addEventListener("click", () => {
  commentPanel.classList.remove("show");
});

// Agregar nuevo comentario simulado
document.getElementById("send-comment").addEventListener("click", () => {
  const input = document.getElementById("user-comment");
  const text = input.value.trim();
  if (text) {
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `<strong>Tú:</strong> ${text}`;
    document.getElementById("comment-list").appendChild(newComment);
    input.value = "";
  }
});

// Bloquear copiar, seleccionar y clic derecho
document.addEventListener("DOMContentLoaded", () => {
  // Bloquea selección de texto
  document.body.style.userSelect = "none";

  // Bloquea copiar
  document.addEventListener("copy", (e) => {
    e.preventDefault();
  });

  // Bloquea clic derecho
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // Bloquea Ctrl+C
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "c") {
      e.preventDefault();
    }
  });
});


