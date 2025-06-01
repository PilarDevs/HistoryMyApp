document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.getElementById("edit-btn");
  const saveBtn = document.getElementById("save-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const profilePicBtn = document.getElementById("change-pic-btn");
  const profilePicInput = document.getElementById("profile-pic-input");
  const profilePic = document.getElementById("profile-pic");
  const usernameInput = document.getElementById("username");
  const descriptionInput = document.getElementById("description");

  const defaultImage = "img/user.png";

  // Panel de cambio de contraseña
  const changePasswordBtn = document.getElementById("change-password-btn");
  const passwordPanel = document.querySelector(".password-panel");
  const savePasswordBtn = document.getElementById("save-password-btn");
  const cancelPasswordBtn = document.getElementById("cancel-password-btn");

  // Activar edición
  editBtn?.addEventListener("click", () => {
    usernameInput.readOnly = false;
    descriptionInput.readOnly = false;
    saveBtn.disabled = false;
    cancelBtn.disabled = false;
    editBtn.disabled = true;
  });

  // Cancelar cambios
  cancelBtn?.addEventListener("click", () => {
    usernameInput.readOnly = true;
    descriptionInput.readOnly = true;
    saveBtn.disabled = true;
    cancelBtn.disabled = true;
    editBtn.disabled = false;
  });

  // Cambiar foto de perfil
  profilePicBtn?.addEventListener("click", () => {
    profilePicInput.click();
  });

  profilePicInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        profilePic.src = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      profilePic.src = defaultImage;
    }
  });

  // Botón para mostrar el panel de cambio de contraseña
  changePasswordBtn?.addEventListener("click", () => {
    passwordPanel.classList.toggle("hidden");
  });

  // Botón para cancelar el cambio de contraseña
  cancelPasswordBtn?.addEventListener("click", () => {
    document.getElementById("new-password").value = "";
    document.getElementById("confirm-password").value = "";
    passwordPanel.classList.add("hidden");
  });

  // Botón para "guardar" la nueva contraseña (solo muestra un mensaje ahora)
  savePasswordBtn?.addEventListener("click", () => {
    alert("¡Contraseña guardada! (esto es solo visual, no tiene funcionalidad real)");
    document.getElementById("new-password").value = "";
    document.getElementById("confirm-password").value = "";
    passwordPanel.classList.add("hidden");
  });

  // Mostrar imagen por defecto si no hay foto
  if (!profilePic.src || profilePic.src.endsWith(defaultImage)) {
    profilePic.src = defaultImage;
  }

  // Botón para volver a la página anterior
  const backBtn = document.getElementById("back-btn");
  backBtn?.addEventListener("click", () => {
    window.history.back(); // vuelve a la página anterior de verdad
  });
});
