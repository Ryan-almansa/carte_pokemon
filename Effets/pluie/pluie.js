function createRaindrop() {
    const rainContainer = document.getElementById('rain-container');
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
  
    // Positionner la goutte 
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
  
    // Durée aléatoire 
    raindrop.style.animationDuration = `${0.5 + Math.random()}s`;
  
    // Ajouter la goutte 
    rainContainer.appendChild(raindrop);
  
    // Supprimer eau
    setTimeout(() => {
      rainContainer.removeChild(raindrop);
    }, 1000);
  }
  
  // Créer des gouttes 
  setInterval(createRaindrop, 0.1);
  