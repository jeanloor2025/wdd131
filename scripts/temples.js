// Menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuToggle.classList.toggle('active');
  // Cambia el icono entre hamburguesa y 'X'
  if (menuToggle.textContent === "✖") {
      menuToggle.textContent = "☰";
  } else {
      menuToggle.textContent = "✖";
  }
});

// Cierra el menú si se hace click fuera del nav en móvil
window.addEventListener('click', (e) => {
  if (window.innerWidth < 700 && nav.classList.contains('show')) {
    if (!nav.contains(e.target) && e.target !== menuToggle) {
      nav.classList.remove('show');
      menuToggle.classList.remove('active');
      menuToggle.textContent = "☰";
    }
  }
});

// Footer dinámico
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified.split(" ")[0];