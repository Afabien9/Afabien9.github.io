window.onload = function() {
  if (window.VANTA && window.VANTA.HALO) {
    VANTA.HALO({
      el: "#halo",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      baseColor: 0x131a43, // Couleur de base (bleu nuit)
      backgroundColor: 0x0  // Fond noir pour l'animation
    });
  } else {
    console.error("Vanta ou Three ne sont pas chargés correctement.");
  }
};