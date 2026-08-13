/* ═══════════════════════════════════════════
   Nidhi Shree — Portfolio
   ═══════════════════════════════════════════ */

/* ── DATA ─────────────────────────────── */

const JOBS = [
  {
    role: 'Business Development Intern',
    org: 'FluxGen Engineering Technologies',
    loc: 'Bangalore, India',
    date: 'Feb 2020 – Jul 2020',
    tags: ['Market Research', 'Competitor Analysis', 'Lead Generation', 'Web'],
    points: [
      'Ran <b>market research, competitor analysis and lead generation</b> to support the business development pipeline for an early-stage water-and-energy IoT company.',
      'Led development of the company website on WIX, improving online visibility and inbound client engagement.'
    ]
  },
  {
    role: 'Privilege Access Analyst',
    org: 'ExxonMobil',
    loc: 'Bangalore, India',
    date: 'Aug 2020 – Oct 2022',
    tags: ['CyberArk', 'Active Directory', 'Power BI', 'MSSQL', 'Security'],
    points: [
      'Defined access-control policies and technical requirements for secrets management (<b>CyberArk</b>) across <b>8+ business lines</b>, partnering with security stakeholders on enterprise identity-lifecycle design.',
      'Managed Active Directory and CyberArk credentials to secure privileged access across production systems.',
      'Delivered <b>Power BI</b> reporting on MSSQL data across multiple dashboards, enabling data-driven access-review decisions covering <b>100% of platform review cycles</b> for leadership.'
    ]
  },
  {
    role: 'Data Integration Engineer',
    org: 'ExxonMobil',
    loc: 'Bangalore, India',
    date: 'Nov 2022 – Feb 2025',
    tags: ['Qlik', 'SAP BODS', 'SAP LT', 'SQL', 'ETL/ELT', 'SAP HANA'],
    points: [
      'Built and maintained <b>20+ ETL pipelines</b> (Qlik, SAP BODS, SAP LT) supporting production operations, technology enablement initiatives, and proof-of-concept integrations across cloud and on-premise environments.',
      'Led requirements gathering and stakeholder coordination for end-to-end data migration projects spanning <b>12 SAP source systems</b> — including ECC, BW and HANA — administering SOWs and managed-service provider performance across delivery timelines.',
      'Wrote SQL-based cross-database comparison and reconciliation logic in <b>SAP Solution Manager</b> to close data-consistency gaps between source and target schemas, cutting manual reconciliation effort by an estimated <b>70%</b>.',
      'Partnered with security and compliance stakeholders to define audit remediation requirements and SSL policy standards across the ETL application portfolio, closing <b>100% of flagged audit findings</b>.'
    ]
  },
  {
    role: 'Scrum Master',
    org: 'ExxonMobil',
    loc: 'Bangalore, India',
    date: 'Mar 2025 – Dec 2025',
    tags: ['Agile/Scrum', 'SAFe', 'Backlog Ownership', 'Jira', 'Azure DevOps', 'Power BI'],
    points: [
      'Owned end-to-end backlog and requirements definition for <b>3 Agile teams (30 engineers)</b>, translating business objectives into user stories and acceptance criteria across Qlik, Fivetran, SAP SLT, ADF and SAP BODS data-pipeline integrations.',
      'Worked directly with engineers to scope and prioritise solutions using <b>SQL-based analysis</b> of sprint and pipeline data, lifting sprint velocity <b>45%</b> and cutting backlog volume <b>40%</b>.',
      'Facilitated <b>PI Planning</b> with Product Owners and Program Managers under a SAFe framework, aligning roadmaps across <b>5 concurrent integration projects</b> and surfacing delivery risks early.',
      'Built <b>5 Azure DevOps and Power BI dashboards</b> adopted by <b>25+ stakeholders</b>, translating sprint health and pipeline status into executive-ready metrics.'
    ]
  },
  {
    role: 'MS Information Systems',
    org: 'University of Wisconsin–Madison',
    loc: 'Madison, Wisconsin',
    date: 'Jan 2026 – May 2027',
    current: true,
    tags: ['Artificial Intelligence', 'Analytics', 'Database Design', 'GPA 3.67'],
    points: [
      'Graduate coursework in <b>Introduction to Artificial Intelligence</b>, <b>Introduction to Analytics</b> and <b>Database Design</b>, maintaining a <b>3.67 / 4.0</b> GPA.',
      'Building end-to-end data products alongside coursework — a Kafka + Spark Structured Streaming platform and an LLM-powered dashboard generator, both shipped solo.',
      'Seeking <b>Spring 2027</b> and <b>Summer 2027 internships</b>, and <b>full-time roles from Summer 2027</b>, in Product Management, TPM, Data &amp; Business Analysis and Analytics Engineering.'
    ]
  }
];

const PROJECTS = [
  {
    cat: ['data'],
    kind: 'DATA ENGINEERING · STREAMING',
    title: 'Streaming Content Engagement & Recommendation Pipeline',
    year: '2026',
    body: 'End-to-end data platform, built solo. Prototyped and validated the pipeline design, then shipped a <b>Spark Structured Streaming (Scala)</b> job consuming a 6-partition <b>Kafka</b> topic with windowed aggregation, verified at <b>800 events/sec with zero data loss</b>. Modelled a star-schema warehouse in PostgreSQL with SQL analytics surfacing engagement and retention insights, and shipped an <b>ALS recommender</b> and churn classifier behind a live FastAPI feature endpoint — the full design-build-launch-iterate loop.',
    stack: ['Apache Kafka', 'Spark Structured Streaming', 'Scala', 'PostgreSQL', 'Python', 'FastAPI'],
    links: []
  },
  {
    cat: ['ai'],
    kind: 'AI / LLM · BUSINESS INTELLIGENCE',
    title: 'VizGen — AI-Powered Dashboard Builder',
    year: '2026',
    body: 'Identified a recurring requirements bottleneck in enterprise BI workflows — business users could describe a need but never configure a chart — and shipped a <b>natural-language dashboard generator</b> end-to-end, solo. Prioritised and built a feature roadmap covering dashboard version control, <b>AI-generated executive summaries</b>, and no-login shareable URLs. Live in production.',
    stack: ['Python', 'Claude API', 'Plotly', 'Streamlit', 'SQLite'],
    links: [
      { label: 'GitHub ↗', url: 'https://github.com/NidhiShree99/vizgen' },
      { label: 'Live ↗', url: 'https://vizgenanalytics.streamlit.app' }
    ]
  },
  {
    cat: ['web'],
    kind: 'WEB / INTERNAL TOOLS · CHRIST UNIVERSITY',
    title: 'Volunteer Management System',
    year: '2019',
    body: 'Internal platform for the Centre for Academic and Professional Support. Coordinated between developers and end users on feature rollouts, UI design and functionality improvements, ran <b>end-to-end beta testing</b>, and managed project timelines to on-time delivery.',
    stack: ['Requirements', 'UI Design', 'QA / Testing', 'Delivery'],
    links: []
  },
  {
    cat: ['web', 'data'],
    kind: 'WEB / INTERNAL TOOLS · RESEARCH SUPPORT',
    title: 'Pseudo-Forms — Survey & Analytics Tool',
    year: '2019',
    body: 'Built a web tool for online form creation and distribution within organisations, supporting research data collection. Integrated <b>data-analysis features</b> that visualise responses through dynamic graphs, turning raw survey submissions into readable findings.',
    stack: ['Web', 'Data Analysis', 'Visualisation', 'Research Support'],
    links: []
  }
];

const SKILLS = [
  {
    cat: 'Product & Program',
    items: [
      ['📋', 'Requirements Definition'], ['🗂️', 'Backlog Ownership'], ['🗺️', 'Roadmapping'],
      ['🎯', 'Prioritisation'], ['🔄', 'Agile / Scrum'], ['📌', 'Kanban'],
      ['🏗️', 'SAFe'], ['🤝', 'Stakeholder Management'], ['✍️', 'User Stories']
    ]
  },
  {
    cat: 'Data & AI',
    items: [
      ['🐍', 'Python'], ['🐼', 'Pandas'], ['📈', 'scikit-learn'], ['🤖', 'LLMs'],
      ['ANT', 'Claude API'], ['🧠', 'Autonomous Agents'], ['⚡', 'Apache Spark'],
      ['🌊', 'Apache Kafka'], ['🔧', 'Feature Engineering']
    ]
  },
  {
    cat: 'Analytics & BI',
    items: [
      ['PBI', 'Power BI'], ['TAB', 'Tableau'], ['AZ', 'Azure DevOps'],
      ['📊', 'Dashboard Design'], ['📐', 'Data Modelling'], ['📉', 'Data Analysis']
    ]
  },
  {
    cat: 'Technical & Platforms',
    items: [
      ['SQL', 'SQL'], ['PG', 'PostgreSQL'], ['SC', 'Scala'], ['🔀', 'ETL / ELT'],
      ['Q', 'Qlik'], ['SAP', 'SAP BODS / HANA / LT'], ['ADF', 'Azure Data Factory'],
      ['🌿', 'Git / GitHub'], ['🔐', 'CyberArk'], ['🎫', 'ServiceNow']
    ]
  }
];

const MARQUEE = [
  'Scrum', 'SAFe', 'Backlog Ownership', 'Roadmapping', 'SQL', 'Python', 'Apache Kafka',
  'Spark', 'Scala', 'PostgreSQL', 'Power BI', 'Tableau', 'Claude API', 'LLMs',
  'ETL / ELT', 'Qlik', 'SAP BODS', 'Azure Data Factory', 'Jira', 'Azure DevOps',
  'Stakeholder Management', 'Requirements', 'Data Modelling', 'CyberArk'
];

const BOOT_MSGS = [
  'Mounting modules…', 'Loading experience…', 'Indexing projects…',
  'Resolving skills graph…', 'Compiling profile…', 'Ready.'
];

/* ── BOOT SEQUENCE ────────────────────── */
(function boot() {
  const el = document.getElementById('boot');
  const bar = document.getElementById('bootBar');
  const pct = document.getElementById('bootPct');
  const pct2 = document.getElementById('bootPct2');
  const msg = document.getElementById('bootMsg');
  if (!el) return;

  document.body.classList.add('locked');
  let p = 0;

  const tick = setInterval(() => {
    p = Math.min(100, p + Math.random() * 9 + 3);
    const r = Math.round(p);
    bar.style.width = r + '%';
    pct.textContent = pct2.textContent = r + '%';
    msg.textContent = BOOT_MSGS[Math.min(BOOT_MSGS.length - 1, Math.floor(p / 100 * BOOT_MSGS.length))];

    if (p >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        el.classList.add('gone');
        document.body.classList.remove('locked');
        setTimeout(() => el.remove(), 800);
        startCounters();
      }, 420);
    }
  }, 150);
})();

/* ── THEME ────────────────────────────── */
(function theme() {
  const btn = document.getElementById('themeBtn');
  const root = document.documentElement;
  const saved = localStorage.getItem('ns-theme');
  if (saved) root.dataset.theme = saved;
  btn.textContent = root.dataset.theme === 'light' ? '☀' : '☾';

  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('ns-theme', next);
    btn.textContent = next === 'light' ? '☀' : '☾';
  });
})();

/* ── NAV ──────────────────────────────── */
(function nav() {
  const bar = document.getElementById('nav');
  const links = document.querySelector('.nav-links');
  const menu = document.getElementById('menuBtn');

  addEventListener('scroll', () => bar.classList.toggle('stuck', scrollY > 20));
  menu.addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });

  const secs = [...document.querySelectorAll('main section[id]')];
  const anchors = [...links.querySelectorAll('a')];
  addEventListener('scroll', () => {
    const y = scrollY + 140;
    let cur = '';
    secs.forEach(s => { if (s.offsetTop <= y) cur = s.id; });
    anchors.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + cur));
  });
})();

/* ── MARQUEE ──────────────────────────── */
(function marquee() {
  const track = document.getElementById('marqueeTrack');
  const html = MARQUEE.map(s => `<span>${s}</span><i>·</i>`).join('');
  track.innerHTML = html + html;
})();

/* ── TIMELINE / EXPERIENCE ────────────── */
(function experience() {
  const panel = document.getElementById('jobPanel');
  const nodes = [...document.querySelectorAll('.tl-node')];

  function render(i) {
    const j = JOBS[i];
    panel.innerHTML = `
      <div class="job-top">
        <h3>${j.role}</h3>
        ${j.current ? '<span class="job-badge">CURRENT</span>' : ''}
      </div>
      <div class="job-meta">
        <span>🏢 ${j.org}</span><span>📍 ${j.loc}</span><span>📅 ${j.date}</span>
      </div>
      <div class="job-tags">${j.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <ul class="job-list">${j.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
  }

  nodes.forEach(n => n.addEventListener('click', () => {
    nodes.forEach(x => x.classList.remove('is-active'));
    n.classList.add('is-active');
    render(+n.dataset.job);
  }));

  render(4);
})();

/* ── PROJECTS ─────────────────────────── */
(function projects() {
  const grid = document.getElementById('projGrid');

  grid.innerHTML = PROJECTS.map(p => `
    <article class="proj rv" data-cat="${p.cat.join(' ')}">
      <p class="proj-kind mono">${p.kind}</p>
      <div class="proj-head">
        <h3>${p.title}</h3>
        <div class="proj-links">
          ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
          <a class="year-tag" style="pointer-events:none">${p.year}</a>
        </div>
      </div>
      <p class="proj-body">${p.body}</p>
      <div class="proj-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
    </article>`).join('');

  document.getElementById('filters').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('is-on'));
    chip.classList.add('is-on');
    const f = chip.dataset.f;
    grid.querySelectorAll('.proj').forEach(card => {
      card.classList.toggle('hide', f !== 'all' && !card.dataset.cat.split(' ').includes(f));
    });
  });
})();

/* ── SKILLS ───────────────────────────── */
(function skills() {
  document.getElementById('skillGrid').innerHTML = SKILLS.map(s => `
    <div class="skill-cat rv">
      <h3>${s.cat}</h3>
      <div class="skill-items">
        ${s.items.map(([ic, name]) => `<span><i>${ic}</i>${name}</span>`).join('')}
      </div>
    </div>`).join('');
})();

/* ── COUNTERS ─────────────────────────── */
let countersDone = false;
function startCounters() {
  if (countersDone) return;
  countersDone = true;

  document.querySelectorAll('[data-count]').forEach(el => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const target = parseFloat(el.dataset.count);
        const dec = parseInt(el.dataset.dec || 0, 10);
        const suf = el.dataset.suffix || '';
        const dur = 1400;
        const t0 = performance.now();

        (function step(now) {
          const k = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - k, 3);
          el.textContent = (target * eased).toFixed(dec) + suf;
          if (k < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(dec) + suf;
        })(t0);
      });
    }, { threshold: .4 });
    io.observe(el);
  });
}

/* ── REVEAL ON SCROLL ─────────────────── */
(function reveal() {
  const targets = document.querySelectorAll(
    '.sec-title, .about-copy, .fact, .job-panel, .proj, .skill-cat, .edu, .bcard, .cert, .panel, .contact-title, .contact-sub, .contact-links'
  );
  targets.forEach(t => t.classList.add('rv'));

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(t => io.observe(t));
})();
