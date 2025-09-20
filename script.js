// script.js

// Dono zaroori elements ko ID se select karein
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Hamburger icon par click hone par function chalayein
hamburger.addEventListener('click', () => {
    // nav-links par 'active' class ko lagayein ya hatayein
    navLinks.classList.toggle('active');
});