/* ==========================================================================
   KB Mgazi — Professional Portfolio
   All personal data lives in the arrays/objects below. Edit these to
   update the site — no HTML editing required for content changes.
   ========================================================================== */

/* ---------------------------------------------------------------------
   1. PROFILE STATS
   Shown in the hero snapshot and the metrics strip.
   Do not inflate these — leave "0" or "—" until you have a real figure.
--------------------------------------------------------------------- */
const profileStats = {
  certifications: "6+",
  projects: "5+",
  technologies: "7+",
  experience: "1+ year"
};

/* ---------------------------------------------------------------------
   2. WORK EXPERIENCE
   Add a new object to this array for each role. Order: most recent first.
--------------------------------------------------------------------- */
const experience = [
  {
    organization: "Network International Payment Services",
    position: "Test Analyst (Intern)",
    startDate: "1 Oct 2024",
    endDate: "30 Sep 2025",
    location: "Johannesburg, South Africa",
    description:
      "Testing card and payments systems — issuing platforms for credit, prepaid, and debit cards — across African banking clients.",
    responsibilities: [
      "Functional Testing",
      "Manual Testing",
      "Regression Testing",
      "Integration Testing",
      "End-to-end Testing",
      "SQL / PostgreSQL",
      "UAT",
      "Agile",
      "SDLC / STLC",
      "Testing Execution: Performed functional, regression, and API testing on digital payment solutions (POS, MOTO, e-commerce), ensuring accurate and reliable transaction flows.",
      "Platform Expertise: Tested issuing platforms for credit, prepaid, and debit cards across multiple African banks, deepening knowledge of regional payment ecosystems.",
      "Test Lifecycle Management: Developed, executed, and maintained test plans, cases, and scripts (manual and automated) to validate core payment functionalities and compliance with banking standards.",
      "Quality Assurance: Applied UAT and regression testing to successfully support rollouts of new features in card issuing and payment platforms.",
      "Defect Management: Collaborated with development and business teams to efficiently identify, log, and resolve defects, significantly improving product quality.",
      "Backend Validation: Conducted integration testing and utilized SQL/PostgreSQL queries to validate transaction data and backend system integrity.",
      "Process Adherence: Leveraged QA methodologies, SDLC, and STLC best practices to ensure structured, high-quality testing processes.",
      "Cross-Functional Collaboration: Participated in design reviews, Agile ceremonies, and requirement analysis, providing QA insights to prevent defects early in the lifecycle.",
      "Compliance: Ensured strict compliance with QA best practices, banking regulations, and industry standards, safeguarding transaction integrity and security."
    ],
    tools: ["Postman API", "Swagger API", "WIBMO - 3D secure system", "mySQL", "Way4 digital payment software ", "JIRA (Defect Management)", "Putty (Validation Reports)", "WinSCP", "Confluence", "Microsoft Office Suite"],
  }
  // Add further roles here as additional objects.
];

/* ---------------------------------------------------------------------
   3. EDUCATION
--------------------------------------------------------------------- */
const education = [
  {
    institution: "Rosebank International (formerly Rosebank College)",
    qualification: "Bachelor of IT (Business Systems)",
    level: "NQF LEVEL 7",
    status: "In Progress",
    modules: [
      "Systems Analysis & Design",
      "Programming Logic and Design",
      "Programming (Java)",
      "Web Development",
      "Business Management 1A, 1B, 2A",
      "IT Professional Practice",
      "Mathematical Principles for Computer Science",
      "Business Information Systems",
      "Business Analysis 2A, 3A, 3B",
      "Databases",
      "IT Project Management",
      "Business Decision Modeling",
      "IT Management",
      "Human Computer Interaction",
      "IT Risk Management",
      "Enterprise Resource Planning",
      "Information Systems Strategy"
    ],
    description: "Undergraduate degree focuses on Information Technology Management and specializes in Business Analysis, with the skills to analyze business elements and processes with the added ability to design IT solutions is extremely high. "
  }
  // Add further qualifications here as additional objects.
];

/* ---------------------------------------------------------------------
   4. CERTIFICATIONS & CREDENTIALS
   Placeholder example records only — replace with real certifications.
   Place matching certificate images in assets/certificates/.
   category must be one of: Cloud, Testing, Programming, ITSM, Business,
   Project Management, Blockchain, Fintech, Other
--------------------------------------------------------------------- */
const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud",
    issueDate: "21/06/2025",
    expiryDate: "21/06/2028",
    credentialId: "7b82d3437d2e4450ab434eef79013471",
    status: "Complete",
    description: "Foundational cloud certification demonstrating knowledge of AWS Cloud concepts, core services, security, architecture, pricing, billing, and cloud technology fundamentals. It covers how AWS services support business and technical requirements, including compute, storage, databases, networking, security, cloud economics, and the AWS shared responsibility model.",
    image: "assets/certificates/AWS Certified Cloud Practitioner certificate.pdf",
    verificationUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential"
  },
  {
    name: "Understanding the Middle East Electronic Payments Framework and Landscape",
    issuer: "Network International Training Academy",
    category: "Card & Payments",
    issueDate: "21/11/2024",
    expiryDate: "N/A",
    status: "Complete",
    description: "Covers the electronic payments ecosystem across the Middle East, including payment frameworks, infrastructure, payment methods, key stakeholders, regulatory considerations, and the evolution of digital payments. Provides an understanding of card payments, electronic funds transfers, payment schemes, digital wallets, instant payments, payment processing, and emerging payment technologies, with insight into the regional payments landscape and its role in financial services and fintech.",
    image: "assets/certificates/certification-The-Middle-Eastern-Payments-Framework-and-Landscape-N-kb.mgazi.pdf",
    verificationUrl: ""
  },
  {
    name: "Understanding the South African Electronic Payments Framework and Landscape",
    issuer: "Network International Training Academy",
    category: "Card & Payments",
    issueDate: "21/11/2024",
    expiryDate: "N/A",
    status: "Complete",
    description: "Covers the electronic payments ecosystem across the South Africa, including payment frameworks, infrastructure, payment methods, key stakeholders, regulatory considerations, and the evolution of digital payments. Provides an understanding of card payments, electronic funds transfers, payment schemes, digital wallets, instant payments, payment processing, and emerging payment technologies, with insight into the regional payments landscape and its role in financial services and fintech.",
    image: "assets/certificates/certification-The-South-African-Payments-Framework-and-Landscape-N-kb.mgazi.pdf",
    verificationUrl: ""
  },
  {
    name: "FinTech - Digital Payments (Card & POS) Tools and Strategies",
    issuer: "Udemy",
    category: "FinTech",
    issueDate: "26/11/2024",
    expiryDate: "N/A",
    status: "Complete",
    description: "Covers the fundamentals of card-based and Point-of-Sale (POS) payment ecosystems, including transaction processing, payment flows, card networks, acquiring and issuing, authorization, clearing and settlement, and key participants. Develops knowledge of digital payment tools, POS technologies, payment security, transaction strategies, and emerging trends used to support secure, efficient, and scalable electronic payments.",
    image: "assets/certificates/FinTech - Digital Payments (Card & POS) Tools and Strategies - certification.pdf",
    verificationUrl: ""
  },
  {
    name: "Software Testing: Get A Tech Job in Software Testing 2024",
    issuer: "Udemy",
    category: "Testing",
    issueDate: "26/11/2024",
    expiryDate: "N/A",
    status: "Complete",
    description: "Covers the fundamentals and practical application of software testing and quality assurance, including software development life cycles, test planning, test case design, functional and non-functional testing, regression testing, defect identification and reporting, and test execution. Develops practical knowledge of QA processes, testing methodologies, bug tracking, test documentation, and industry practices used to validate software quality and reliability.",
    image: "assets/certificates/Software Testing 2024-certification.pdf",
    verificationUrl: ""
  },
  {
    name: "Professional Foundations - Professional Development Skills for the Digital Age.",
    issuer: "alx-africa",
    category: "Professional Development",
    issueDate: "15/04/2025",
    expiryDate: "N/A",
    status: "Complete",
    description: "Develops essential professional, workplace, and digital-age skills required to succeed in modern technology-driven organisations. Covers communication, collaboration, problem-solving, critical thinking, professional effectiveness, adaptability, self-management, and career development, with an emphasis on building the mindset and capabilities needed to work effectively in a rapidly changing digital environment.",
    image: "assets/certificates/Professional-Foundations-certificate-keamohetse-mgazi.pdf",
    verificationUrl: "https://savanna.alxafrica.com/certificates/pzYr9E832H"
  }
  // Add further certifications here. These three are examples only —
  // replace them with your actual certifications before publishing.
];

const certCategories = ["All", "Cloud", "Testing", "Programming", "Fintech", "Professional Development","Card & Payments"];

/* ---------------------------------------------------------------------
   5. SKILLS
   level must be one of: "Familiar", "Working Knowledge", "Proficient",
   "Advanced", or omitted entirely if not yet self-assessed.
--------------------------------------------------------------------- */
const skillGroups = [
  {
    category: "Technical Skills",
    note: "Programming, web, and core tooling",
    items: [
      { name: "Java" },
      { name: "HTML / CSS / JavaScript" },
      { name: "SQL" },
      { name: "REST APIs & JSON" },
      { name: "Git & GitHub" }
    ]
  },
  {
    category: "Software Testing",
    note: "Manual and structured QA practice",
    items: [
      { name: "Functional Testing" },
      { name: "Regression Testing" },
      { name: "API Testing" },
      { name: "Integration Testing" },
      { name: "Manual Testing" },
      { name: "Systems Integration Testing" },
      { name: "End-to-end Testing" },
      { name: "Card & Payments Systems Testing" },
      { name: "User Acceptance Testing (UAT)" }
    ]
  },
  {
    category: "Business & Systems",
    note: "Analysis and design foundations",
    items: [
      { name: "Systems Analysis (OOAD/UML)" },
      { name: "Business Analysis" },
      { name: "Requirements Analysis" },
      { name: "Process Modelling" }
    ]
  },
  {
    category: "Cloud & Emerging Technologies",
    note: "Areas of active study",
    items: [
      { name: "Cloud Computing Fundamentals" },
      { name: "Fintech & Digital Payments" },
      { name: "Professional Development" }
    ]
  }
  // Add "level: 'Proficient'" (etc.) to any item above once you've
  // explicitly assessed yourself at that level.
];

/* ---------------------------------------------------------------------
   6. PROJECTS
   Placeholder entries — replace with real projects.
   category: Cloud, Software Development, API Testing, Fintech,
   Business Systems, Web Development, Blockchain
--------------------------------------------------------------------- */
const projects = [
  {
    name: "[ADD PROJECT NAME]",
    category: "Software Development",
    description: "[ADD PROJECT DESCRIPTION — what it is and what it demonstrates.]",
    problem: "[ADD THE PROBLEM THIS PROJECT ADDRESSES]",
    technologies: ["[ADD TECH]", "[ADD TECH]"],
    functionality: "[ADD KEY FUNCTIONALITY]",
    githubUrl: "",
    demoUrl: ""
  },
  {
    name: "[ADD PROJECT NAME]",
    category: "Business Systems",
    description: "[ADD PROJECT DESCRIPTION.]",
    problem: "[ADD THE PROBLEM THIS PROJECT ADDRESSES]",
    technologies: ["[ADD TECH]"],
    functionality: "[ADD KEY FUNCTIONALITY]",
    githubUrl: "",
    demoUrl: ""
  }
  // Add further projects here as additional objects.
];

/* =======================================================================
   RENDERING
   ======================================================================= */

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function formatResponsibility(text) {
  const match = text.match(/^([^:]{2,40}):\s*(.*)$/);
  if (!match) return text;
  return `<strong>${match[1]}:</strong> ${match[2]}`;
}

function statusPillClass(status) {
  const s = (status || "").toLowerCase();
  if (s === "active") return "status-active";
  if (s === "in progress") return "status-progress";
  if (s === "expired") return "status-expired";
  return "status-completed";
}

/* ---- Hero stats + metrics strip ---- */
function renderStats() {
  const heroStats = document.getElementById("heroStats");
  const metricsStrip = document.getElementById("metricsStrip");
  const entries = [
    { label: "Certifications", value: profileStats.certifications },
    { label: "Projects", value: profileStats.projects },
    { label: "Technologies", value: profileStats.technologies },
    { label: "Experience", value: profileStats.experience }
  ];

  heroStats.innerHTML = "";
  entries.slice(0, 3).forEach((e) => {
    const stat = el("div", "cp-stat", `<strong>${e.value}</strong><span>${e.label}</span>`);
    heroStats.appendChild(stat);
  });

  metricsStrip.innerHTML = "";
  entries.forEach((e) => {
    const metric = el("div", "metric", `<strong>${e.value}</strong><span>${e.label}</span>`);
    metricsStrip.appendChild(metric);
  });
}

/* ---- Experience & Education timelines ---- */
function renderExperience() {
  const wrap = document.getElementById("experienceTimeline");
  wrap.innerHTML = "";
  experience.forEach((job) => {
    const item = el("div", "timeline-item reveal");
    item.innerHTML = `
      <span class="timeline-dot"></span>
      <div class="timeline-card">
        <div class="timeline-head">
          <div>
            <h3>${job.position}</h3>
            <div class="timeline-org">${job.organization}</div>
          </div>
        </div>
        <div class="timeline-meta">
          <span>${job.startDate} – ${job.endDate}</span>
          <span>${job.location}</span>
        </div>
        <p>${job.description}</p>
        <h4>Responsibilities</h4>
        <ul class="responsibility-list">${job.responsibilities.map((r) => `<li>${formatResponsibility(r)}</li>`).join("")}</ul>
        <h4>Technologies &amp; Tools</h4>
        <div class="tag-list">${job.tools.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        ${job.achievements && job.achievements.length ? `<h4>Key Achievements</h4><ul class="responsibility-list">${job.achievements.map((a) => `<li>${formatResponsibility(a)}</li>`).join("")}</ul>` : ""}
      </div>`;
    wrap.appendChild(item);
  });
}

function renderEducation() {
  const wrap = document.getElementById("educationTimeline");
  wrap.innerHTML = "";
  education.forEach((ed) => {
    const item = el("div", "timeline-item reveal");
    item.innerHTML = `
      <span class="timeline-dot"></span>
      <div class="timeline-card">
        <div class="timeline-head">
          <div>
            <h3>${ed.qualification}</h3>
            <div class="timeline-org">${ed.institution}</div>
          </div>
          <span class="status-pill ${statusPillClass(ed.status)}">${ed.status}</span>
        </div>
        <div class="timeline-meta">
          <span>${ed.startDate} – ${ed.endDate}</span>
          ${ed.level ? `<span>${ed.level}</span>` : ""}
        </div>
        <p>${ed.description}</p>
        ${ed.modules && ed.modules.length ? `<h4>Relevant Modules</h4><div class="tag-list">${ed.modules.map((m) => `<span class="tag">${m}</span>`).join("")}</div>` : ""}
      </div>`;
    wrap.appendChild(item);
  });
}

/* ---- Certifications: render, filter, search, modal ---- */
function renderCertFilters() {
  const wrap = document.getElementById("certFilters");
  wrap.innerHTML = "";
  certCategories.forEach((cat, i) => {
    const btn = el("button", "filter-btn" + (i === 0 ? " active" : ""), cat);
    btn.type = "button";
    btn.dataset.category = cat;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyCertFilters();
    });
    wrap.appendChild(btn);
  });
}

function isPDF(path) {
  return /\.pdf(\?.*)?$/i.test(path || "");
}

function certCardHTML(cert) {
  const thumbInner = isPDF(cert.image)
    ? `
    <div class="pdf-thumb">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
      <span>PDF Certificate</span>
    </div>`
    : `
    <img src="${cert.image}" alt="${cert.name} certificate" loading="lazy"
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
    <div class="thumb-placeholder" style="display:none;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 15l5-5 4 4 5-6 4 5"/></svg>
      <span>[ADD CERTIFICATE IMAGE]</span>
    </div>`;

  return `
    <div class="cert-thumb" data-action="open-cert" tabindex="0" role="button" aria-label="View certificate: ${cert.name}">
      ${thumbInner}
    </div>
    <div class="cert-body">
      <div class="cert-top">
        <span class="cert-category-label">${cert.category}</span>
        <span class="status-pill ${statusPillClass(cert.status)}">${cert.status}</span>
      </div>
      <h3>${cert.name}</h3>
      <div class="cert-issuer">${cert.issuer}</div>
      <p class="cert-desc">${cert.description}</p>
      <div class="cert-meta">
        <span>Issued: ${cert.issueDate}</span>
        <span>Expires: ${cert.expiryDate}</span>
        ${cert.credentialId ? `<span class="credential-id">ID: ${cert.credentialId}</span>` : ""}
      </div>
      <div class="cert-actions">
        <button class="btn btn-outline btn-sm" data-action="open-cert">View Certificate</button>
        ${cert.verificationUrl ? `<a class="btn btn-ghost btn-sm" href="${cert.verificationUrl}" target="_blank" rel="noopener">Verify Credential</a>` : ""}
      </div>
    </div>`;
}

function renderCertGrid(list) {
  const grid = document.getElementById("certGrid");
  grid.innerHTML = "";
  if (!list.length) {
    grid.appendChild(el("div", "cert-empty", "No certifications match your search or filter."));
    return;
  }
  list.forEach((cert, index) => {
    const card = el("div", "cert-card reveal is-visible", certCardHTML(cert));
    card.querySelectorAll('[data-action="open-cert"]').forEach((node) => {
      node.addEventListener("click", () => openCertModal(cert));
      node.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") openCertModal(cert);
      });
    });
    grid.appendChild(card);
  });
}

function applyCertFilters() {
  const activeBtn = document.querySelector(".filter-btn.active");
  const category = activeBtn ? activeBtn.dataset.category : "All";
  const query = document.getElementById("certSearch").value.trim().toLowerCase();

  const filtered = certifications.filter((c) => {
    const matchesCategory = category === "All" || c.category === category;
    const haystack = `${c.name} ${c.issuer} ${c.category} ${c.description}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesCategory && matchesQuery;
  });

  renderCertGrid(filtered);
}

/* ---- Certificate modal ---- */
let lastFocusedElement = null;

function openCertModal(cert) {
  const modal = document.getElementById("certModal");
  document.getElementById("certModalTitle").textContent = cert.name;

  const img = document.getElementById("certModalImg");
  const frame = document.getElementById("certModalFrame");

  if (isPDF(cert.image)) {
    img.style.display = "none";
    img.src = "";
    frame.style.display = "block";
    frame.src = cert.image;
  } else {
    frame.style.display = "none";
    frame.src = "";
    img.style.display = "block";
    img.src = cert.image;
    img.alt = `${cert.name} certificate — ${cert.issuer}`;
  }

  const fullsize = document.getElementById("certModalFullsize");
  fullsize.href = cert.image;

  const verify = document.getElementById("certModalVerify");
  if (cert.verificationUrl) {
    verify.href = cert.verificationUrl;
    verify.style.display = "inline-flex";
  } else {
    verify.style.display = "none";
  }

  lastFocusedElement = document.activeElement;
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
  document.getElementById("certModalClose").focus();
}

function closeCertModal() {
  const modal = document.getElementById("certModal");
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
  document.getElementById("certModalFrame").src = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

/* ---- Skills ---- */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";
  skillGroups.forEach((group) => {
    const card = el("div", "skill-card reveal");
    const items = group.items
      .map(
        (item) => `
      <div class="skill-item">
        <span>${item.name}</span>
        ${item.level ? `<span class="skill-level" data-level="${item.level}">${item.level}</span>` : ""}
      </div>`
      )
      .join("");
    card.innerHTML = `<h3>${group.category}</h3><p class="skill-cat-note">${group.note || ""}</p>${items}`;
    grid.appendChild(card);
  });
}

/* ---- Projects ---- */
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  projects.forEach((p) => {
    const card = el("div", "project-card reveal");
    card.innerHTML = `
      <span class="cert-category-label">${p.category}</span>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="tag-list">${p.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="project-links">
        ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener">GitHub ↗</a>` : `<span style="color:var(--color-grey-light); font-size:0.85rem;">[ADD GITHUB LINK]</span>`}
        ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener">Live Demo ↗</a>` : ""}
      </div>`;
    grid.appendChild(card);
  });
}

/* =======================================================================
   NAVIGATION, THEME, SCROLL-REVEAL, MISC
   ======================================================================= */

function initNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    hamburger.classList.toggle("is-open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      hamburger.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Active link highlighting via IntersectionObserver
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navAnchors = Array.from(navLinks.querySelectorAll("a"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => observer.observe(s));
}

function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const stored = null; // No browser storage used — theme resets each visit by design.
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.setAttribute("aria-pressed", "true");
  }

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      toggle.setAttribute("aria-pressed", "false");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      toggle.setAttribute("aria-pressed", "true");
    }
  });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach((r) => r.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((r) => observer.observe(r));
}

function initCertModal() {
  const modal = document.getElementById("certModal");
  document.getElementById("certModalClose").addEventListener("click", closeCertModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeCertModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeCertModal();
  });
}

function initCertSearch() {
  document.getElementById("certSearch").addEventListener("input", applyCertFilters);
}

/* =======================================================================
   INIT
   ======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footerYear").textContent = new Date().getFullYear();

  renderStats();
  renderExperience();
  renderEducation();
  renderCertFilters();
  applyCertFilters();
  renderSkills();
  renderProjects();

  initNav();
  initTheme();
  initCertModal();
  initCertSearch();
  initScrollReveal();
});