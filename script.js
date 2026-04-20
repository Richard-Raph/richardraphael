let mx = 0, my = 0, rx = 0, ry = 0;
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
const date = document.querySelector('footer :first-child');

// date.textContent = new Date().getFullYear();

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.transform = `translate(${mx - 3}px,${my - 3}px)`;
});

(function anim() {
    rx += (mx - rx) * .12; ry += (my - ry) * .12;
    ring.style.transform = `translate(${rx - 14}px,${ry - 14}px)`;
    requestAnimationFrame(anim);
})();

document.querySelectorAll('a,button,.tag,.cert,.pr,.exp-item,.edu-c,.stat').forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.style.width = '42px';
        ring.style.height = '42px';
        ring.style.borderColor = 'rgba(200,255,87,.6)'
    });
    el.addEventListener('mouseleave', () => {
        ring.style.width = '28px';
        ring.style.height = '28px';
        ring.style.borderColor = 'rgba(200,255,87,.3)'
    });
});

document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(b => b.classList.remove('on'));
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));
        btn.classList.add('on');
        document.getElementById('t-' + btn.dataset.t).classList.add('on');
    });
});

const obs = new IntersectionObserver(e => {
    e.forEach(x => { if (x.isIntersecting) x.target.classList.add('in') });
}, { threshold: .07 });

document.querySelectorAll('.rv').forEach(el => obs.observe(el));