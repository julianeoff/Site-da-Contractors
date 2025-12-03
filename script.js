// ===== MENU MOBILE TOGGLE =====
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// ===== NAVEGAÇÃO E SCROLL SUAVE =====
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove classe active de todos os links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Adiciona classe active ao link clicado
        link.classList.add('active');
        
        // Fecha menu mobile
        navMenu.classList.remove('active');
        
        // Scroll suave para a seção
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ATUALIZAÇÃO DO MENU DURANTE SCROLL =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// ===== EFEITO GLOWING NOS CARDS DE OPERAÇÕES =====
document.querySelectorAll('.operation-card').forEach(card => {
    const glowEffect = card.querySelector('.glow-effect');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        glowEffect.style.background = `radial-gradient(circle 100px at ${x}px ${y}px, rgba(255, 255, 255, 0.3), transparent)`;
    });
    
    card.addEventListener('mouseleave', () => {
        glowEffect.style.background = 'transparent';
    });
});

// ===== HERO CAROUSEL DE IMAGENS =====
const heroImages = document.querySelectorAll('.hero-gallery-img');
let heroImageIndex = 0;

const setHeroImage = (index) => {
    heroImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
};

if (heroImages.length > 0) {
    setHeroImage(heroImageIndex);

    setInterval(() => {
        heroImageIndex = (heroImageIndex + 1) % heroImages.length;
        setHeroImage(heroImageIndex);
    }, 5000);
}