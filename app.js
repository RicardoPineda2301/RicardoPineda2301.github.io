const SKILLS = [
  { name: "Automation", rating: 5 },
  { name: "QA Testing", rating: 5 },
  { name: "Test Planning", rating: 5 },
  { name: "Database Testing", rating: 4 },
  { name: "SQL", rating: 4 },
  { name: "Java", rating: 4 },
  { name: "Linux", rating: 4 },
  { name: "Python", rating: 4 },
  { name: "React", rating: 3 },
  { name: "JavaScript", rating: 3 },
];

const EXPERIENCE = [
  {
    dates: "Jul 2025 - Present",
    title: "Full Stack Developer",
    company: "Allied Global ITS · Spain (Remote)",
    current: true,
    bullets: [
      "Built scalable Node.js and React applications and improved system performance.",
    ],
    tags: ["Node.js", "React", "JavaScript", "Full Stack"],
  },
  {
    dates: "Nov 2024 - Jul 2025",
    title: "Lead Salesforce Quality Assurance Engineer",
    company: "Allied Global ITS · Zaragoza",
    bullets: [
      "Managed test strategy and quality assurance for Salesforce implementations.",
      "Led QA collaboration with developers and stakeholders.",
    ],
    tags: ["Salesforce", "Test Strategy", "QA Leadership"],
  },
  {
    dates: "Jun 2022 - Nov 2024",
    title: "Senior Software QA Automation Engineer",
    company: "Allied Global ITS · Zaragoza",
    bullets: [
      "Designed and maintained 200+ automated test cases, reducing manual testing by 40%.",
      "Resolved 150+ critical bugs and improved software stability.",
    ],
    tags: ["Selenium", "Cypress", "Playwright", "CI/CD"],
  },
  {
    dates: "Oct 2021 - Jun 2022",
    title: "Junior Software QA Engineer",
    company: "Conduent Business International · Spain (Remote)",
    bullets: [
      "Tested newly developed software and validated compliance standards.",
      "Collaborated with analysts, developers, and QA engineers on test plans.",
    ],
    tags: ["QA Testing", "Test Plans", "Compliance"],
  },
  {
    dates: "Aug 2020 - Sep 2021",
    title: "Java Sr. Developer",
    company: "Mercadeo Inmobiliario",
    bullets: [
      "Investigated defects to identify root causes and corrective actions.",
      "Adapted applications to market trends and customer demands.",
      "Performed QA testing to improve performance and reduce vulnerabilities.",
    ],
    tags: ["Java", "Root Cause Analysis", "QA Testing"],
  },
  {
    dates: "Dec 2017 - Jun 2018",
    title: "Java Jr. Developer",
    company: "Mercadeo Inmobiliario",
    bullets: [
      "Developed and maintained applications for the real estate industry.",
    ],
    tags: ["Java", "Backend"],
  },
];

const PROJECTS = [
  {
    name: "LOCALIS",
    category: "ai",
    lang: "Java",
    year: "2026",
    desc: "Local AI for Legacy Systems — bringing private, on-premise LLM capabilities into Java enterprise workflows.",
    url: "https://github.com/RicardoPineda2301/LOCALIS",
  },
  {
    name: "tailor-cv",
    category: "ai",
    lang: "Python",
    year: "2026",
    desc: "AI-first CV fine-tuner & PDF generator that adapts your real skills and experience to each job description without fabricating experience.",
    url: "https://github.com/RicardoPineda2301/tailor-cv",
  },
  {
    name: "LLM-FineTuner",
    category: "ai",
    lang: "Python",
    year: "2026",
    desc: "Fine-tuning toolkit for adapting local large language models to specialized tasks.",
    url: "https://github.com/RicardoPineda2301/LLM-FineTuner",
  },
  {
    name: "AMPLE",
    category: "tools",
    lang: "In Progress",
    year: "2026",
    desc: "Active personal project currently under development on GitHub.",
    url: "https://github.com/RicardoPineda2301/AMPLE",
  },
  {
    name: "XEM-Faucet",
    category: "blockchain",
    lang: "JavaScript",
    year: "2019",
    desc: "NEM (XEM) blockchain faucet designed to distribute 10 XEM every 60 minutes to submitted addresses with optional transaction messages.",
    url: "https://github.com/RicardoPineda2301/XEM-Faucet",
  },
];

function renderSkills() {
  const container = document.getElementById("skills-list");
  container.innerHTML = SKILLS.map((skill) => {
    const filled = "★".repeat(skill.rating);
    const empty = "★".repeat(5 - skill.rating);
    return `
      <div class="skill-item">
        <span>${skill.name}</span>
        <span class="stars" aria-label="${skill.rating} out of 5 stars">${filled}<span class="empty">${empty}</span></span>
      </div>
    `;
  }).join("");
}

function renderTimeline() {
  const container = document.getElementById("timeline");
  container.innerHTML = EXPERIENCE.map((item) => `
    <article class="timeline-item ${item.current ? "current" : ""}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-top">
          <h3 class="timeline-role">${item.title}</h3>
          <span class="timeline-date">${item.dates}</span>
        </div>
        <div class="timeline-company">${item.company}</div>
        <ul class="timeline-bullets">
          ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <div class="tag-row">
          ${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid");
  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  container.innerHTML = visible.map((proj) => `
    <article class="project-card">
      <div>
        <div class="project-top">
          <a class="project-name" href="${proj.url}" target="_blank" rel="noopener">${proj.name}</a>
          <span class="project-lang">${proj.lang}</span>
        </div>
        <p class="project-desc">${proj.desc}</p>
      </div>
      <div class="project-footer">
        <span>Updated ${proj.year}</span>
        <a href="${proj.url}" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
  `).join("");
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

function setupTheme() {
  const btn = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    btn.textContent = "🌙 Dark";
  }

  btn.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      btn.textContent = "☀️ Light";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      btn.textContent = "🌙 Dark";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderTimeline();
  renderProjects("all");
  setupFilters();
  setupTheme();
});
