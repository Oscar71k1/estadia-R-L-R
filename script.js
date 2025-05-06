
document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector(".galeria-scroll-track");
  const originalGallery = document.querySelector(".galeria-custom[data-original='true']");

  if (!track || !originalGallery) {
    console.error("Elementos de la galería no encontrados.");
    return;
  }

  // --- Configuración ---
  const cloneCount = 4; // Número de clones (ajusta según necesites para llenar el espacio + loop)
  const animationDuration = 60; // Duración en segundos para un ciclo completo (ajusta la velocidad)
  // --------------------

  let galleryWidth = originalGallery.offsetWidth + 15; // Ancho del grid + gap derecho

  // Clonar la galería
  for (let i = 0; i < cloneCount; i++) {
    const clone = originalGallery.cloneNode(true);
    clone.removeAttribute("data-original"); // Quitar el marcador del clon
    track.appendChild(clone);
  }

  // Animación con GSAP
  let tween = gsap.to(track, {
    x: () => -(galleryWidth * cloneCount) + "px", // Mueve el track la distancia de los clones
    ease: "none", // Movimiento lineal constante
    duration: animationDuration * cloneCount, // Duración total ajustada por clones
    repeat: -1, // Repetir infinitamente
    // Modificador para resetear la posición y crear el bucle "infinito"
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % galleryWidth) // Asegura que el valor x se reinicie
    }
  });

  // Opcional: Pausar al pasar el ratón
  const wrapper = document.querySelector(".galeria-scroll-wrapper");
  if (wrapper) {
    wrapper.addEventListener("mouseenter", () => tween.pause());
    wrapper.addEventListener("mouseleave", () => tween.play());
  }

});
