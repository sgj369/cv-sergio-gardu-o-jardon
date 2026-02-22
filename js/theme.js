/* ================================================================
   theme.js — Dark / Light mode toggle
   ================================================================ */

'use strict';

const STORAGE_KEY = 'sgj-theme';
const ROOT = document.documentElement;

function applyTheme(theme) {
    ROOT.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
}

function toggleTheme() {
    const current = ROOT.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Aplica el tema guardado antes de que el DOM renderice (evita flash)
(function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY) || 'dark';
    applyTheme(saved);
})();

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) btn.addEventListener('click', toggleTheme);
});
