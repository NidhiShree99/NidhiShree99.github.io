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
      'Seeking <b>Summer 2027 internships</b> and <b>full-time roles from May 2027</b>, in Product Management, TPM, Data &amp; Business Analysis and Analytics Engineering.'
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
    links: [
      { label: 'GitHub ↗', url: 'https://github.com/NidhiShree99/netflix-streaming-pipeline' }
    ]
  },
  {
    cat: ['ai'],
    kind: 'AI / LLM · PRODUCT DECISIONS',
    title: 'JobTriage — Autonomous Job Application Agent',
    year: '2026',
    body: 'Designed the product decision, not just the code: a 5-step agent that defines an explicit <b>autonomy boundary</b> for triaging job postings — deterministic auto-reject rules for hard disqualifiers, LLM-scored fit, and a <b>NEEDS_HUMAN_REVIEW</b> escalation path for ambiguous cases, so the system never guesses when it should ask a human instead. Validated against 5 test scenarios spanning disqualified to auto-apply fits.',
    stack: ['Python', 'Claude API', 'Streamlit'],
    links: [
      { label: 'GitHub ↗', url: 'https://github.com/NidhiShree99/JobTriageAgent' }
    ]
  },
  {
    cat: ['ai'],
    kind: 'AI / LLM · BUSINESS INTELLIGENCE',
    title: 'VizGen — AI-Powered Dashboard Builder',
    year: '2026',
    body: 'Identified a recurring requirements bottleneck in enterprise BI workflows — business users could describe a need but never configure a chart — and shipped a <b>natural-language dashboard generator</b> end-to-end, solo. Prioritised and built a feature roadmap covering dashboard version control, <b>AI-generated executive summaries</b>, and no-login shareable URLs. Later implemented natural-language <b>time-series forecasting</b> using Claude for intent parsing and statsmodels (Holt-Winters exponential smoothing) for computation — deliberately decoupling LLM-driven query interpretation from deterministic statistical modelling to eliminate numerical hallucination risk in forecasted output. Live in production.',
    stack: ['Python', 'Claude API', 'statsmodels', 'Plotly', 'Streamlit', 'SQLite'],
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

  function spy() {
    const y = scrollY + 140;
    let cur = '';
    secs.forEach(s => { if (s.offsetTop <= y) cur = s.id; });

    // The last section sits too close to the bottom to ever clear that offset,
    // so once the page is scrolled all the way down, pin the final nav link.
    const atBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
    if (atBottom && anchors.length) cur = anchors[anchors.length - 1].getAttribute('href').slice(1);

    anchors.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + cur));
  }

  addEventListener('scroll', spy, { passive: true });
  addEventListener('resize', spy);
  spy();
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

/* ═══════════════════════════════════════════
   SCROLL PROGRESS
   ═══════════════════════════════════════════ */
(function progress() {
  const bar = document.querySelector('#scrollProgress i');
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
})();

/* ═══════════════════════════════════════════
   IMPACT BARS  (real figures from the resume)
   ═══════════════════════════════════════════ */
const IMPACT = [
  { label: 'Sprint velocity lift',      value: 45,  dir: 'up'   },
  { label: 'Backlog volume cut',        value: 40,  dir: 'down' },
  { label: 'Manual reconciliation cut', value: 70,  dir: 'down' },
  { label: 'Audit findings closed',     value: 100, dir: 'up'   }
];

(function bars() {
  const host = document.getElementById('impactBars');
  if (!host) return;

  host.innerHTML = IMPACT.map(m => `
    <div class="bar-row">
      <div class="bar-top mono">
        <span>${m.label}</span>
        <b data-count="${m.value}" data-suffix="%">0</b>
      </div>
      <div class="bar-track">
        <i class="bar-fill ${m.dir}" style="--w:${m.value}%"></i>
      </div>
    </div>`).join('');

  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      io.disconnect();
      host.querySelectorAll('.bar-fill').forEach((f, i) => {
        setTimeout(() => f.classList.add('go'), i * 110);
      });
    });
  }, { threshold: .3 });
  io.observe(host);
})();

/* ═══════════════════════════════════════════
   SYSTEM DESIGN — animated pipeline
   ═══════════════════════════════════════════ */
const STAGES = [
  {
    key: 'kafka', label: 'Kafka', sub: '6 partitions',
    title: 'Apache Kafka — ingestion',
    body: 'Engagement events land on a 6-partition topic. Partitioning by user key keeps a given user\'s events ordered within a partition while letting all six consume in parallel, which is what makes the throughput scale horizontally rather than bottlenecking on one consumer.',
    tags: ['Kafka', '6 partitions', 'Keyed ordering']
  },
  {
    key: 'spark', label: 'Spark', sub: 'windowed agg',
    title: 'Spark Structured Streaming — aggregation',
    body: 'A Scala job consumes the topic and aggregates into tumbling event-time windows. Checkpointing plus Kafka offset tracking gives exactly-once semantics across restarts — the reason the run verified at 800 events/sec with zero data loss rather than merely "no errors observed".',
    tags: ['Scala', 'Structured Streaming', 'Tumbling windows', 'Checkpointing']
  },
  {
    key: 'warehouse', label: 'PostgreSQL', sub: 'star schema',
    title: 'PostgreSQL — star-schema warehouse',
    body: 'Aggregates land in a star schema: a fact table of engagement events against conformed dimensions. Modelling it this way keeps retention and cohort queries to a single join depth, so the analytics stay fast as the fact table grows.',
    tags: ['PostgreSQL', 'Star schema', 'Fact / dimension', 'SQL analytics']
  },
  {
    key: 'serve', label: 'FastAPI', sub: 'feature endpoint',
    title: 'FastAPI — model serving',
    body: 'An ALS recommender and a churn classifier sit behind a live FastAPI feature endpoint, reading from the warehouse. This is what closes the loop: the pipeline is not just moving data, it is serving the predictions the product consumes.',
    tags: ['FastAPI', 'ALS recommender', 'Churn model', 'Feature endpoint']
  }
];

(function pipeline() {
  const cv = document.getElementById('pipeCanvas');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const hudEvents = document.getElementById('hudEvents');
  const hudRate = document.getElementById('hudRate');
  const stagesEl = document.getElementById('sysStages');
  const detailEl = document.getElementById('sysDetail');
  const toggle = document.getElementById('sysToggle');

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PARTITIONS = 6;

  let W = 0, H = 0, nodes = [], parts = [], held = [];
  let running = false, visible = false, paused = reduced;
  let events = 0, lastWindow = 0, pulse = 0, raf = 0;

  const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  let C = {};
  const readColors = () => {
    C = { a1: css('--a1'), a2: css('--a2'), a3: css('--a3'),
          line: css('--line'), dim: css('--dim'), txt: css('--txt'), panel: css('--panel') };
  };

  function layout() {
    const rect = cv.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = rect.width; H = rect.height;
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Size the nodes first, then inset the track by half a node so the
    // outermost boxes cannot bleed past the canvas edge on narrow screens.
    const rw = Math.max(56, Math.min(104, W * 0.19));
    const rh = W < 420 ? 40 : 46;
    const pad = rw / 2 + 6;
    const span = Math.max(1, W - pad * 2);
    nodes = STAGES.map((s, i) => ({
      ...s, rw, rh,
      x: pad + span * (i / (STAGES.length - 1)),
      y: H * 0.54
    }));
  }

  function spawn() {
    parts.push({
      seg: 0, p: Math.random() * 0.05,
      lane: Math.floor(Math.random() * PARTITIONS),
      v: 0.0042 + Math.random() * 0.0026
    });
  }

  function laneY(lane) {
    const spread = Math.min(H * 0.30, 62);
    return (lane - (PARTITIONS - 1) / 2) * (spread / PARTITIONS * 2);
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawNode(n, i) {
    const w = n.rw, h = n.rh, x = n.x - w / 2, y = n.y - h / 2;
    const hot = i === 1 && pulse > 0;
    ctx.save();
    ctx.fillStyle = C.panel;
    ctx.strokeStyle = hot ? C.a2 : C.line;
    ctx.lineWidth = hot ? 2 : 1;
    roundRect(x, y, w, h, 9);
    ctx.fill(); ctx.stroke();
    ctx.restore();

    const fs = Math.max(9.5, Math.min(12, W / 78));
    ctx.textAlign = 'center';
    ctx.fillStyle = C.txt;
    ctx.font = `600 ${fs}px Inter, system-ui, sans-serif`;
    ctx.fillText(n.label, n.x, n.y + (h > 42 ? -1 : 1));

    // only draw the sub-label when it actually fits inside the box
    const ss = Math.max(7.2, Math.min(9.5, W / 132));
    ctx.font = `400 ${ss}px "JetBrains Mono", monospace`;
    if (ctx.measureText(n.sub).width <= w - 8) {
      ctx.fillStyle = C.dim;
      ctx.fillText(n.sub, n.x, n.y + (h > 42 ? 13 : 12));
    }
  }

  function drawLinks() {
    ctx.strokeStyle = C.line;
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i], b = nodes[i + 1];
      if (i === 0) {
        for (let l = 0; l < PARTITIONS; l++) {
          ctx.beginPath();
          ctx.moveTo(a.x + a.rw / 2, a.y + laneY(l) * 0.35);
          ctx.bezierCurveTo((a.x + b.x) / 2, a.y + laneY(l), (a.x + b.x) / 2, b.y, b.x - b.rw / 2, b.y);
          ctx.stroke();
        }
      } else {
        ctx.beginPath();
        ctx.moveTo(a.x + a.rw / 2, a.y);
        ctx.lineTo(b.x - b.rw / 2, b.y);
        ctx.stroke();
      }
    }
  }

  function posOf(pt) {
    const a = nodes[pt.seg], b = nodes[pt.seg + 1];
    if (!a || !b) return null;
    const x0 = a.x + a.rw / 2, x1 = b.x - b.rw / 2;
    const x = x0 + (x1 - x0) * pt.p;
    let y;
    if (pt.seg === 0) {
      const ease = 1 - Math.pow(1 - pt.p, 2);
      y = a.y + laneY(pt.lane) * (1 - ease) * 0.9;
    } else {
      y = a.y;
    }
    return { x, y };
  }

  function frame(ts) {
    raf = requestAnimationFrame(frame);
    if (paused || !visible) return;

    ctx.clearRect(0, 0, W, H);
    drawLinks();

    if (Math.random() < 0.55) spawn();

    // segment 0: Kafka -> Spark, particles accumulate at the window boundary
    for (let i = parts.length - 1; i >= 0; i--) {
      const pt = parts[i];
      pt.p += pt.v * (pt.seg === 0 ? 1 : 1.5);
      if (pt.p >= 1) {
        if (pt.seg === 0) { held.push(pt); parts.splice(i, 1); }
        else if (pt.seg >= nodes.length - 2) { parts.splice(i, 1); }
        else { pt.seg++; pt.p = 0; }
      }
    }

    // window trigger: flush the held batch downstream
    if (ts - lastWindow > 1500 && held.length) {
      lastWindow = ts;
      pulse = 1;
      events += held.length;
      held.forEach((pt, k) => {
        pt.seg = 1; pt.p = -k * 0.016; pt.v = 0.006 + Math.random() * 0.003;
        parts.push(pt);
      });
      held = [];
    }
    if (pulse > 0) pulse = Math.max(0, pulse - 0.045);

    // particles
    parts.forEach(pt => {
      if (pt.p < 0) return;
      const q = posOf(pt);
      if (!q) return;
      ctx.beginPath();
      ctx.arc(q.x, q.y, pt.seg === 0 ? 1.9 : 2.3, 0, Math.PI * 2);
      ctx.fillStyle = pt.seg === 0 ? C.a3 : C.a2;
      ctx.globalAlpha = pt.seg === 0 ? 0.75 : 0.95;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // held batch sitting at the Spark node
    if (held.length) {
      const n = nodes[1];
      ctx.fillStyle = C.a1;
      held.slice(0, 26).forEach((_, k) => {
        const col = k % 7, row = Math.floor(k / 7);
        ctx.globalAlpha = 0.5 + 0.5 * (k / 26);
        ctx.fillRect(n.x - 21 + col * 6, n.y - n.rh / 2 - 15 - row * 5, 3.4, 3.4);
      });
      ctx.globalAlpha = 1;
    }

    if (pulse > 0) {
      const n = nodes[1];
      ctx.strokeStyle = C.a2;
      ctx.globalAlpha = pulse * 0.6;
      ctx.lineWidth = 2;
      roundRect(n.x - n.rw / 2 - (1 - pulse) * 14, n.y - n.rh / 2 - (1 - pulse) * 14,
                n.rw + (1 - pulse) * 28, n.rh + (1 - pulse) * 28, 12);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    nodes.forEach(drawNode);

    if (hudEvents) hudEvents.textContent = events.toLocaleString();
  }

  function staticFrame() {
    ctx.clearRect(0, 0, W, H);
    drawLinks();
    nodes.forEach(drawNode);
  }

  // stage chips + detail panel
  function renderStages(active = 1) {
    stagesEl.innerHTML = STAGES.map((s, i) =>
      `<button class="sys-chip${i === active ? ' is-on' : ''}" data-i="${i}">
         <span class="mono">0${i + 1}</span>${s.label}
       </button>`).join('');
    const s = STAGES[active];
    detailEl.innerHTML = `
      <h3>${s.title}</h3>
      <p>${s.body}</p>
      <div class="sys-tags">${s.tags.map(t => `<span>${t}</span>`).join('')}</div>`;
  }

  stagesEl.addEventListener('click', e => {
    const b = e.target.closest('.sys-chip');
    if (b) renderStages(+b.dataset.i);
  });

  toggle.addEventListener('click', () => {
    paused = !paused;
    toggle.textContent = paused ? '▶ PLAY' : '❚❚ PAUSE';
    toggle.setAttribute('aria-label', paused ? 'Play animation' : 'Pause animation');
    if (paused) staticFrame();
  });

  readColors();
  layout();
  renderStages(1);
  if (hudRate) hudRate.textContent = '800';

  new IntersectionObserver(es => {
    visible = es[0].isIntersecting;
    if (visible && !running) { running = true; raf = requestAnimationFrame(frame); }
  }, { threshold: .08 }).observe(cv);

  addEventListener('resize', () => { layout(); if (paused || reduced) staticFrame(); });
  new MutationObserver(() => { readColors(); if (paused || reduced) staticFrame(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  if (reduced) {
    staticFrame();
    toggle.textContent = '▶ PLAY';
    if (hudEvents) hudEvents.textContent = '—';
  }
})();

/* ═══════════════════════════════════════════
   COMMAND PALETTE  (⌘K / Ctrl+K)
   ═══════════════════════════════════════════ */
(function cmdk() {
  const root = document.getElementById('cmdk');
  if (!root) return;
  const input = document.getElementById('cmdkInput');
  const list = document.getElementById('cmdkList');
  const openBtn = document.getElementById('cmdkBtn');

  const items = [
    ...[...document.querySelectorAll('main section[id]')].map(s => ({
      kind: 'Section',
      name: (s.querySelector('.sec-title') || {}).textContent ||
            s.id.charAt(0).toUpperCase() + s.id.slice(1),
      hint: (s.querySelector('.sec-label') || {}).textContent || '',
      go: () => document.getElementById(s.id).scrollIntoView({ behavior: 'smooth' })
    })),
    ...PROJECTS.map(p => ({
      kind: 'Project', name: p.title, hint: p.stack.slice(0, 3).join(' · '),
      go: () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        const card = [...document.querySelectorAll('.proj')]
          .find(c => c.querySelector('h3').textContent.trim() === p.title.trim());
        if (card) { card.classList.add('flash'); setTimeout(() => card.classList.remove('flash'), 1400); }
      }
    })),
    { kind: 'Action', name: 'Email Nidhi', hint: 'nidhishreeps@gmail.com', go: () => location.href = 'mailto:nidhishreeps@gmail.com' },
    { kind: 'Action', name: 'Download résumé', hint: 'PDF', go: () => window.open('Nidhi_Shree_Resume.pdf', '_blank', 'noopener') },
    { kind: 'Action', name: 'LinkedIn', hint: 'in/shree-nidhi', go: () => window.open('https://www.linkedin.com/in/shree-nidhi', '_blank', 'noopener') },
    { kind: 'Action', name: 'GitHub', hint: 'NidhiShree99', go: () => window.open('https://github.com/NidhiShree99', '_blank', 'noopener') },
    { kind: 'Action', name: 'VizGen live demo', hint: 'streamlit', go: () => window.open('https://vizgenanalytics.streamlit.app', '_blank', 'noopener') },
    { kind: 'Action', name: 'Toggle theme', hint: 'light / dark', go: () => document.getElementById('themeBtn').click() }
  ];

  let results = items, sel = 0;

  // fold accents so "resume" still matches "résumé"
  const fold = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  // subsequence match, the way editor palettes do it
  function score(q, text) {
    if (!q) return 0;
    const t = fold(text);
    let i = 0, s = 0, streak = 0;
    for (const ch of fold(q)) {
      const k = t.indexOf(ch, i);
      if (k === -1) return -1;
      streak = k === i ? streak + 1 : 0;
      s += 10 - Math.min(9, k - i) + streak * 3;
      i = k + 1;
    }
    return s + (t.startsWith(fold(q)) ? 40 : 0);
  }

  function render() {
    list.innerHTML = results.length
      ? results.map((r, i) => `
          <li role="option" class="cmdk-item${i === sel ? ' is-sel' : ''}"
              aria-selected="${i === sel}" data-i="${i}">
            <span class="cmdk-kind mono">${r.kind}</span>
            <span class="cmdk-name">${r.name}</span>
            <span class="cmdk-hint mono">${r.hint}</span>
          </li>`).join('')
      : `<li class="cmdk-empty mono">No matches</li>`;
    const el = list.querySelector('.is-sel');
    if (el) el.scrollIntoView({ block: 'nearest' });
  }

  function filter(q) {
    results = !q.trim() ? items
      : items.map(it => ({ it, s: Math.max(score(q, it.name), score(q, it.kind + ' ' + it.hint) - 12) }))
             .filter(x => x.s > 0).sort((a, b) => b.s - a.s).map(x => x.it);
    sel = 0;
    render();
  }

  function open() {
    root.hidden = false;
    document.body.classList.add('locked');
    input.value = ''; filter('');
    requestAnimationFrame(() => input.focus());
  }
  function close() {
    root.hidden = true;
    document.body.classList.remove('locked');
  }
  function run() {
    const r = results[sel];
    if (!r) return;
    close();
    r.go();
  }

  addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); root.hidden ? open() : close(); return; }
    if (root.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % Math.max(1, results.length); render(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + results.length) % Math.max(1, results.length); render(); }
    else if (e.key === 'Enter') { e.preventDefault(); run(); }
  });

  input.addEventListener('input', () => filter(input.value));
  list.addEventListener('click', e => {
    const li = e.target.closest('.cmdk-item');
    if (li) { sel = +li.dataset.i; run(); }
  });
  list.addEventListener('mousemove', e => {
    const li = e.target.closest('.cmdk-item');
    if (li && +li.dataset.i !== sel) { sel = +li.dataset.i; render(); }
  });
  root.querySelector('[data-cmdk-close]').addEventListener('click', close);
  if (openBtn) openBtn.addEventListener('click', open);
})();
