window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }

    const imagen = document.querySelector('.presentacion__imagen');
    const rect = imagen.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        imagen.classList.add('visible');
    }
});

window.addEventListener('load', function() {
    const titulo = document.querySelector('.presentacion__contenido__titulo');
    const imagen = document.querySelector('.presentacion__imagen');

    titulo.classList.add('visible');

    // Añadir la clase 'animate' para la animación al cargar la página
    imagen.classList.add('animate');

    // Quitar la clase 'animate' después de la animación para permitir hover
    setTimeout(() => {
        imagen.classList.remove('animate');
    }, 3000); // Duración igual al tiempo de la transición
    
});

// Añadir la clase 'visible' en hover si no está
document.querySelector('.presentacion__imagen').addEventListener('mouseenter', function() {
    this.classList.add('visible');
});
document.querySelector('.presentacion__contenido__titulo').addEventListener('mouseenter', function() {
    this.classList.add('visible');
});
// Añadir suavidad al desplazamiento de anclajes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const elementos = document.querySelectorAll('.proyecto__titulo, .proyecto__descripcion, .proyecto__imagen');
    elementos.forEach(elemento => {
        const rect = elemento.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            elemento.classList.add('visible');
        }
    });


window.addEventListener('load', function() {
    document.querySelectorAll('.mis-proyectos__titulo, .proyecto__titulo, .proyecto__descripcion, .proyecto__imagen').forEach(element => {
        element.classList.add('visible');
    });
});