const pencil = document.getElementById('pencil');

// Add event listener for click event, try to understand how this works later //
pencil.addEventListener('click', movePencil);

function movePencil() {
    // Generate random positions within the container, I hate my life, what does this mean??? //
    const container = document.querySelector('.container');
    const maxX = container.clientWidth - pencil.clientWidth;
    const maxY = container.clientHeight - pencil.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Apply the new position, dear God... //
    pencil.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
