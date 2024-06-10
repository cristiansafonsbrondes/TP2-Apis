document.body.style.cursor = 'none'; // Oculta el cursor original

const varita = document.createElement('img');
varita.src = 'image/varita.png'; // Asegúrate de que la ruta a la imagen es correcta
varita.className = 'varita'; // Añade la clase CSS a la imagen
document.body.appendChild(varita);

document.addEventListener('mousemove', (e) => {
    varita.style.left = e.pageX + 'px';
    varita.style.top = e.pageY + 'px';
});
