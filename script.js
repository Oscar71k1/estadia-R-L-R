function iniciarAdmisión() {
  alert("Redirigiendo al proceso de admisión...");
  // window.location.href = 'URL_DE_ADMISION'; // Descomenta si tienes una URL
}

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".galeria img");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Opcional: deja de observar después de animar
      }
    });
  }, {
    threshold: 0.1
  });

  images.forEach(img => {
    observer.observe(img);
  });
});
