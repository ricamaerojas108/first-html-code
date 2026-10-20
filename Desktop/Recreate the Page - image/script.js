// Interactive Functionality for CampusHub Activity

const darkModeToggle = document.getElementById('darkModeToggle');
const likeBtn = document.getElementById('likeBtn');
const likeCountSpan = document.getElementById('likeCount');
const resetBtn = document.getElementById('resetBtn');

let likeCount = 24;

// 1. Dark Mode Toggle Switch
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});

// 2. Like Button Click (Increments Counter)
likeBtn.addEventListener('click', () => {
    likeCount++;
    likeCountSpan.textContent = likeCount;
});

// 3. Reset Button Click (Resets Counter to 24)
resetBtn.addEventListener('click', () => {
    likeCount = 24;
    likeCountSpan.textContent = likeCount;
});

// Mo-handle sa Home, Courses, ug Contact navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Para dili mo-refresh o mo-jump sa taas

        // Kuhaon ang 'active' class sa tanan ug ibutang sa gi-click
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');

        // Optional message o alert para makita nimo nga mo-gana sila
        console.log(`Gialerto ang page: ${link.textContent}`);
    });
});