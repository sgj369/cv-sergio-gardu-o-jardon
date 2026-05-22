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
    'profile-p1': 'Mechatronics Engineer specializing in IoT systems, data, and sustainable solutions. I design, develop, and deploy environmental monitoring systems that integrate hardware (ESP32 and sensors), renewable energy, and data pipelines (Google Sheets / SQL, dashboards).',
    'profile-p2': 'Programming expertise in Python, C++/Arduino, and Google Apps Script to automate processes and create analytical models focused on optimizing resources and supporting decision-making. I seek to collaborate on projects that merge technology and nature to generate a positive environmental impact.',
    'carta-title': 'View Introduction',
    'carta-p1': 'Introducing Sergio Garduño Jardón, a Mechatronics Engineer from IPN UPIITA convinced that technology and nature can and must coexist. His passion for life and the environment drives him to find innovative ways to use knowledge to aid our planet, specializing in the development of <strong>IoT systems for ecological monitoring</strong>.',
    'carta-p2': 'Sergio designs and develops systems that allow us to \'listen\' to the environment\'s needs. A clear example is his thesis project on <strong>green roofs</strong>, where he implemented a complete autonomous monitoring system—from hardware with ESP32 and sensors to data analysis—demonstrating how technology can validate and enhance sustainable solutions. His goal is to continue applying mechatronics, programming, and data to projects that generate a positive environmental impact.',
    'carta-p3': 'Beyond the technical, he is passionate about learning more about flora and fauna, connecting with actors generating pro-planet actions through the <strong>ECOGUIASOS</strong> project, and actively participating in cleanup or habitat restoration events like reforestation. Sergio firmly believes that action combined with the right knowledge always yields better results.',
    'copy-btn-text': 'Copy Text',
    'btn-download-carta-text': 'Download PDF',
    'btn-view-cv-text': 'View CV',
    'btn-download-cv-text': 'Download CV',
    'proyectos-title': 'Personal Projects',
    'exp-title': 'Work Experience',
    'ecogaia-role': 'Eco Guia SOS — Environmental Impact Platform',
    'ecogaia-dates': '2024 – Present · CDMX',
    'ecogaia-l1': 'Development and implementation of a web platform for management and dissemination of environmental calls and projects.',
    'ecogaia-l2': 'Responsible for data organization, visualization, and local stakeholder support.',
    'ecogaias-btn': '🌐 Visit Eco Guia SOS',
    'iot-role': 'IoT System for Green Roofs — Thesis Project',
    'iot-dates': '2023 – 2025 · Field Validated',
    'iot-l1': 'Design and deployment of an autonomous thermal monitoring system with ESP32, sensors, and solar power.',
    'iot-l2': 'Development of data pipeline and dashboard for validating thermal reduction on green roofs.',
    'iot-links': 'Project Green Roof Links',
    'iot-btn1': '🌐 Dashboard',
    'iot-btn2': '📊 Data Sheet (Sheets)',
    'iot-btn3': '📘 View Thesis',
    'robo-role': 'Robodacta — Design and Sales',
    'robo-dates': '2022 – 2024',
    'robo-l1': 'Design of educational kits, packaging, online courses, and audiovisual material; management of suppliers and sales.',
    'meta-role': 'METAMORFOZIZ — Advertising and Production',
    'meta-dates': '2021 – 2022',
    'meta-l1': 'Graphic design, production of banners and signs, management of printing materials and processes.',
    'ventas-role': 'Sales (Local) — Coyoacán',
    'ventas-dates': '2021 – 2022',
    'ventas-l1': 'Direct customer service, management of B2C and B2B sales, cash register operation, and inventory control.',
    'serv-role': 'Technical Service (Own Business)',
    'serv-dates': '2018 – 2020',
    'serv-l1': 'Repair of electronic devices, purchase and sale of spare parts, inventory control, and customer service.',
    'logros-title': 'Achievements',
    'logros-l1': 'IoT prototype validated in the field for thermal and energy monitoring (Thesis).',
    'logros-l2': 'Technical participation in the National Biotechnology Congress (Oaxaca, 2025).',
    'logros-l3': 'Implementation and development of the Eco Gaia SOS platform.',
    'cursos-title': 'Courses & Certificates',
    'cursos-l1': 'Seminar: Design of manufacturing automation and integration of programmable devices.',
    'cursos-l2': 'Course/Self-study: Python for data analysis (pandas) — practical projects.',
    'cursos-l3': 'Certification in progress: English B2.',
    'acad-title': 'Academic Background',
    'acad-uni-title': 'IPN Polytechnic',
    'acad-eng-title': 'Mechatronics Engineering (UPIITA)',
    'acad-eng-dates': '2018 - 2024',
    'acad-tech-title': 'Technician in Business Administration',
    'acad-tech-dates': '2015 – 2018',
    'contact-title': 'Contact',
    'btn-linkedin-title': 'View Full Profile on LinkedIn',
    'tech-skills-title': 'Technical Skills',
    'soft-skills-title': 'Soft Skills',
    'skill-cpp': 'C++ / Arduino',
    'skill-python': 'Python (pandas)',
    'skill-esp32': 'ESP32 & sensors',
    'skill-sql': 'SQL & Google Sheets',
    'skill-solar': 'Solar Panels & Batteries',
    'skill-apps-script': 'Google Apps Script',
    'soft-l1': 'Leadership',
    'soft-l2': 'Creativity and innovation',
    'soft-l3': 'Project planning and management',
    'soft-l4': 'Teamwork',
    'soft-l5': 'Adaptability',
    'soft-l6': 'Certification in progress: English B2.',
    'footer-name': 'Sergio Garduño Jardón',
    'footer-source': 'Made with GitHub Pages',
    'footer-contact': 'Contact: sgj.cheko@gmail.com',
  },
  es: {
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
    'proyectos-title': 'Proyectos Personales',
    'exp-title': 'Experiencia Laboral',
    'carta-title': 'Ver Carta de Presentación',
    'btn-download-carta-text': 'Descargar PDF',
    'copy-btn-text': 'Copiar Texto',
    'footer-contact': 'Contacto: sgj.cheko@gmail.com',
    'carta-p1': 'Sergio Garduño Jardón es Ingeniero Mecatrónico por el IPN de UPIITA convencido de que la tecnología y la naturaleza pueden y deben coexistir. Su pasión por la vida y el medio ambiente lo impulsa a buscar formas innovadoras de utilizar el conocimiento para auxiliar a nuestro planeta, especializándose en el desarrollo de sistemas <strong>IoT para el monitoreo ecológico</strong>.',
    'carta-p2': 'Sergio diseña y desarrolla sistemas que nos permiten \'escuchar\' las necesidades del entorno. Un claro ejemplo es su proyecto de tesis sobre <strong>techos verdes</strong>, donde implementó un sistema de monitoreo autónomo completo —desde el hardware con ESP32 y sensores, hasta el análisis de datos— demostrando cómo la tecnología puede validar y potenciar soluciones sostenibles. Su objetivo es seguir aplicando la mecatrónica, la programación y los datos en proyectos que generen un impacto ambiental positivo.',
    'carta-p3': 'Más allá de lo técnico, le apasiona conocer más sobre flora y fauna, además de conectar con actores por medio del proyecto <strong>ECOGUIASOS</strong> que generan acciones en pro del planeta y participar activamente en eventos de limpieza o restauración de hábitats. Sergio cree firmemente que la acción combinada con el conocimiento adecuado siempre tendrá un mejor resultado.',
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
const MAX_REPEATS = 2;
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
    }
  })();
}

/* ---------------------------------------------------------------
   ANIMACIONES DE SCROLL (IntersectionObserver)
   --------------------------------------------------------------- */
function setupCardAnimations() {
  const targets = document.querySelectorAll('.card, footer');

  if (typeof IntersectionObserver === 'undefined') {
    targets.forEach(el => el.classList.add('is-visible'));
    document.querySelectorAll('#perfil .profile-text, #perfil .inner-details')
      .forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);

      if (entry.target.id === 'perfil') {
        entry.target.querySelectorAll('.profile-text, .inner-details')
          .forEach(el => el.classList.add('visible'));
      }
    });
  }, { rootMargin: '0px', threshold: 0.1 });

  targets.forEach(el => {
    // Evita animar los hijos de secciones desplegables (ya están visibles por defecto)
    if (!el.closest('#proyectos') && !el.closest('#experiencia') &&
      !el.closest('#logros') && !el.closest('#cursos')) {
      observer.observe(el);
    }
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

  container.addEventListener('click', () => {
    isQr = !isQr;
    img.src = isQr ? SRC_QR : SRC_PHOTO;
    img.alt = isQr ? 'Código QR de Contacto' : 'Sergio Garduño Jardón';
    container.classList.toggle('qr-mode', isQr);
    container.title = isQr
      ? (currentLanguage === 'en' ? 'Click to return to photo' : 'Clic para volver a la foto')
      : (currentLanguage === 'en' ? 'Click for QR' : 'Clic para QR');
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
