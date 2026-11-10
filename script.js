// JS chalne par hi reveal animation start hogi (warna content visible rahega)
document.documentElement.classList.add('js');

/* ---------- NAVBAR (mobile menu) ---------- */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- SKILLS DATA ---------- */
// icon: icons/ folder ki file ka path. Jiska icon nahi hai wahan sirf naam dikhega.
// Naye icons download kiye hain toh us skill mein icon: 'icons/naam.svg' add kar do.
const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Java' },
      { name: 'Python', icon: 'icons/python.svg' },
      { name: 'JavaScript', icon: 'icons/javascript.svg' },
      { name: 'SQL', icon: 'icons/database.svg' }
    ]
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: 'icons/html.svg' },
      { name: 'CSS' },
      { name: 'Bootstrap' },
      { name: 'React', icon: 'icons/react.svg', note: 'basic' }
    ]
  },
  {
    title: 'Backend & Frameworks',
    items: [
      { name: 'Node.js', icon: 'icons/nodejs.svg' },
      { name: 'Streamlit' }
    ]
  },
  {
    title: 'CS Fundamentals',
    items: [
      { name: 'Operating Systems', note: 'basics' },
      { name: 'DBMS', note: 'basics' }
    ]
  }
];

document.getElementById('skillList').innerHTML = skillGroups.map((g) => `
  <div class="skill-group reveal">
    <h3>${g.title}</h3>
    <div class="skill-items">
      ${g.items.map((s) => `
        <span class="skill">
          ${s.icon ? `<img src="${s.icon}" alt="${s.name} icon" onerror="this.remove()">` : ''}
          ${s.name}
          ${s.note ? `<small>(${s.note})</small>` : ''}
        </span>
      `).join('')}
    </div>
  </div>
`).join('');

/* ---------- PROJECTS DATA ---------- */
// icon: icons/ folder ki file. iconSvg: jinke file nahi hai unke liye inline SVG.
const lockSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
const keySvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9"/><path d="m16 7 3 3"/><path d="m14 9 2 2"/></svg>';

const projects = [
  {
    icon: 'icons/database.svg',
    tag: 'Data Visualization · Full-Stack',
    title: 'SchemaLens',
    desc: 'A database visualization tool that shows table structure and relationships as an interactive schema graph.',
    points: [
      'Primary / foreign key relationships',
      'Interactive schema graph',
      'Table & column search',
      'Relationship highlighting',
      'Table details panel',
      'Zoom controls'
    ],
    tech: ['React', 'React Flow', 'Node.js', 'Express', 'MySQL'],
    code: 'https://github.com/kanishka373/SchemaLens'
  },
  {
    icon: 'icons/file-search.svg',
    tag: 'AI-Powered Resume Analysis',
    title: 'ResuTrack',
    desc: 'An AI-powered Streamlit application designed to help users analyze and improve resumes for Applicant Tracking Systems.',
    points: [
      'AI-powered resume scoring',
      'Missing-skill detection',
      'PDF report generation',
      'Resume comparison',
      'Multi-template resume builder',
      'Live trending-skills analytics',
      'Job search using Adzuna API',
      'Resume history & dashboard'
    ],
    tech: ['Python', 'Streamlit', 'Groq AI', 'SQLite', 'PyPDF2', 'ReportLab', 'Plotly', 'Adzuna API'],
    code: 'https://github.com/kanishka373/Resutrack-AI',
    // Link chalta hai ya nahi ek baar browser mein check kar lena, nahi chalta toh ye line hata dena
    live: 'https://resumind.streamlit.app'
  },
  {
    icon: 'icons/shield-check.svg',
    tag: 'AI Security · Full-Stack',
    title: 'PromptShield',
    desc: 'A security-focused web app that detects sensitive information such as API keys, passwords, tokens and credentials in text before it gets shared.',
    points: [
      '8 secret categories detected',
      'Weighted risk score (0–100)',
      'Instant masking with safe placeholders',
      'Live client-side demo',
      'JWT auth & bcrypt hashing',
      'Scan history with PDF/CSV export'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    code: 'https://github.com/kanishka373/PromptShield'
  },
  {
    icon: 'icons/wallet.svg',
    tag: 'Finance · Full-Stack',
    title: 'ExpenseFlow',
    desc: 'A full-stack personal expense tracker with real-time budgeting, analytics and a glassmorphism UI, backed by secure multi-user authentication.',
    points: [
      'JWT auth & bcrypt hashing',
      'Income & expense CRUD',
      'Filtering, search & sorting',
      'Monthly & category budgets',
      'Chart.js analytics',
      'Transaction data export'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL (Supabase)', 'JWT', 'Chart.js'],
    code: 'https://github.com/kanishka373/Expense-Flow',
    live: 'https://expense-flowkd.netlify.app/'
  },
  {
    iconSvg: lockSvg,
    tag: 'Encryption & Decryption',
    title: 'VaultShift',
    desc: 'A cyber-security-inspired web application for exploring fundamental cryptographic concepts through interactive text transformation.',
    points: [
      'Caesar Cipher & Reverse Cipher',
      'Encryption & decryption workflows',
      'Encryption history',
      'Duplicate prevention',
      'History deletion',
      'QR code generation',
      'Copy & download encrypted results',
      'Matrix-style cyber UI'
    ],
    tech: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript']
  },
  {
    iconSvg: keySvg,
    tag: 'Password Security',
    title: 'Password Strength Checker',
    desc: 'A web application focused on password strength checking and secure credential storage.',
    points: [
      'Real-time strength checking',
      'Dashboard of weak / medium / strong counts',
      'Strong password generator',
      'bcrypt-hashed password storage',
      'SQLite database integration',
      'Matrix-style neon rain UI'
    ],
    tech: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'bcrypt']
  }
];

document.getElementById('projectList').innerHTML = projects.map((p, i) => `
  <article class="p-card reveal">
    <div class="p-num">${String(i + 1).padStart(2, '0')}</div>
    <div class="p-body">
      <div class="p-head">
        <span class="p-icon">
          ${p.icon ? `<img src="${p.icon}" alt="${p.title} icon" onerror="this.remove()">` : p.iconSvg}
        </span>
        <span class="p-tag">${p.tag}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="p-desc">${p.desc}</p>
      <ul class="p-points">${p.points.map((x) => `<li>${x}</li>`).join('')}</ul>
      <div class="p-tech">${p.tech.map((t) => `<span>${t}</span>`).join('')}</div>
    </div>
    <div class="p-actions">
      ${p.code ? `<a class="btn-sm ghost" href="${p.code}" target="_blank" rel="noopener">Code</a>` : ''}
      ${p.live ? `<a class="btn-sm live" href="${p.live}" target="_blank" rel="noopener">Live ↗</a>` : ''}
    </div>
  </article>
`).join('');

/* ---------- CERTIFICATIONS ---------- */
// File mil jaye toh us entry mein file wali line ka // hata do (aur issuer ke baad comma laga do).
// Saal dikhana ho toh year: '2025' add kar sakti ho, sirf jo sach ho.
const certificates = [
  {
    name: 'Data Structures & Algorithms',
    issuer: 'Simplilearn'
    // file: 'certificates/simplilearn-dsa.pdf'
  },
  {
    name: 'HTML, CSS & Bootstrap',
    issuer: 'Great Learning'
    // file: 'certificates/greatlearning-html-css-bootstrap.pdf'
  },
  {
    name: 'SQL (Intermediate)',
    issuer: 'HackerRank'
    // file: 'certificates/hackerrank-sql-intermediate.pdf'
  },
  {
    name: 'Python for Data Science',
    issuer: 'IBM'
    // file: 'certificates/ibm-python-data-science.pdf'
  }
];

// array khaali ho toh section aur navbar link dikhenge hi nahi
if (certificates.length) {
  document.getElementById('certificates').hidden = false;
  document.getElementById('certNav').hidden = false;

  document.getElementById('certList').innerHTML = certificates.map((c) => `
    <article class="cert-card reveal">
      <svg class="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m8.5 14.5-1.5 7 5-3 5 3-1.5-7"/></svg>
      ${c.year ? `<span class="cert-year">${c.year}</span>` : ''}
      <h3>${c.name}</h3>
      <p class="cert-meta">${c.issuer}</p>
      ${c.file ? `<a class="btn-sm ghost" href="${c.file}" target="_blank" rel="noopener">View Certificate</a>` : ''}
    </article>
  `).join('');
}

/* ---------- HIGHLIGHTS (real numbers only) ---------- */
// Databases: MongoDB, MySQL, PostgreSQL, SQLite = 4
const stats = [
  { value: 6,    label: 'Projects Built' },
  { value: 4,    label: 'Databases Used' },
  { value: 8.18, label: 'CGPA', decimals: 2 },
  { value: 2027, label: 'Graduation Year', fixed: true }
];

document.getElementById('statList').innerHTML = stats.map((s) => `
  <div class="stat-card reveal">
    <b data-value="${s.value}" data-decimals="${s.decimals || 0}" data-fixed="${s.fixed ? 1 : 0}">
      ${s.fixed ? s.value : 0}
    </b>
    <span>${s.label}</span>
  </div>
`).join('');

// number 0 se upar tak count hota hai (sirf jab screen pe aaye)
function countUp(el) {
  const target = parseFloat(el.dataset.value);
  const decimals = parseInt(el.dataset.decimals, 10);
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = (target * progress).toFixed(decimals);
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---------- SCROLL REVEAL ---------- */
// Ye sabse neeche rehna chahiye, taaki upar bane saare .reveal elements pakad le
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('show');

    const num = entry.target.querySelector('[data-value]');
    if (num && num.dataset.fixed === '0') countUp(num);

    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));