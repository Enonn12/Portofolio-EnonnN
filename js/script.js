// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// animasi scroll
document.addEventListener('DOMContentLoaded', function () {
    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 }); // Memicu animasi ketika 20% elemen terlihat

    let sections = document.querySelectorAll('.about, .skills, .contact-form');
    sections.forEach(section => {
        observer.observe(section);
    });
});
