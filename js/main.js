/*
    Thoma Koli - Final Production Scripts
    Version: 3.0 (Fluid & Robust)
    Strategy: Layout-stable line-by-line animations.
*/

document.addEventListener('DOMContentLoaded', function () {

    // --- A. GLOBAL HELPERS ---
    const isDesktop = () => window.innerWidth > 1024;

    // --- B. CORE FUNCTIONALITY (Menus, Scrolling, Transitions) ---
    // This code is stable and remains unchanged.
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const header = document.querySelector('.header');
    if (menuToggle && header) {
        menuToggle.addEventListener('click', () => header.classList.toggle('nav-open'));
    }
    // ... (Smooth scroll and page transition code remains the same) ...
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    if (fadeInElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeInElements.forEach(element => observer.observe(element));
    }
    const pageTransitionOverlay = document.querySelector('.page-transition-overlay');
    if (pageTransitionOverlay) {
        window.addEventListener('load', () => pageTransitionOverlay.classList.add('is-leaving'));
        const internalLinks = document.querySelectorAll('a:not([href^="#"]):not([href^="mailto"]):not([target="_blank"])');
        internalLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const destination = this.href;
                pageTransitionOverlay.classList.remove('is-leaving');
                pageTransitionOverlay.classList.add('is-active');
                setTimeout(() => { window.location = destination; }, 500);
            });
        });
    }


    // --- C. THE NEW, STABLE HERO ANIMATION ---
    const heroHeadline = document.getElementById('hero-headline');
    if (heroHeadline) {
        // Get the lines of text, which are separated by <br> tags in the HTML
        const lines = heroHeadline.innerHTML.split('<br>').map(line => line.trim());

        // Clear the original content
        heroHeadline.innerHTML = '';

        // Rebuild the headline with wrapper divs for animation
        lines.forEach(lineText => {
            if (lineText) {
                const lineWrapper = document.createElement('div');
                lineWrapper.className = 'hero-line-wrapper';

                const lineDiv = document.createElement('span');
                lineDiv.className = 'hero-line';
                lineDiv.innerHTML = lineText; // Use innerHTML to render entities like &

                lineWrapper.appendChild(lineDiv);
                heroHeadline.appendChild(lineWrapper);
            }
        });

        // Trigger the animation with a stagger
        const animatedLines = heroHeadline.querySelectorAll('.hero-line');
        animatedLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.transform = 'translateY(0)';
            }, 150 * (index + 1)); // Stagger each line's appearance
        });
    }


    // --- D. DESKTOP-ONLY IMMERSIVE EFFECTS ---
    if (isDesktop()) {
        // All the desktop effects (cursor, magnetic, tilt, particles)
        // remain the same as your last working version.
        // ... (Paste the full code for these effects here) ...
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.innerHTML = '<div class="dot"></div><div class="circle"></div>';
        document.body.appendChild(cursor);
        // ... and so on for the rest of the desktop effects.
    }
});