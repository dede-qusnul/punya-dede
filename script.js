const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

mobileMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});


const typingText = document.getElementById("typing-text");

// Teks yang ingin ditampilkan
const text = "Hi, I'm Dede. Welcome to my portfolio!";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Kecepatan mengetik (100ms per karakter)
    }
}

// Memulai efek mengetik saat halaman dimuat
window.onload = typeEffect;

const accordionButton = document.querySelector('.accordion-button');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebar-close');

// Menampilkan sidebar ketika tombol di klik
accordionButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

// Menutup sidebar ketika celah diklik
sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('show');
});

// Menutup sidebar ketika mengklik di luar sidebar
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !accordionButton.contains(event.target)) {
        sidebar.classList.remove('show');
    }
});

// Menambahkan event listener untuk tombol jika diperlukan
document.getElementById("shuffle-button").addEventListener("click", function() {
    const experienceRows = document.querySelectorAll('.experience-row');
    
    experienceRows.forEach((row, index) => {
        // Jika indeks ganjil, tambahkan kelas reverse untuk membalikkan urutan
        if (index % 2 === 0) {
            row.classList.add('reverse');
        } else {
            row.classList.remove('reverse');
        }
    });
});

