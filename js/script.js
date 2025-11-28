// Clase principal para la aplicación del portafolio
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.enlazarEventos();
        this.activarBarraHabilidades();
        this.activarNavegacion();
    }

    enlazarEventos() {
        // Navegación responsiva
        document.getElementById('icono-nav').addEventListener('click', this.responsiveMenu.bind(this));

        // Enlaces de navegación
        const enlaces = document.querySelectorAll('#links a');
        enlaces.forEach(enlace => {
            enlace.addEventListener('click', (e) => {
                this.seleccionar(e.target);
            });
        });
    }

    seleccionar(link) {
        // Remover clase seleccionado de todos los enlaces
        document.querySelectorAll('#links a').forEach(a => {
            a.classList.remove('seleccionado');
        });

        // Añadir clase seleccionado al enlace clickeado
        link.classList.add('seleccionado');

        // Cerrar menú responsive
        document.getElementById('nav').classList.remove('responsive');
    }

    responsiveMenu() {
        const nav = document.getElementById('nav');
        nav.classList.toggle('responsive');
    }

    // Activar animación de habilidades
    activarBarraHabilidades() {
        const observer = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    this.animarHabilidades();
                    observer.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    animarHabilidades() {
        // Descomentando la funcionalidad de las barras de habilidades
        setTimeout(() => {
            document.getElementById("html").classList.add("barra-progreso1");
            document.getElementById("js").classList.add("barra-progreso2");
            document.getElementById("bd").classList.add("barra-progreso3");
            document.getElementById("ps").classList.add("barra-progreso4");
        }, 300);
    }

    activarNavegacion() {
        // Añadir scroll suave a los enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});