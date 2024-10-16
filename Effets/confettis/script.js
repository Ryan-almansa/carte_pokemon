function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');

    for (let i = 0; i < 1000; i++) { 
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Position
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * -100 + 'vh'; 
        confetti.style.backgroundColor = randomColor(); 

        //taille 
        const size = Math.random() * 30 + 5 + 'px';
        confetti.style.width = size;
        confetti.style.height = size;

        // animation
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; 

        confettiContainer.appendChild(confetti);
    }
}

// couleur aléatoire
function randomColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFC300', '#DAF7A6', '#FF33FF', '#33FFF3', '#F3FF33', '#C70039', '#900C3F'];
    return colors[Math.floor(Math.random() * colors.length)];
}

createConfetti();
