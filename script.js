document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Campaign Detail Toggle
    const detailBtns = document.querySelectorAll('.reveal-details');
    detailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.campaign-card');
            const details = card.querySelector('.campaign-details');
            
            const isActive = details.classList.contains('active');
            document.querySelectorAll('.campaign-details').forEach(d => d.classList.remove('active'));
            document.querySelectorAll('.reveal-details').forEach(b => b.textContent = 'View Details');

            if (!isActive) {
                details.classList.add('active');
                e.target.textContent = 'Hide Details';
            }
        });
    });

    // Cert Toggle
    const certBtns = document.querySelectorAll('.reveal-cert');
    certBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.previousElementSibling;
            const isExpanded = container.style.height !== '0px' && container.style.height !== '';
            
            if (isExpanded) {
                container.style.height = '0px';
                e.target.textContent = 'View Certificate';
            } else {
                container.style.height = 'auto';
                e.target.textContent = 'Hide Certificate';
            }
        });
    });

    // 3. ScrollReveal Animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false // Animations only happen once
    });

    // Apply reveals
    sr.reveal('.reveal-top', { origin: 'top' });
    sr.reveal('.reveal-bottom', { origin: 'bottom' });
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
    
    // Staggered Reveals
    sr.reveal('.skill-card', { interval: 100 });
    sr.reveal('.process-step', { interval: 150 });
    sr.reveal('.campaign-card', { interval: 200 });
    sr.reveal('.project-item', { interval: 200 });

    // 4. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
