/* ================================================================
   td.js — Tarjeta Digital · Sergio Garduño Jardón
   ================================================================ */

'use strict';

/* ---------------------------------------------------------------
   PRELOADER
   --------------------------------------------------------------- */
const TEXT_TO_ANIMATE = 'Cargando';
const MAX_REPEATS = 2;
let repeatCount = 0;
let loadingTextEl;

function animateText() {
    if (!loadingTextEl) return;

    loadingTextEl.innerHTML = '';
    loadingTextEl.classList.remove('animate');

    TEXT_TO_ANIMATE.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${i * 50}ms`;
        loadingTextEl.appendChild(span);
    });

    setTimeout(() => loadingTextEl.classList.add('animate'), 100);

    const duration = (TEXT_TO_ANIMATE.length * 50) + 1000;
    setTimeout(() => {
        repeatCount++;
        if (repeatCount < MAX_REPEATS) {
            animateText();
        } else {
            hidePreloader();
        }
    }, duration);
}

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('hidden');
    setTimeout(() => {
        document.body.classList.add('loaded');
        startTypewriterEffect();
        setupCardAnimations();
    }, 500);
}

/* ---------------------------------------------------------------
   TYPEWRITER
   --------------------------------------------------------------- */
const TYPEWRITER_NAME = 'Sergio Garduño Jardón';

function startTypewriterEffect() {
    const el = document.getElementById('typewriter-name');
    if (!el) return;

    el.textContent = '';
    el.style.setProperty('--typewriter-width-name', `${TYPEWRITER_NAME.length}ch`);
    el.classList.add('visible');

    let i = 0;
    const SPEED = 75;

    (function typeChar() {
        if (i < TYPEWRITER_NAME.length) {
            el.textContent += TYPEWRITER_NAME.charAt(i++);
            setTimeout(typeChar, SPEED);
        } else {
            el.style.borderRight = 'none';
        }
    })();
}

/* ---------------------------------------------------------------
   ANIMACIONES DE SCROLL
   --------------------------------------------------------------- */
function setupCardAnimations() {
    const targets = document.querySelectorAll('.card, footer');

    if (!('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('is-visible'));
        document.getElementById('perfil-text-content')?.classList.add('visible');
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, idx) => {
            if (!entry.isIntersecting) return;
            setTimeout(() => {
                entry.target.classList.add('is-visible');
                if (entry.target.id === 'perfil') {
                    document.getElementById('perfil-text-content')?.classList.add('visible');
                }
            }, idx * 100);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.1 });

    targets.forEach(el => observer.observe(el));
}

/* ---------------------------------------------------------------
   FLIP AVATAR → QR
   --------------------------------------------------------------- */
function setupAvatarFlip() {
    const container = document.getElementById('avatar-container');
    const img = document.getElementById('avatar-img');
    if (!container || !img) return;

    const SRC_PHOTO = 'img/perfil.png';
    const SRC_QR = 'img/QRTD.png';
    let isQr = false;

    container.addEventListener('click', () => {
        isQr = !isQr;
        img.src = isQr ? SRC_QR : SRC_PHOTO;
        img.alt = isQr ? 'Código QR de Contacto' : 'Sergio Garduño Jardón';
        container.classList.toggle('qr-mode', isQr);
        container.title = isQr ? 'Clic para volver a la foto' : 'Clic para QR';
    });
}

/* ---------------------------------------------------------------
   BOTÓN COPIAR DATOS DE CONTACTO (IZQUIERDA)
   --------------------------------------------------------------- */
function setupCopyLinkButton() {
    const btn = document.getElementById('copy-link-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const data = [
            'Sergio Garduño Jardón',
            'Correo: sgj.cheko@gmail.com',
            'WhatsApp: +52 1 55 8686 4746',
            `Portafolio: ${window.location.href}`,
        ].join('\n');

        navigator.clipboard.writeText(data).then(() => {
            const icon = btn.querySelector('i');
            const originalClass = icon?.className;
            if (icon) icon.className = 'fa-solid fa-check';
            btn.classList.add('copied');
            setTimeout(() => {
                if (icon) icon.className = originalClass;
                btn.classList.remove('copied');
            }, 2000);
        }).catch(err => console.error('Error copia:', err));
    });
}

/* ---------------------------------------------------------------
   BOTÓN COMPARTIR (DERECHA)
   --------------------------------------------------------------- */
function setupShareButton() {
    const btn = document.getElementById('share-btn');
    if (!btn) return;

    btn.addEventListener('click', async () => {
        const shareData = {
            title: 'Sergio Garduño Jardón',
            text: '¡Hola! Revisa la tarjeta digital de Sergio Garduño.',
            url: window.location.href,
        };
        if (navigator.share) {
            try { await navigator.share(shareData); }
            catch (err) { console.warn('Share cancelado:', err); }
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert('¡Enlace copiado al portapapeles!'))
                .catch(() => alert('No se pudo copiar el enlace.'));
        }
    });
}

/* ---------------------------------------------------------------
   PARTÍCULAS
   --------------------------------------------------------------- */
function initParticles() {
    if (typeof particlesJS === 'undefined') return;
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ['#FFD700', '#63b96f', '#0077b6', '#eef1f0'] },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
            opacity: { value: 0.6, random: false, anim: { enable: false } },
            size: { value: 3, random: true, anim: { enable: false } },
            line_linked: { enable: true, distance: 150, color: '#a3a3a3', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 3, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false },
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 150, duration: 0.4 }, push: { particles_nb: 4 } },
        },
        retina_detect: true,
    });
}

/* ---------------------------------------------------------------
   INICIALIZACIÓN
   --------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // Año en el footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    loadingTextEl = document.getElementById('loading-text-container');

    initParticles();
    setupAvatarFlip();
    setupCopyLinkButton();
    setupShareButton();
    animateText();
});
