// PRELOADER
window.addEventListener('load', () => {
    setTimeout(() => { document.getElementById('preloader').classList.add('done'); }, 2000);
});

// CURSOR
const cursor = document.getElementById('cursor'), ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function a() { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(a); })();

// NAV
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 80); }, { passive: true });

// SCROLL REVEAL
document.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); } }, { threshold: .08, rootMargin: '0px 0px -40px 0px' }).observe(el);
});

// GALLERY FILTER with View Transitions
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        const run = () => document.querySelectorAll('.gallery-item').forEach(item => {
            item.classList.toggle('hidden', f !== 'all' && item.dataset.cat !== f);
        });
        document.startViewTransition ? document.startViewTransition(run) : run();
    });
});

// TESTIMONIALS
const track = document.getElementById('testiTrack');
const dots = document.querySelectorAll('.testi-dot');
const prog = document.getElementById('testiProgress');
let cur = 0, total = 5, timer;
function goTo(i) { cur = i; track.scrollTo({ left: track.offsetWidth * i, behavior: 'smooth' }); dots.forEach((d, j) => d.classList.toggle('active', j === i)); prog.style.width = ((i + 1) / total * 100) + '%'; }
dots.forEach(d => d.addEventListener('click', () => { clearInterval(timer); goTo(+d.dataset.idx); start(); }));
track.addEventListener('scroll', () => { const i = Math.round(track.scrollLeft / track.offsetWidth); if (i !== cur) { cur = i; dots.forEach((d, j) => d.classList.toggle('active', j === i)); prog.style.width = ((i + 1) / total * 100) + '%'; } }, { passive: true });
function start() { timer = setInterval(() => goTo((cur + 1) % total), 4500); }
start(); prog.style.width = (1 / total * 100) + '%';

// BEFORE / AFTER SLIDER
const baWrap = document.getElementById('baWrap');
const baAfter = document.getElementById('baAfter');
const baDivider = document.getElementById('baDivider');
let dragging = false;
function setBA(x) {
    const rect = baWrap.getBoundingClientRect();
    let pct = Math.max(5, Math.min(95, ((x - rect.left) / rect.width) * 100));
    baAfter.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    baDivider.style.left = pct + '%';
}
baWrap.addEventListener('mousedown', e => { dragging = true; setBA(e.clientX); });
window.addEventListener('mousemove', e => { if (dragging) setBA(e.clientX); });
window.addEventListener('mouseup', () => dragging = false);
baWrap.addEventListener('touchstart', e => { dragging = true; setBA(e.touches[0].clientX); }, { passive: true });
window.addEventListener('touchmove', e => { if (dragging) setBA(e.touches[0].clientX); }, { passive: true });
window.addEventListener('touchend', () => dragging = false);