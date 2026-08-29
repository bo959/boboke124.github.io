
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

const bigPlay = document.querySelector('.big-play');
let playing = false;
bigPlay?.addEventListener('click', () => {
  playing = !playing;
  bigPlay.textContent = playing ? '❚❚' : '▶';
});

const lightbox = document.getElementById('photoLightbox');
const lightboxImg = lightbox?.querySelector('img');
document.querySelectorAll('.photo-card').forEach(card => {
  card.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = card.dataset.full;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});
document.querySelector('.lightbox-close')?.addEventListener('click', () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
});
lightbox?.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
  }
});
