// ===========================
// FUNCIONALIDAD INTERACTIVA
// ===========================

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Agregar clase activa al navbar al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Efecto de click en botones
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Crear ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = ripple.style.height = '30px';
        ripple.style.pointerEvents = 'none';
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 15) + 'px';
        ripple.style.top = (e.clientY - rect.top - 15) + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Animación de cards al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.servicio-card, .ventaja-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Función para solicitar presupuesto
function solicitarPresupuesto() {
    const mensaje = "¡Excelente! Nos pondremos en contacto contigo pronto para tu presupuesto. Espera nuestra llamada.";
    alert(mensaje);
    console.log("Solicitud de presupuesto enviada");
}

document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    if (btn.textContent.includes('Presupuesto') || btn.textContent.includes('Contactar')) {
        btn.addEventListener('click', solicitarPresupuesto);
    }
});

// Log de información útil
console.log('%c Mudanzas Jesús - Sitio Web', 'color: #000; font-size: 16px; font-weight: bold;');
console.log('Bienvenido al sitio de Mudanzas Jesús. Colores corporativos: Negro #000000, Blanco #FFFFFF');
