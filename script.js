// Initialize Lucide Icons
lucide.createIcons();

let currentLang = 'ko';

function toggleLanguage() {
    const btn = document.querySelector('.lang-toggle');
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    
    // Update button text
    btn.textContent = currentLang === 'ko' ? 'EN' : 'KO';
    
    // Update all translatable elements
    document.querySelectorAll('[data-ko]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) {
            if (text.includes('<br>') || text.includes('</span>')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update form placeholders
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector('textarea');
    
    if (nameInput && emailInput && messageInput) {
        if (currentLang === 'en') {
            nameInput.placeholder = "Your Name";
            emailInput.placeholder = "email@example.com";
            messageInput.placeholder = "How can we help?";
        } else {
            nameInput.placeholder = "이름을 입력하세요";
            emailInput.placeholder = "이메일 주소";
            messageInput.placeholder = "무엇을 도와드릴까요?";
        }
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const isHidden = menu.classList.contains('hidden');
    
    if (isHidden) {
        menu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('py-3', 'shadow-sm');
        nav.classList.remove('py-5');
    } else {
        nav.classList.remove('py-3', 'shadow-sm');
        nav.classList.add('py-5');
    }
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Select elements to animate
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('#products > div > div, #story > div > div, #contact > div');
    animateElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
});
