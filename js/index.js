/* ================================================================
   index.js — Portafolio CV · Sergio Garduño Jardón
   ================================================================ */

'use strict';

/* ---------------------------------------------------------------
   TRADUCCIONES
   --------------------------------------------------------------- */
const translations = {
  en: {
    name: 'Sergio Garduño Jardón',
    'profile-title': 'Profile',
    'nav-profile': 'Profile',
    'nav-profile-subtitle': 'Introduction',
    'nav-projects': 'Projects',
    'nav-experience': 'Experience',
    'nav-achievements': 'Achievements',
    'nav-courses': 'Courses',
    'nav-education': 'Education',
    'nav-skills': 'Skills',
    'nav-contact': 'Contact',
    'nav-td': 'TD',
    'nav-td-subtitle': 'Digital Card',
    'profile-p1': 'Mechatronics Engineer and Full Stack Developer with hands-on experience in IoT systems, modern web applications, and technology-driven sustainability solutions. Proven background across the full product lifecycle: responsive frontends, serverless backends, relational databases, secure authentication, real-time workflows, and automated continuous delivery.',
    'profile-p2': 'Skilled in Vue 3, TypeScript, Supabase, PostgreSQL, REST APIs, and automated testing (Vitest, Zod), alongside embedded hardware design (ESP32, sensors, solar power systems, and Python/pandas data analysis). Passionate about engineering impactful digital and hardware solutions where code, sustainability, and data converge.',
    'carta-title': 'View Introduction',
    'carta-p1': 'Sergio Garduño Jardón is a Mechatronics Engineer from IPN UPIITA and Full Stack Developer who bridges modern software engineering and embedded hardware to create sustainable, scalable technology solutions.',
    'carta-p2': 'From developing comprehensive Full Stack platforms like <strong>EcoGuía SOS</strong>—incorporating Vue 3, TypeScript, Supabase, PostgreSQL, interactive maps with MapLibre, Cloudflare R2 storage, CI/CD, and automated tests—to designing autonomous <strong>IoT systems for green roofs</strong> with ESP32, solar energy management, and real-time analytics, Sergio applies engineering discipline to real-world challenges.',
    'carta-p3': 'Driven by continuous learning, environmental preservation, and technological innovation, Sergio delivers reliable solutions through clean architecture, thorough testing, strict security policies (RLS, RBAC), and organized project workflows with Notion.',
    'copy-btn-text': 'Copy Text',
    'btn-download-carta-text': 'Download PDF',
    'btn-view-cv-text': 'View CV',
    'btn-download-cv-text': 'Download CV',
    'proyectos-title': 'Projects',
    'exp-title': 'Work Experience',
    'ecogaia-role': 'EcoGuía SOS — Full Stack Web Platform',
    'ecogaia-dates': '2024 – Present · Remote / CDMX',
    'ecogaia-badge-web': '🌐 Visit EcoGuía SOS',
    'ecogaia-desc': 'Comprehensive environmental impact SPA/PWA connecting organizations, local stakeholders, and volunteers with interactive tools and verified green initiatives.',
    'ecogaia-f1': 'Responsive SPA/PWA architecture built with Vue 3, TypeScript, Vite, Pinia, and Vue Router for seamless desktop, tablet, and mobile experience.',
    'ecogaia-f2': 'Interactive geospatial mapping using MapLibre with geolocation, route discovery, and environmental points of interest.',
    'ecogaia-f3': 'Complete authentication and granular authorization (RBAC) for Admins, Stakeholders, and Volunteers with verification, content moderation, and approval flows.',
    'ecogaia-f4': 'Real-time notifications, support center, image upload/optimization pipeline integrating Supabase Storage and Cloudflare R2 (S3-compatible).',
    'ecogaia-f5': 'Robust quality & security: data validation with Zod, unit/integration testing with Vitest and jsdom, Sentry error monitoring, Vercel Analytics, Speed Insights, and PostgreSQL Row Level Security (RLS).',
    'ecogaia-f6': 'Automated CI/CD workflows via GitHub Actions ensuring TypeScript strict checks, automated tests, and production builds.',
    'iot-role': 'Autonomous IoT System for Green Roofs — Thesis Project',
    'iot-dates': '2023 – 2025 · Field Validated',
    'iot-desc': 'Design and deployment of an autonomous thermal and environmental monitoring system validating urban microclimate improvements on green roofs.',
    'iot-l1': 'Engineered solar-powered, battery-managed sensor nodes with ESP32 microcontrollers for long-term outdoor reliability.',
    'iot-l2': 'Implemented automated data pipelines and dashboards streaming telemetry to Google Sheets / SQL, analyzed with Python and pandas.',
    'iot-l3': 'Statistically confirmed substantial thermal insulation and heat island mitigation in validated field trials.',
    'iot-links': 'Green Roof Project Links',
    'iot-btn1': '🌐 Live Dashboard',
    'iot-btn2': '📊 Telemetry Data (Google Sheets)',
    'iot-btn3': '📘 Read Thesis (PDF)',
    'robo-role': 'Robodacta — Design and Sales',
    'robo-dates': '2024 – 2025',
    'robo-l1': 'Design of educational STEM robotics kits, online course curricula, packaging, and audiovisual materials; supplier and client sales management.',
    'meta-role': 'METAMORFOZIZ — Advertising and Production',
    'meta-dates': '2021 – 2022',
    'meta-l1': 'Graphic design, technical production of banners and signage, material logistics, and large-format printing quality control.',
    'ventas-role': 'Sales Representative — Coyoacán',
    'ventas-dates': '2021 – 2022',
    'ventas-l1': 'Direct customer relationship management, B2C and B2B sales execution, POS cash management, and inventory tracking.',
    'serv-role': 'Hardware & Electronics Technical Service (Self-Employed)',
    'serv-dates': '2018 – 2020',
    'serv-l1': 'Diagnostic, board-level repair, and maintenance of electronic devices; components procurement, inventory control, and customer service.',
    'logros-title': 'Achievements',
    'logros-l1': 'Architected, developed, and deployed the full-stack EcoGuía SOS platform with live community engagement, CI/CD, and cloud storage.',
    'logros-l2': 'Designed and field-validated an autonomous IoT environmental monitoring network powered by solar energy for green roof evaluation.',
    'logros-l3': 'Participant at the National Biotechnology Congress (Oaxaca, 2025).',
    'cursos-title': 'Certifications & Courses',
    'cursos-l1': 'Seminar: Industrial Manufacturing Automation Design and Programmable Logic Devices Integration.',
    'cursos-l2': 'Data Analysis with Python (pandas, NumPy) — Applied modeling and data pipelines.',
    'cursos-l3': 'Modern Web Architecture & Full Stack Testing (Vue, TypeScript, Vitest, PostgreSQL).',
    'cursos-l4': 'English: B2.',
    'acad-title': 'Education',
    'acad-uni-title': 'IPN — National Polytechnic Institute',
    'acad-eng-title': 'Mechatronics Engineering (UPIITA - IPN)',
    'acad-eng-dates': '2019 – 2025',
    'acad-tech-title': 'Technician in Business Administration',
    'acad-tech-dates': '2015 – 2018 · CECyT 13 "Ricardo Flores Magón" (IPN)',
    'contact-title': 'Contact',
    'btn-linkedin-title': 'View LinkedIn Profile',
    'tech-skills-title': 'Technologies and Tools',
    'soft-skills-title': 'Soft Skills & Management',
    'skill-cat-fullstack': 'Full Stack Web Development',
    'skill-cat-qa-sec': 'Quality, Security & DevOps',
    'skill-cat-iot': 'IoT, Hardware & Mechatronics',
    'skill-cat-mgmt': 'Project Management',
    'skill-notion-desc': 'Organization of projects, groups, documentation, and task tracking.',
    'soft-l1': 'Agile project coordination and task tracking with Notion',
    'soft-l2': 'Engineering problem-solving & clean code practices',
    'soft-l3': 'Cross-functional teamwork & multidisciplinary leadership',
    'soft-l4': 'Adaptability and continuous technology learning',
    'soft-l5': 'Effective technical and business communication',
    'soft-l6': 'English: B2.',
    'footer-name': 'Sergio Garduño Jardón',
    'footer-source': 'Hosted on GitHub Pages',
    'footer-contact': 'Contact: sgj.cheko@gmail.com',
  },
  es: {
    name: 'Sergio Garduño Jardón',
    'profile-title': 'Perfil',
    'nav-profile': 'Perfil',
    'nav-profile-subtitle': 'Carta de Presentación',
    'nav-projects': 'Proyectos',
    'nav-experience': 'Experiencia',
    'nav-achievements': 'Logros',
    'nav-courses': 'Cursos',
    'nav-education': 'Formación',
    'nav-skills': 'Habilidades',
    'nav-contact': 'Contacto',
    'nav-td': 'TD',
    'nav-td-subtitle': 'Tarjeta Digital',
    'proyectos-title': 'Proyectos',
    'exp-title': 'Experiencia Laboral',
    'carta-title': 'Ver Carta de Presentación',
    'btn-download-carta-text': 'Descargar PDF',
    'copy-btn-text': 'Copiar Texto',
    'footer-contact': 'Contacto: sgj.cheko@gmail.com',
    'profile-p1': 'Ingeniero Mecatrónico y Desarrollador Full Stack con experiencia en sistemas IoT, aplicaciones web y soluciones tecnológicas orientadas a la sostenibilidad. Experiencia en todo el ciclo de vida del producto: interfaces web responsivas, backend serverless, bases de datos relacionales, autenticación segura, flujos en tiempo real y despliegue continuo.',
    'profile-p2': 'Dominio práctico de Vue 3, TypeScript, Supabase, PostgreSQL, APIs REST y pruebas automatizadas (Vitest, Zod), combinado con el diseño de hardware embebido (ESP32, sensores, gestión de energía solar y análisis de datos con Python/pandas). Apasionado por crear soluciones tecnológicas con impacto real donde convergen el software moderno, la ingeniería y el medio ambiente.',
    'carta-p1': 'Sergio Garduño Jardón es Ingeniero Mecatrónico por la UPIITA del IPN y Desarrollador Full Stack que combina el desarrollo de software moderno con la ingeniería de hardware embebido para construir soluciones tecnológicas robustas y sostenibles.',
    'carta-p2': 'Desde el desarrollo integral de la plataforma Full Stack <strong>EcoGuía SOS</strong> —implementando Vue 3, TypeScript, Supabase, PostgreSQL, mapas interactivos con MapLibre, almacenamiento en Cloudflare R2, CI/CD y pruebas automatizadas— hasta el diseño de <strong>sistemas IoT autónomos para techos verdes</strong> con ESP32, gestión de energía solar y análisis de datos en tiempo real, Sergio aplica rigor de ingeniería a problemas reales.',
    'carta-p3': 'Comprometido con la innovación y el trabajo en equipo, asegura calidad a través de buenas prácticas de arquitectura, pruebas rigurosas, políticas de seguridad granulares (RLS, RBAC) y metodologías organizadas de gestión de proyectos con Notion.',
    'ecogaia-role': 'EcoGuía SOS — Plataforma Web Full Stack',
    'ecogaia-dates': '2024 – Presente · Remoto / CDMX',
    'ecogaia-badge-web': '🌐 Visitar EcoGuía SOS',
    'ecogaia-desc': 'Plataforma SPA/PWA integral de impacto ambiental que conecta organizaciones, actores locales y voluntarios mediante herramientas interactivas e iniciativas verdes verificadas.',
    'ecogaia-f1': 'Arquitectura SPA/PWA responsiva construida con Vue 3, TypeScript, Vite, Pinia y Vue Router, optimizada para computadora, tablet y móvil.',
    'ecogaia-f2': 'Mapas interactivos geoespaciales con MapLibre, geolocalización, búsqueda de rutas y puntos de interés ecológico.',
    'ecogaia-f3': 'Autenticación completa y permisos granulares por rol (RBAC) para Administradores, Actores y Voluntarios con flujos de aprobación y moderación.',
    'ecogaia-f4': 'Notificaciones en tiempo real, centro de soporte y pipeline de carga/optimización de imágenes integrando Supabase Storage y Cloudflare R2 (compatible con S3).',
    'ecogaia-f5': 'Calidad y seguridad: validación con Zod, pruebas unitarias e integración con Vitest y jsdom, monitoreo de errores con Sentry, Vercel Analytics, Speed Insights y Row Level Security (RLS) en PostgreSQL.',
    'ecogaia-f6': 'Flujos de integración continua (CI/CD) en GitHub Actions con verificación estricta de TypeScript, tests automatizados y builds de producción optimizados.',
    'iot-role': 'Sistema IoT Autónomo para Techos Verdes — Proyecto de Tesis',
    'iot-dates': '2023 – 2025 · Validado en campo',
    'iot-desc': 'Diseño y despliegue de un sistema de monitoreo térmico y ambiental autónomo para cuantificar el impacto microclimático en techos verdes urbanos.',
    'iot-l1': 'Desarrollo de nodos de sensado con microcontroladores ESP32 y sistema de alimentación fotovoltaica con gestión de baterías para operación continua.',
    'iot-l2': 'Implementación de pipeline de datos y dashboard telemétrico con sincronización en Google Sheets / SQL y procesamiento analítico en Python (pandas).',
    'iot-l3': 'Validación estadística en campo que demostró reducción significativa de temperatura y mitigación de islas de calor urbanas.',
    'iot-links': 'Enlaces del Proyecto Techo Verde',
    'iot-btn1': '🌐 Dashboard en Tiempo Real',
    'iot-btn2': '📊 Hoja de Datos (Google Sheets)',
    'iot-btn3': '📘 Ver Tesis (PDF)',
    'logros-title': 'Logros',
    'logros-l1': 'Diseño, desarrollo y despliegue de la plataforma Full Stack EcoGuía SOS con comunidad activa, CI/CD y almacenamiento distribuido.',
    'logros-l2': 'Prototipo IoT autónomo alimentado por energía solar validado exitosamente en campo para monitoreo térmico en techos verdes.',
    'logros-l3': 'Participante en el Congreso Nacional de Biotecnología (Oaxaca, 2025).',
    'cursos-title': 'Cursos y Certificaciones',
    'cursos-l1': 'Seminario: Diseño de la automatización de la manufactura e integración de dispositivos lógicos programables.',
    'cursos-l2': 'Análisis de datos con Python (pandas, NumPy) — Modelado práctico y pipelines de telemetría.',
    'cursos-l3': 'Arquitectura Web Moderna y Pruebas Full Stack (Vue, TypeScript, Vitest, PostgreSQL).',
    'cursos-l4': 'Inglés: B2.',
    'tech-skills-title': 'Tecnologías y herramientas',
    'skill-cat-fullstack': 'Desarrollo Full Stack',
    'skill-cat-qa-sec': 'Calidad, Seguridad y DevOps',
    'skill-cat-iot': 'IoT, Hardware y Mecatrónica',
    'skill-cat-mgmt': 'Gestión de Proyectos',
    'skill-notion-desc': 'Organización de proyectos, grupos, documentación y seguimiento de tareas.',
    'soft-l1': 'Gestión ágil de proyectos y seguimiento de tareas con Notion',
    'soft-l2': 'Resolución ingenieril de problemas y código limpio',
    'soft-l3': 'Trabajo en equipo multidisciplinario y liderazgo colaborativo',
    'soft-l4': 'Capacidad de adaptación y aprendizaje tecnológico continuo',
    'soft-l5': 'Comunicación asertiva técnica y de producto',
    'soft-l6': 'Inglés: B2.',
  },
};

let currentLanguage = 'es';

/* ---------------------------------------------------------------
   TRADUCCIÓN
   --------------------------------------------------------------- */
function applyText(element, text) {
  if (!element) return;
  // Si es un <strong> que contiene un <img>, actualizar solo el <span> hijo
  if (element.tagName === 'STRONG' && element.querySelector('img')) {
    const textSpan = element.querySelector('span');
    if (textSpan) {
      textSpan.innerHTML = text;
      return;
    }
  }
  element.innerHTML = text;
}

function translatePage(lang) {
  currentLanguage = lang;
  const t = translations[lang] || translations.es;
  const isEnglish = lang === 'en';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (!el.getAttribute('data-es-original')) {
      el.setAttribute('data-es-original', el.innerHTML);
    }
    let text = '';
    if (t[key] !== undefined) {
      text = t[key];
    } else if (lang === 'es') {
      text = el.getAttribute('data-es-original') || '';
    } else {
      text = el.getAttribute('data-es-original') || el.innerHTML;
    }
    if (text) applyText(el, text);
  });

  // Actualiza atributos href dinámicos (CV en inglés)
  document.querySelectorAll('[data-lang-href-en]').forEach(btn => {
    const originalHref = btn.getAttribute('data-es-href') || btn.getAttribute('href');
    if (!btn.getAttribute('data-es-href')) btn.setAttribute('data-es-href', originalHref);
    btn.setAttribute('href', isEnglish ? btn.getAttribute('data-lang-href-en') : originalHref);
  });

  // Actualiza atributos title dinámicos
  document.querySelectorAll('[data-lang-title-en]').forEach(el => {
    const originalTitle = el.getAttribute('data-es-title') || el.getAttribute('title');
    if (!el.getAttribute('data-es-title')) el.setAttribute('data-es-title', originalTitle);
    const enKey = el.getAttribute('data-lang-title-en');
    el.setAttribute('title', isEnglish ? (translations.en[enKey] || originalTitle) : originalTitle);
  });

  document.getElementById('flag-es')?.classList.toggle('active', lang === 'es');
  document.getElementById('flag-en')?.classList.toggle('active', lang === 'en');
}

// Exposición global para los botones inline onclick="translatePage('es')"
window.translatePage = translatePage;

/* ---------------------------------------------------------------
   PRELOADER
   --------------------------------------------------------------- */
const preloaderEl = document.getElementById('preloader');
const loadingTextEl = document.getElementById('loading-text-container');
const MAX_REPEATS = 1;
let repeatCount = 0;

function animateText() {
  if (!loadingTextEl) return;

  // Construye los <span> una sola vez
  if (loadingTextEl.children.length === 0) {
    const text = loadingTextEl.textContent;
    loadingTextEl.textContent = '';
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${i * 0.08}s`;
      loadingTextEl.appendChild(span);
    });
  }

  loadingTextEl.classList.add('animate');

  const totalDelay = loadingTextEl.children.length * 80 + 300;
  setTimeout(() => {
    loadingTextEl.classList.remove('animate');
    repeatCount++;
    if (repeatCount < MAX_REPEATS) {
      setTimeout(animateText, 500);
    } else {
      hidePreloader();
    }
  }, totalDelay);
}

function hidePreloader() {
  const nameToType = 'Sergio Garduño Jardón';
  if (preloaderEl) {
    preloaderEl.classList.add('hidden');
    document.body.classList.add('loaded');
    startTypewriterEffect(nameToType);
    setTimeout(() => { preloaderEl.style.display = 'none'; }, 500);
  } else {
    startTypewriterEffect(nameToType);
  }
}

/* ---------------------------------------------------------------
   TYPEWRITER
   --------------------------------------------------------------- */
function startTypewriterEffect(name) {
  const el = document.getElementById('typewriter-name-container');
  if (!el) return;

  el.textContent = '';
  el.classList.add('typewriter-title', 'visible');

  let i = 0;
  const SPEED = 75;

  (function typeChar() {
    if (i < name.length) {
      el.textContent += name.charAt(i++);
      setTimeout(typeChar, SPEED);
    } else {
      el.style.borderRight = 'none'; // Oculta cursor al terminar
      el.style.whiteSpace = 'normal'; // Permite salto de línea fluido en móviles
    }
  })();
}

/* ---------------------------------------------------------------
   ANIMACIONES DE SCROLL (IntersectionObserver)
   --------------------------------------------------------------- */
function setupCardAnimations() {
  const targets = Array.from(document.querySelectorAll('.card, footer'));

  // Si el usuario prefiere movimiento reducido o no hay IntersectionObserver
  if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(el => el.classList.add('is-visible'));
    document.querySelectorAll('#perfil .profile-text, #perfil .inner-details')
      .forEach(el => el.classList.add('visible'));
    return;
  }

  let delayCounter = 0;
  let resetTimeout = null;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const target = entry.target;
      obs.unobserve(target);

      // Retraso progresivo sutil entre tarjetas
      const currentDelay = delayCounter * 80;
      delayCounter++;
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => { delayCounter = 0; }, 300);

      setTimeout(() => {
        target.classList.add('is-visible');
        if (target.id === 'perfil') {
          target.querySelectorAll('.profile-text, .inner-details')
            .forEach(el => el.classList.add('visible'));
        }
      }, currentDelay);
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.12 });

  targets.forEach(el => {
    observer.observe(el);
  });
}

/* ---------------------------------------------------------------
   ILUMINACIÓN RADIAL SIGUIENDO EL CURSOR (DESKTOP)
   --------------------------------------------------------------- */
function setupCardSpotlight() {
  // Solo en dispositivos con puntero fino y soporte de hover real
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!isFinePointer || isReducedMotion) return;

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // Añadir contenedor de spotlight si no existe
    if (!card.querySelector('.card-spotlight')) {
      const spotlight = document.createElement('div');
      spotlight.className = 'card-spotlight';
      spotlight.setAttribute('aria-hidden', 'true');
      card.appendChild(spotlight);
    }

    let ticking = false;

    card.addEventListener('mousemove', (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
          ticking = false;
        });
        ticking = true;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '-999px');
      card.style.setProperty('--mouse-y', '-999px');
    });
  });
}

/* ---------------------------------------------------------------
   BOTÓN COMPARTIR
   --------------------------------------------------------------- */
function setupShareButton() {
  const btn = document.getElementById('share-button-main');
  if (!btn) return;

  if (navigator.share) {
    btn.addEventListener('click', () => {
      navigator.share({
        title: 'Sergio Garduño | Portafolio Digital',
        text: '¡Hola! Te invito a visitar mi Portafolio Digital y ver mis proyectos.',
        url: window.location.href.split('#')[0],
      }).catch(err => console.warn('Share cancelado:', err));
    });
  }
  // En desktop sin soporte, el botón permanece visible pero no hace nada dañino
}

/* ---------------------------------------------------------------
   FLIP AVATAR → QR
   --------------------------------------------------------------- */
function setupAvatarFlip() {
  const container = document.getElementById('avatar-container-main');
  const img = document.getElementById('avatar-img-main');
  if (!container || !img) return;

  const SRC_PHOTO = 'img/profilecv.webp';
  const SRC_QR = 'img/QRPD.png';
  let isQr = false;

  function toggleAvatar() {
    isQr = !isQr;
    img.src = isQr ? SRC_QR : SRC_PHOTO;
    img.alt = isQr ? 'Código QR de Contacto' : 'Sergio Garduño Jardón';
    container.classList.toggle('qr-mode', isQr);
    const label = isQr
      ? (currentLanguage === 'en' ? 'Click to return to photo' : 'Clic para volver a la foto')
      : (currentLanguage === 'en' ? 'Click for QR' : 'Clic para QR');
    container.title = label;
    container.setAttribute('aria-label', label);
  }

  container.addEventListener('click', toggleAvatar);
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAvatar();
    }
  });
}

/* ---------------------------------------------------------------
   COPIAR CARTA DE PRESENTACIÓN
   --------------------------------------------------------------- */
function setupCopyCarta() {
  const btn = document.getElementById('copy-carta-btn-bottom');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const t = translations[currentLanguage];
    const fullText = [t['carta-p1'], t['carta-p2'], t['carta-p3']]
      .filter(Boolean)
      .map(p => p.replace(/<\/?strong>/g, ''))
      .join('\n\n');

    if (!navigator.clipboard?.writeText) return;

    navigator.clipboard.writeText(fullText).then(() => {
      const icon = btn.querySelector('i');
      const span = btn.querySelector('span');
      const originalText = t['copy-btn-text'] || 'Copiar Texto';

      if (icon) icon.className = 'fa-solid fa-check';
      if (span) span.textContent = currentLanguage === 'en' ? 'Copied!' : '¡Copiado!';
      btn.classList.add('copied');

      setTimeout(() => {
        if (icon) icon.className = 'fa-regular fa-copy';
        if (span) span.textContent = originalText;
        btn.classList.remove('copied');
      }, 1500);
    }).catch(err => console.error('Error al copiar:', err));
  });
}

/* ---------------------------------------------------------------
   MENÚ LATERAL
   --------------------------------------------------------------- */
function setupMenu() {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const navbar = document.getElementById('side-navbar');
  if (!toggleBtn || !navbar) return;

  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('expanded');
    document.body.classList.toggle('menu-expanded');
    toggleBtn.setAttribute('aria-expanded', navbar.classList.contains('expanded'));
  });
  toggleBtn.setAttribute('aria-expanded', navbar.classList.contains('expanded'));
}

/* ---------------------------------------------------------------
   INICIALIZACIÓN
   --------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Año en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Guardar textos originales en español antes de traducir
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (!el.getAttribute('data-es-original')) {
      el.setAttribute('data-es-original', el.innerHTML);
    }
  });

  translatePage(currentLanguage);
  setupMenu();
  setupCardAnimations();
  setupCardSpotlight();
  setupShareButton();
  setupAvatarFlip();
  setupCopyCarta();

  // Preloader (si el usuario no prefiere movimiento reducido)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animateText();
  } else {
    hidePreloader();
  }
});
