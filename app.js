// Project data. Edit here: add a project by copying one entry.
// shots: screenshot files in assets/. An empty list means description only.
const PROJECTS = [
  {
    id: "ielts-platform",
    name: "IELTS Platform",
    status: "local build · test data",
    summary: "Mock-exam platform: Django API, student app and staff app.",
    stack: ["Django", "DRF", "Celery", "Redis", "PostgreSQL", "MinIO", "Docker", "React", "TypeScript", "Playwright"],
    description: "A mock-exam platform for IELTS-style practice. One Django REST API serves two React apps: a student app and a staff app for coordinators, examiners and admins.",
    features: [
      "Computer-delivered exam player: timed Reading, Listening, Writing and Speaking sections, with saved attempts that students can resume.",
      "Test builder: staff create and edit tests, import packages, and see per-test problems before publishing.",
      "Marking workflow: writing and speaking queues, examiner assignments, scores and an appeals process.",
      "On-site sessions: centres, bookings, seat holds and same-day check-in with search and QR scan.",
      "Payments and coins: paid tests and a wallet with coin balances.",
      "Notifications and analytics: background jobs with Celery, and staff analytics."
    ],
    engineering: [
      "Service and repository layering, with permissions checked on every queryset a user can reach.",
      "Atomic transactions and locks for writes that can race.",
      "Playwright end-to-end browser tests and a dev-only QA console with seeded test accounts."
    ],
    role: "lead developer",
    shots: [
      { file: "assets/ielts-1.jpg", caption: "Student app: landing page" },
      { file: "assets/ielts-student-tests.jpg", caption: "Student app: mock tests list" },
      { file: "assets/ielts-admin-dashboard.jpg", caption: "Staff app: dashboard with appeals and marking queues" },
      { file: "assets/ielts-admin-builder.jpg", caption: "Staff app: test builder" },
      { file: "assets/ielts-admin-bookings.jpg", caption: "Staff app: on-site check-in" },
      { file: "assets/ielts-2.jpg", caption: "Staff app: sign-in" }
    ]
  },
  {
    id: "customcms",
    name: "CustomCms",
    status: "live · kuplyu-tashkent.uz",
    live: "https://kuplyu-tashkent.uz",
    summary: "Self-built SEO-focused CMS in PHP, with no framework.",
    stack: ["PHP 8", "custom MVC", "MySQL", "JSON-LD", "sitemaps", "IndexNow"],
    description: "A self-built content management system with no framework underneath. It runs an SEO-driven content site with an admin back-office for content and incoming requests.",
    features: [
      "Content rotation: page variants rotated and tracked for performance.",
      "Internal link graph: managed links between pages.",
      "Structured data: JSON-LD generated per page.",
      "Crawl and search analytics: visits, clicks, calls and CTR charted over time.",
      "AI Studio: an assistant that inspects pages and FAQs and proposes edits with a live preview.",
      "Request operations: an admin queue for incoming product requests."
    ],
    engineering: [
      "Custom Router, Controller and Model core.",
      "SEO engine: JSON-LD, sitemaps and IndexNow submission."
    ],
    role: "full-stack developer",
    shots: [
      { file: "assets/customcms-admin-2.png", caption: "Admin dashboard: content and pages" },
      { file: "assets/customcms-admin-3.png", caption: "Analytics: visits, calls and CTR over time" },
      { file: "assets/customcms-admin-1.png", caption: "AI Studio: content editing assistant" },
      { file: "assets/customcms-2.png", caption: "SEO settings" }
    ]
  },
  {
    id: "uchaska",
    name: "Uchaska",
    status: "local build · demo data",
    summary: "Student apartment management: rooms, residents, rent and debtors.",
    stack: ["Django 5", "DRF", "APScheduler", "Telegram Bot API", "React", "Vite (PWA)", "PostgreSQL / SQLite"],
    description: "A management app for student apartments and shared housing. It tracks rooms and beds, residents and leases, rent payments and debtors, expenses and profit, from a phone-first interface.",
    features: [
      "Rooms and beds: occupancy per room, bed status and vacancy loss.",
      "Residents and leases: move-in dates, rent per bed, deposits, and one active lease per bed.",
      "Payments and debtors: monthly collection, partial payments and an automatic debtors list.",
      "Expenses and analytics: expected rent, collected rent, expenses and net profit.",
      "Reminders: scheduled reminders before rent is due, run by APScheduler."
    ],
    engineering: [
      "Database constraints enforce one active lease per resident and per bed.",
      "Demo seed command for local testing."
    ],
    role: "full-stack developer",
    shots: [
      { file: "assets/uchaska-dashboard.jpg", caption: "Dashboard: occupancy, rent collected, debtors and net profit" },
      { file: "assets/uchaska-rooms.jpg", caption: "Rooms: bed occupancy per room" },
      { file: "assets/uchaska-payments.jpg", caption: "Payments: monthly rent collection per resident" }
    ]
  },
  {
    id: "click-usta",
    name: "Click Usta",
    status: "telegram bot · t.me/clickustabot",
    live: "https://t.me/clickustabot",
    summary: "Home-repair marketplace: customers, craftsmen and an admin panel, as a Telegram Mini App.",
    stack: ["Django 5.2", "DRF", "JWT", "Celery", "Redis", "Telegram Bot API", "React", "TypeScript", "Vite"],
    description: "A service marketplace in Uzbekistan where customers order home repairs (electrical, plumbing and similar) from independent craftsmen. It runs as a Telegram Mini App with a backend and an admin panel for operations.",
    features: [
      "Ordering flow: customers pick a service, address and time, and track the order from new to completed.",
      "Craftsman management: profiles, assignment to orders and approval status.",
      "Ledger and commissions: per-order amounts, commission tracking and outstanding balances.",
      "Admin statistics: new, in-progress and completed orders over today, 7 days and 30 days.",
      "Telegram login: Telegram Mini App authentication, with a dev bypass for local testing."
    ],
    engineering: [],
    role: "full-stack developer",
    shots: [
      { file: "assets/clickusta-orders.jpg", caption: "Admin: orders with status, customer and assigned craftsman" },
      { file: "assets/clickusta-stats.jpg", caption: "Admin: today's order and craftsman statistics" },
      { file: "assets/clickusta-ledger.jpg", caption: "Admin: craftsman ledger with commission tracking" }
    ]
  },
  {
    id: "my-cloud",
    name: "My Cloud",
    status: "backend only",
    summary: "Cloud storage backend: file storage, auth and sharing.",
    stack: ["[backend stack]"],
    description: "[Describe what the backend does: file upload and storage, authentication, sharing and permissions, and the main API endpoints.]",
    features: [],
    engineering: [],
    role: "backend development",
    shots: []
  }
];

const $view = document.getElementById("view");

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function renderList() {
  document.title = "Umar Tolibov — Python, backend & ML";
  const rows = PROJECTS.map((p, i) => {
    const thumb = p.shots[0]
      ? `<img src="${esc(p.shots[0].file)}" alt="" loading="lazy">`
      : `<span class="no-shot">backend only</span>`;
    return `
      <a class="row" href="#/p/${esc(p.id)}">
        <span class="idx">${String(i + 1).padStart(2, "0")}</span>
        <span class="thumb">${thumb}</span>
        <span class="row-text">
          <span class="row-name">${esc(p.name)}</span>
          <span class="row-sum">${esc(p.summary)}</span>
          <span class="row-tags">${p.stack.slice(0, 4).map((t) => `<em>${esc(t)}</em>`).join("")}</span>
        </span>
        <span class="row-status">${esc(p.status)}</span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>`;
  }).join("");

  $view.innerHTML = `
    <section class="intro">
      <p class="prompt"><span class="dim">$</span> ls ~/projects</p>
      <h1>Python backend, bots, a CMS and ML.</h1>
      <p class="lead">Click a project for the description, features and screenshots.</p>
    </section>
    <section class="list">${rows}</section>`;
}

function renderDetail(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) {
    $view.innerHTML = `<p class="back"><a href="#/">← back</a></p><p>Project not found.</p>`;
    return;
  }
  document.title = `${p.name} — Umar Tolibov`;

  const gallery = p.shots.length
    ? `<section class="gallery">
        <h2><span class="dim">//</span> screenshots <span class="count">${p.shots.length}</span></h2>
        <div class="gallery-grid">
          ${p.shots.map((s, i) => `
            <button class="gshot" type="button" data-index="${i}" aria-label="Open screenshot: ${esc(s.caption)}">
              <img src="${esc(s.file)}" alt="${esc(s.caption)}" loading="lazy">
              <span class="cap">${esc(s.caption)}</span>
            </button>`).join("")}
        </div>
      </section>`
    : `<section class="gallery"><p class="muted">No screenshots for this project (backend only).</p></section>`;

  const block = (title, items) => items.length
    ? `<h2><span class="dim">//</span> ${title}</h2><ul class="bullets">${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`
    : "";

  $view.innerHTML = `
    <p class="back"><a href="#/">← all projects</a></p>
    <header class="detail-head">
      <h1>${esc(p.name)}</h1>
      <p class="status-line"><span class="pill">${esc(p.status)}</span>${p.live ? ` <a href="${esc(p.live)}">${esc(p.live.replace("https://", ""))} ↗</a>` : ""}</p>
      <p class="lead">${esc(p.description)}</p>
      <p class="meta"><span class="dim">role:</span> ${esc(p.role)}</p>
      <div class="tags">${p.stack.map((t) => `<em>${esc(t)}</em>`).join("")}</div>
    </header>
    ${gallery}
    <section class="detail-body">
      ${block("features", p.features)}
      ${block("engineering", p.engineering)}
    </section>`;

  // gallery opens the lightbox for this project's screenshots
  $view.querySelectorAll(".gshot").forEach((b) => {
    b.addEventListener("click", () => openLightbox(p.shots, Number(b.dataset.index)));
  });
}

function route() {
  const m = location.hash.match(/^#\/p\/(.+)$/);
  if (m) renderDetail(m[1]);
  else renderList();
  window.scrollTo(0, 0);
}

// ----- lightbox -----
const dialog = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCap = document.getElementById("lb-caption");
const lbStage = document.getElementById("lb-stage");
const lbZoom = document.getElementById("lb-zoom");
let shots = [];
let idx = 0;
let zoomed = false;

function showShot(i) {
  idx = (i + shots.length) % shots.length;
  lbImg.src = shots[idx].file;
  lbImg.alt = shots[idx].caption;
  lbCap.textContent = `${shots[idx].caption}  (${idx + 1} / ${shots.length})`;
  setZoom(false);
}

function setZoom(on) {
  zoomed = on;
  lbImg.classList.toggle("zoomed", on);
  lbZoom.textContent = on ? "zoom out" : "zoom in";
  lbStage.scrollTop = 0;
  lbStage.scrollLeft = 0;
}

function openLightbox(list, i) {
  shots = list;
  showShot(i);
  if (dialog.showModal) dialog.showModal();
}

document.getElementById("lb-close").onclick = () => dialog.close();
document.getElementById("lb-prev").onclick = () => showShot(idx - 1);
document.getElementById("lb-next").onclick = () => showShot(idx + 1);
lbZoom.onclick = () => setZoom(!zoomed);
lbImg.onclick = () => setZoom(!zoomed);
dialog.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showShot(idx - 1);
  if (e.key === "ArrowRight") showShot(idx + 1);
});
dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

window.addEventListener("hashchange", route);
route();
