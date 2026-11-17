const $ = selector => document.querySelector(selector);

const cta = (title, text) =>
    `<section class="cta"><div class="w"><h2>${title}</h2><p>${text}</p><a class="btn g" href="#contact">Schedule your free review</a></div></section>`;

const hero = (eyebrow, title, text, actions = '') =>
    `<div class="hero"><div class="w fade"><div class="eb">${eyebrow}</div><h1>${title}</h1><p>${text}</p>${actions}</div></div>`;

const faq = questions =>
    questions.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join('');

const PR = {
    'term-life': { i: 'T', n: 'Term Life Insurance', h: 'Precision protection for <em>life’s critical timelines</em>', p: 'Affordable coverage for a set period. Ideal for mortgages, business start-up debts and the years you’re raising children.', who: ['Parents with young children', 'New homeowners', 'Business owners with debt'], st: ['Tell me about your income, debts and goals', 'I compare carriers across the whole market', 'You choose the plan you understand and love'], q: [['How long should a term last?', 'Match it to your longest obligation, such as a mortgage or the years until your children are independent.'], ['Can I convert it later?', 'Many policies include a conversion option to permanent coverage. We’ll check the details together.']] },
    'permanent-iul': { i: 'P', n: 'Permanent & IUL Protection', h: 'Lifelong coverage with <em>cash value growth</em>', p: 'Coverage that stays with you for life, paired with cash accumulation tools to build generation-spanning legacy wealth.', who: ['Families planning legacy transfer', 'Those who’ve maxed other savings', 'Anyone wanting coverage that never expires'], st: ['We review goals, budget and time horizon', 'I model carriers and structures side by side', 'You get a clear illustration, with the risks explained'], q: [['Is IUL a stock market investment?', 'No. Values are linked to an index but are not direct market investments. Caps and non-guaranteed elements vary by carrier.'], ['Are the projections guaranteed?', 'No. Illustrations show concepts only and are not a guarantee of future performance.']] },
    'final-expense': { i: 'F', n: 'Final Expense & Annuities', h: 'Zero-burden planning, <em>guaranteed income layers</em>', p: 'Make sure your family faces no sudden out-of-pocket stress, and explore retirement income options built to last.', who: ['Seniors and pre-retirees', 'Anyone protecting loved ones from costs', 'Savers seeking steadier retirement income'], st: ['We estimate final costs and income needs', 'I compare final expense and annuity options', 'We set it up in plain language, no pressure'], q: [['What does final expense cover?', 'Funeral, burial and related costs, so your family isn’t left to pay them.'], ['What is a fixed index annuity?', 'An insurance contract designed for retirement income, with features that vary by carrier. We’ll walk through every term.']] },
    'health': { i: 'H', n: 'Accident & Health Coverage', h: 'Living benefits that <em>shield your savings</em>', p: 'Strong protection against unexpected medical disruptions and sudden injury costs, including options for immigrants and the self-employed.', who: ['Self-employed and gig workers', 'Newcomers to the U.S.', 'Families wanting a safety net'], st: ['We discuss your health needs and budget', 'I shop accident, health and HMO options', 'You enrol with every cost made clear'], q: [['Can immigrants get coverage?', 'Options depend on status and state. Ask me and I’ll explain what is available.'], ['What does accident coverage do?', 'It pays benefits for covered injuries so a surprise doesn’t drain your savings.']] }
};

const prod = k => {
    const d = PR[k]; return hero('Solutions', d.h, d.p, '<div class="row"><a class="btn g" href="#contact">Get my free review</a><a class="btn o" href="#home">Back home</a></div>') +
        `<section><div class="w two"><div><h2>Who it’s for</h2><ul class="ck">${d.who.map(x => `<li>${x}</li>`).join('')}</ul></div><div class="steps"><h2>How it works</h2>${d.st.map(x => `<p class="step">${x}</p>`).join('')}</div></div></section><section class="alt"><div class="w"><h2>Common questions</h2>${faq(d.q)}</div></section>` + cta('Let’s find the right fit', 'Independent means I work for you, not one carrier.')
};

const pages = {
    home: () => hero('Smart financial education & legacy preservation', 'Protect your family. <em>Build lasting wealth.</em>', 'I’m Sylvanus, an independent broker. I clear away insurance confusion and map a path you can trust, in plain language and without pressure.', '<div class="row"><a class="btn g" href="#contact">Schedule your free review</a><a class="btn o" href="#about">Meet Sylvanus</a></div>') +
        `<section><div class="w"><div class="eb">Your journey</div><h2>Tailored protection for your story</h2><div class="grid">
<a class="card" href="#term-life"><div class="ic">F</div><h3>Family wealth & security</h3><p>Secure your household with protection that grows with your family.</p></a>
<a class="card" href="#veterans"><div class="ic">V</div><h3>Military & veteran portfolios</h3><p>Move from SGLI to independent permanent plans and optimize your benefits.</p></a>
<a class="card" href="#about"><div class="ic">C</div><h3>Community legacy pillars</h3><p>Plain-language tools to build generational wealth for first-generation families.</p></a></div></div></section>
<section class="alt"><div class="w"><div class="eb">Independent brokerage</div><h2>Four ways I can protect you</h2><div class="grid">
${Object.entries(PR).map(([k, d]) => `<a class="card" href="#${k}"><div class="ic">${d.i}</div><h3>${d.n}</h3><p>${d.p.split('.')[0]}.</p></a>`).join('')}</div></div></section>
<section><div class="w two"><div><div class="eb">Try it</div><h2>How much protection might you need?</h2><p class="mu">A quick rule-of-thumb estimate. A free review gives you a real, personalized number.</p></div>
<div class="calc"><label for="inc">Annual income ($)</label><input id="inc" type="number" value="60000" min="0"><label for="yrs">Years to replace income</label><input id="yrs" type="number" value="10" min="1" max="40"><label for="dbt">Debts to cover ($)</label><input id="dbt" type="number" value="150000" min="0"><div class="out" id="out"></div><div class="sm">Illustration only. Not advice or a quote.</div></div></div></section>
<section class="alt"><div class="w"><h2>Why independent?</h2><div class="grid"><div class="card"><h3>Loyal to you</h3><p>No single carrier owns my advice. I shop the market for you.</p></div><div class="card"><h3>Plain language</h3><p>No jargon and no high-pressure tactics. You understand every line.</p></div><div class="card"><h3>Lived experience</h3><p>An immigrant and veteran, I know what transitions feel like.</p></div></div></div></section>`+ cta('Ready to map your strategy?', 'A free, no-pressure review. Call +1 210-504-5636 or send a message.'),
    veterans: () => hero('Military & veteran portfolios', 'Roadmaps for those <em>who serve</em>', 'Transition your protection cleanly from SGLI to independent permanent plans while optimizing your benefits.', '<div class="row"><a class="btn g" href="#contact">Plan my transition</a></div>') + `<section><div class="w two"><div><h2>What we cover</h2><ul class="ck"><li>Moving off SGLI and VGLI before coverage gaps appear</li><li>Replacing group coverage with plans you own</li><li>Protecting your spouse and children long term</li><li>Building wealth as you step into civilian life</li></ul></div><div class="card"><h3>The landlord trap</h3><p>Is your rental property building wealth, or just subsidizing your tenants? We run the numbers honestly, using my Insights on this topic.</p><p style="margin-top:10px"><a href="#insights" style="font-weight:600">Read insights →</a></p></div></div></section>` + cta('Served your country. Let’s protect your family.', 'Free review for active duty, veterans and military families.'),
    about: () => hero('About', 'Sylvanus Akpan', 'Life & Risk Management Consultant, the face behind Slymo Financial.') + `<section><div class="w two"><div class="ph" role="img" aria-label="Portrait placeholder">SA</div><div><h2>Empowering families, veterans and communities through clear financial education</h2><p>Life insurance is too often clouded by jargon and high-pressure sales. I founded Slymo Financial to change that.</p><p>As a licensed independent broker with General Lines authorization across Accident, Life, Health and HMO, my commitment is to you, not one carrier. That independence lets me shop the entire market and build a plan you truly understand.</p><p>As an immigrant and military veteran, I know what it means to protect what matters most. I specialize in turning complex timelines, from active duty to veteran or from immigrant to citizen, into practical financial roadmaps, and in bridging wealth gaps for first-generation and underserved communities.</p><div class="row"><a class="btn" href="#contact">Work with me</a><a class="btn o" style="color:var(--hd)" href="https://www.linkedin.com/in/sylvanus-akpan-2b0056160" target="_blank" rel="noopener">LinkedIn</a></div></div></div></section>`,
    insights: () => hero('Insights', 'Money, <em>made clear</em>', 'Short, plain-language education on wealth, protection and planning.') + `<section><div class="w two"><div class="calc"><h3 style="color:#fff">Rule of 72</h3><p class="sm" style="font-size:.9rem">Estimate how many years it takes money to double.</p><label for="rt">Annual return (%)</label><input id="rt" type="number" value="7" min=".1" step=".1"><div class="out" id="o72"></div><div class="sm">A rough estimate, not a projection of any product.</div></div><div><h2>Why bank savings can lose value</h2><p class="mu">When inflation outpaces what your savings earn, buying power shrinks. Doubling time shows how much return matters over decades.</p></div></div></section><section class="alt"><div class="w"><h2>Topics</h2><div class="grid">${['Term Life: precision protection', 'Permanent & IUL: coverage and cash value', 'Fixed index annuities for retirement', 'Final expense planning with dignity', 'The military landlord trap', 'Family wealth & security strategy'].map(t => `<a class="card" href="#contact"><h3>${t}</h3><p>Ask me about this →</p></a>`).join('')}</div></div></section>`,
    contact: () => hero('Contact', 'Let’s map out <em>your strategy</em>', 'Free, no-pressure review. Tell me a little and I’ll reply personally.') + `<section><div class="w two" style="align-items:start"><form id="f" class="card"><label for="n">Name</label><input id="n" required><label for="e" style="margin-top:12px;display:block">Email</label><input id="e" type="email" required><label for="p" style="margin-top:12px;display:block">Phone (optional)</label><input id="p" type="tel"><label for="i" style="margin-top:12px;display:block">Interested in</label><select id="i"><option>Term Life</option><option>Permanent & IUL</option><option>Final Expense & Annuities</option><option>Accident & Health</option><option>Veteran transition</option></select><label for="m" style="margin-top:12px;display:block">Message</label><textarea id="m" rows="4"></textarea><button class="btn" style="margin-top:16px" type="submit">Send message</button><p class="mu" id="ok" style="font-size:.85rem"></p></form><div><h3>Reach me directly</h3><p><a href="tel:+12105045636">+1 210-504-5636</a><br><a href="mailto:info@slymofinancial.com">info@slymofinancial.com</a><br>5900 Balcone Drive Ste 100, Austin, TX 78731</p><p class="mu">Please don’t send sensitive details like SSNs or health information through this form.</p></div></div></section>`,
    privacy: () => hero('Legal', 'Privacy & disclosures', 'How Slymo Financial handles your information.') + `<section><div class="w" style="max-width:760px"><p>Information you share by form, email or phone is used only to respond and provide requested services. This site doesn’t sell personal data. Please avoid sending sensitive data electronically.</p><p>Content on this site is educational and not legal, tax or investment advice. Illustrations aren’t guarantees. See the full disclosure in the footer.</p><p class="mu">Questions? <a href="mailto:info@slymofinancial.com">info@slymofinancial.com</a></p></div></section>`
};

Object.keys(PR).forEach(k => pages[k] = () => prod(k));

const fmt = number => '$' + Math.round(number).toLocaleString('en-US');

function route() {
    let routeName = location.hash.slice(1);
    if (!pages[routeName]) routeName = 'home';

    $('#app').innerHTML = pages[routeName]();
    document.querySelectorAll('.menu a[data-r]').forEach(link => {
        link.classList.toggle('on', link.dataset.r === routeName);
    });
    $('#menu').classList.remove('open');
    window.scrollTo(0, 0);

    document.title = (PR[routeName] ? PR[routeName].n + ' | ' : '') + 'Slymo Financial';

    if (routeName === 'home') {
        const updateCoverageEstimate = () => {
            const value = selector => Math.max(0, +$(selector).value || 0);
            $('#out').textContent = fmt(
                value('#inc') * value('#yrs') + value('#dbt')
            );
        };

        ['#inc', '#yrs', '#dbt'].forEach(selector => {
            $(selector).oninput = updateCoverageEstimate;
        });
        updateCoverageEstimate();
    }

    if (routeName === 'insights') {
        const updateDoublingTime = () => {
            const rate = +$('#rt').value;
            $('#o72').textContent = rate > 0 ? (72 / rate).toFixed(1) + ' years' : '–';
        };

        $('#rt').oninput = updateDoublingTime;
        updateDoublingTime();
    }

    if (routeName === 'contact') {
        $('#f').onsubmit = event => {
            event.preventDefault();

            const body =
                `Name: ${$('#n').value}%0D%0A` +
                `Phone: ${encodeURIComponent($('#p').value)}%0D%0A` +
                `Interest: ${encodeURIComponent($('#i').value)}%0D%0A%0D%0A` +
                encodeURIComponent($('#m').value);

            $('#ok').textContent = 'Opening your email app to send…';
            location.href = `mailto:info@slymofinancial.com?subject=Free%20review%20request&body=${body}`;
        };
    }
}

addEventListener('hashchange', route);

$('#bg').onclick = () => $('#menu').classList.toggle('open');

$('#yr').textContent = new Date().getFullYear();

route();