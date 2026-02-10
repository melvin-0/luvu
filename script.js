// Floating Hearts
for(let i=0; i<25; i++){
    let h = document.createElement('div');
    h.className = 'heart';
    h.innerText = '❤️';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDelay = Math.random() * 7 + 's';
    document.body.appendChild(h);
}

// Scroll Animation
const fades = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
    fades.forEach(f => {
        if(f.getBoundingClientRect().top < window.innerHeight - 100){
            f.classList.add('show');
        }
    });
});

// Slideshow
let slideIndex = 0;
function runSlideshow() {
    const slides = document.querySelectorAll('.slideshow img');
    if(slides.length === 0) return;
    slides.forEach(s => s.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
    setTimeout(runSlideshow, 3000);
}
document.addEventListener('DOMContentLoaded', runSlideshow);

// Controls
let playing = false;
function toggleMusic() {
    const m = document.getElementById('bgMusic');
    if(!playing) { m.play(); playing = true; } 
    else { m.pause(); playing = false; }
}
function toggleNight() { document.body.classList.toggle('night'); }
function yesEnding() { document.getElementById('cinematic').classList.add('show'); }
function openEyesReveal() { document.getElementById('eyesOverlay').classList.add('show'); }
function closeEyesReveal() { document.getElementById('eyesOverlay').classList.remove('show'); }

// Running No Button
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

function moveButton() {
    const x = Math.random() * (window.innerWidth * 0.5);
    const y = Math.random() * 150;
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}