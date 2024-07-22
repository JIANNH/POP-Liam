let counter = 0;
const counterElement = document.getElementById('counter');
const popcat = document.getElementById('popcat');
const popSound = document.getElementById('popSound');

popcat.addEventListener('mousedown', () => {
    popcat.src = 'open.jpg';
    popSound.currentTime = 0; // Reset the sound to start from the beginning
    popSound.play();
    counter++;
    counterElement.textContent = counter;
});

popcat.addEventListener('mouseup', () => {
    popcat.src = 'closed.jpg';
});
