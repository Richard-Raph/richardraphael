// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function anim() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * .12; ry += (my - ry) * .12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(anim);
})();

// Scroll reveal
const revEls = document.querySelectorAll('.reveal');
new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: .1, rootMargin: '0px 0px -60px 0px' }).observe ?
    revEls.forEach(el => new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), 100); } });
    }, { threshold: .1 }).observe(el)) : null;

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 80 ? 'rgba(8,8,8,.97)' : '';
});

// Gallery filter with View Transitions API
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        const doFilter = () => {
            galleryItems.forEach(item => {
                const match = f === 'all' || item.dataset.cat === f;
                item.classList.toggle('hidden', !match);
            });
        };
        if (document.startViewTransition) {
            document.startViewTransition(doFilter);
        } else {
            doFilter();
        }
    });
});

// Testimonials slider
const track = document.getElementById('testiTrack');
const dots = document.querySelectorAll('.testi-dot');
const progress = document.getElementById('testiProgress');
const total = 5;
let current = 0;
let autoTimer;

function goTo(idx) {
    current = idx;
    const slideW = track.offsetWidth;
    track.scrollTo({ left: slideW * idx, behavior: 'smooth' });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    progress.style.width = ((idx + 1) / total * 100) + '%';
}

// dot clicks
dots.forEach(d => d.addEventListener('click', () => {
    clearInterval(autoTimer);
    goTo(+d.dataset.idx);
    startAuto();
}));

// sync dots on native scroll
track.addEventListener('scroll', () => {
    const idx = Math.round(track.scrollLeft / track.offsetWidth);
    if (idx !== current) {
        current = idx;
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        progress.style.width = ((idx + 1) / total * 100) + '%';
    }
}, { passive: true });

function startAuto() {
    autoTimer = setInterval(() => {
        goTo((current + 1) % total);
    }, 4500);
}
startAuto();
progress.style.width = ((1) / total * 100) + '%';