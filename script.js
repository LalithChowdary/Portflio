// scripts.js

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
