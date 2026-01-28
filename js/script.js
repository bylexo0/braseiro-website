document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle
    const langSwitch = document.getElementById('lang-toggle');
    const body = document.body;

    const savedLang = localStorage.getItem('language') || 'fr';
    setLanguage(savedLang);

    langSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        const currentLang = body.classList.contains('lang-fr') ? 'fr' : 'en';
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        body.classList.remove('lang-fr', 'lang-en');
        body.classList.add(`lang-${lang}`);
        localStorage.setItem('language', lang);
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // init

    // Simple Menu Filtering
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const target = btn.dataset.target;
            menuCategories.forEach(cat => {
                if (target === 'all' || cat.id === target) {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = 'none';
                }
            });
        });
    });
});
