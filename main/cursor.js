document.body.style.cursor = 'none'; // Oculta el cursor original

const varita = document.createElement('img');
varita.src = 'image/varita.png'; // Ruta de la imagen de la varita
varita.className = 'varita'; // Añade la clase CSS a la imagen
document.body.appendChild(varita); // Añade la imagen al cuerpo del documento

document.addEventListener('mousemove', (e) => {
    varita.style.left = e.pageX + 'px'; // Establece la posición horizontal de la varita
    varita.style.top = e.pageY + 'px'; // Establece la posición vertical de la varita
});
