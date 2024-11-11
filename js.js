const container = document.querySelector('.container');

// Función para crear una burbuja
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Tamaño aleatorio
    const size = Math.random() * 60 + 20; // Tamaño entre 20 y 80px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Posición aleatoria
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 3 + 3}s`; // Duración entre 3 y 6 segundos
    
    // Agrega el evento para "explotar" la burbuja al pasar el cursor
    bubble.addEventListener('mouseover', () => {
        bubble.style.display = 'none';
    });
    
    container.appendChild(bubble);
    
    // Elimina la burbuja después de que termine la animación
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Crear burbujas continuamente
setInterval(createBubble, 500);

// Cambiar el color de fondo al hacer clic en la pantalla
document.addEventListener('click', () => {
    const colors = ['#FFB6C1', '#E6E6FA', '#FFFACD', '#D3FFCE', '#ADD8E6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});