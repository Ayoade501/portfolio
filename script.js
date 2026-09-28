/* ==========================================================
   PORTFOLIO CONFIG & DATA
   ========================================================== */

const portfolioConfig = {
    name: "Ayoade Naheem",
    title: "Application Security Professional",
    email: "ayoadenaheem@gmail.com",
    github: "https://github.com/Naheem501",
    linkedin: "https://www.linkedin.com/in/ayoade-naheem",
    tiktok: "https://www.tiktok.com/@thatoneayoade"
};

// Career journey roadmap steps
const journey = [
    {
        stage: "Foundation Stage",
        status: "done",
        title: "Web Development Mastery",
        text: "Engineered core web interfaces with HTML5, CSS3, JavaScript (ES6+), and Bootstrap to master front-end architecture and DOM interactions."
    },
    {
        stage: "Pivotal Shift",
        status: "done",
        title: "Transition to Application Security",
        text: "Focused core studies on software security principles, learning how vulnerabilities originate during development and how to mitigate them proactively."
    },
    {
        stage: "Current Focus",
        status: "current",
        title: "Application Security & OWASP Standards",
        text: "Deepening practical skills across HTTP protocol security, authentication mechanisms, OWASP Top 10 mitigation, and static/dynamic code analysis."
    },
    {
        stage: "Upcoming Milestone",
        status: "future",
        title: "Backend Security & DevSecOps Integration",
        text: "Expanding Node.js/Express backend engineering with automated security pipeline testing, SAST/DAST integration, and vulnerability management."
    }
];

// Complete Projects Dataset (Preserving all original project references)
const projects = [
    {
        title: "My Portfolio (Windows 11 OS Design)",
        year: "2026",
        category: "Frontend",
        featured: false,
        description: "A desktop-inspired developer portfolio operating system with interactive windows, taskbar features, and dynamic project filtering.",
        tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        image: "images/projects/IMG_16.png",
        github: "https://github.com/Ayoade501/my-portfolio",
        live: "https://my-portfolio-theta-nine-26.vercel.app/",
        learned: "Architected custom window management algorithms and modular state handling in pure vanilla JavaScript.",
        securityNote: "Enforced strict textContent sanitization to prevent potential client-side DOM XSS."
    },
    {
        title: "Secondary School Grading System",
        year: "2026",
        category: "JavaScript",
        featured: false,
        description: "Automated student grading software with real-time score input calculation and dynamic feedback UI.",
        tech: ["HTML", "CSS", "JavaScript", "Media Queries"],
        image: "images/projects/IMG_20.png",
        github: "https://github.com/Ayoade501/GRADING-SYSTEM",
        live: "https://grading-system-sigma-blond.vercel.app/",
        learned: "Engineered strict data validation logic for numerical score entry handling.",
        securityNote: "Added input boundaries to prevent out-of-range calculation errors."
    },
    {
        title: "Authentication Portal UI",
        year: "2026",
        category: "JavaScript",
        featured: false,
        description: "Modern Sign-Up and Sign-In web authentication interface with active client-side validation logic.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "images/projects/IMG_19.png",
        github: "https://github.com/Ayoade501/Sign-up-sign-in-page",
        live: "https://sign-up-sign-in-page-ten.vercel.app/",
        learned: "Mastered front-end authentication workflows and form state handling.",
        securityNote: "Designed with security input boundaries in preparation for password entropy rules."
    },
    {
        title: "Analytics Dashboard UI",
        year: "2026",
        category: "Web Development",
        featured: true,
        description: "Google Analytics-style dashboard interface featuring marketing sections, custom grid widgets, and metrics display.",
        tech: ["HTML", "CSS", "Grid", "Responsive"],
        image: "images/projects/IMG_11.png",
        github: "https://github.com/Ayoade501/analytics-style-dashboard",
        live: "https://analytics-style-dashboard.vercel.app/",
        learned: "Constructed complex grid layouts and optimized CSS performance.",
        securityNote: "Used generic design tokens to eliminate brand impersonation vectors."
    },
    {
        title: "Encyclopedia Search UI",
        year: "2026",
        category: "Web Development",
        featured: false,
        description: "Content-heavy longform reader UI focused on crisp typography and intuitive navigation.",
        tech: ["HTML", "CSS"],
        image: "images/projects/IMG_14.png",
        github: "https://github.com/Ayoade501/encyclopedia-ui-practice",
        live: "https://encyclopedia-ui-practice.vercel.app/",
        learned: "Optimized semantic layout structure and accessibility contrast ratios.",
        securityNote: "Built clean external link handlers with rel='noopener'."
    },
    {
        title: "Robot / T-Bot Agency Page",
        year: "2026",
        category: "Web Development",
        featured: false,
        description: "Agency landing page layout highlighting service breakdowns and responsive hero banners.",
        tech: ["HTML", "CSS"],
        image: "images/projects/IMG_15.png",
        github: "https://github.com/Ayoade501/Robot-T-bot-landing-rebuild",
        live: "https://robot-t-bot-landing-rebuild.vercel.app/",
        learned: "Mastered responsive CSS grid/flexbox breakpoints across all screen sizes.",
        securityNote: ""
    },
    {
        title: "Traffic Simulation Animation",
        year: "2026",
        category: "Frontend",
        featured: true,
        description: "Pure CSS keyframe animation simulating urban vehicle traffic and traffic light sequences.",
        tech: ["CSS3", "HTML5"],
        image: "images/projects/IMG_13.png",
        github: "https://github.com/Ayoade501/traffic-simulation-animation",
        live: "https://traffic-simulation-animation.vercel.app/",
        learned: "Advanced CSS keyframe choreography and hardware-accelerated animations.",
        securityNote: ""
    },
    {
        title: "E-Commerce Storefront UI",
        year: "2026",
        category: "Web Development",
        featured: true,
        description: "Responsive print shop storefront layout with product grids and category filters.",
        tech: ["HTML", "CSS"],
        image: "images/projects/IMG_12.png",
        github: "https://github.com/Ayoade501/print-shop-ui-practice",
        live: "https://print-shop-ui-practice.vercel.app/",
        learned: "Structured complex product gallery elements and shopping cart previews.",
        securityNote: ""
    },
    {
        title: "Web.dev Homepage Rebuild",
        year: "2026",
        category: "Web Development",
        featured: true,
        description: "Responsive replica of web.dev homepage showcasing modern web standards.",
        tech: ["HTML", "CSS", "Flexbox"],
        image: "images/projects/IMG_10.png",
        github: "https://github.com/Ayoade501/web-dev-responsive-rebuild",
        live: "https://web-dev-responsive-rebuild.vercel.app/",
        learned: "Deep dive into responsive layout debugging across desktop and mobile devices.",
        securityNote: ""
    }
];

/* ================= RENDERING LOGIC ================= */
(() => {
    // Populate text configs
    document.querySelectorAll('[data-config="name"]').forEach(el => el.textContent = portfolioConfig.name);
    document.querySelectorAll('[data-config="email-text"]').forEach(el => el.textContent = portfolioConfig.email);
    document.querySelectorAll('[data-config="email-link"]').forEach(el => el.href = `mailto:${portfolioConfig.email}`);
    document.querySelectorAll('[data-config="github-link"]').forEach(el => el.href = portfolioConfig.github);
    document.querySelectorAll('[data-config="linkedin-link"]').forEach(el => el.href = portfolioConfig.linkedin);
    document.querySelectorAll('[data-config="tiktok-link"]').forEach(el => el.href = portfolioConfig.tiktok);

    // Render Timeline
    const timelineEl = document.querySelector('.timeline');
    if (timelineEl) {
        journey.forEach(step => {
            const item = document.createElement('div');
            item.className = `timeline-item is-${step.status}`;
            item.innerHTML = `
                <div class="timeline-stage">${escapeText(step.stage)}</div>
                <h3>${escapeText(step.title)}</h3>
                <p>${escapeText(step.text)}</p>
            `;
            timelineEl.append(item);
        });
    }

   // Render Featured Projects on Home Page
    const homeGrid = document.getElementById('homeProjectsGrid');
    if (homeGrid) {
        const featuredProjects = projects.filter(project => project.featured === true);
        featuredProjects.forEach((project, index) => {
            homeGrid.append(buildProjectCard(project, index));
        });
    }

    // Render All Projects Page / Modal View
    const allGrid = document.getElementById('allProjectsGrid');
    const allFilters = document.getElementById('allProjectsFilters');
    
    if (allGrid && allFilters) {
        const categories = ['All', ...new Set(projects.map(p => p.category))];
        categories.forEach((cat, i) => {
            const btn = document.createElement('button');
            btn.className = `filter-btn${i === 0 ? ' is-active' : ''}`;
            btn.textContent = cat;
            btn.addEventListener('click', () => {
                allFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                renderAllProjectsList(cat === 'All' ? projects : projects.filter(p => p.category === cat));
            });
            allFilters.append(btn);
        });

        function renderAllProjectsList(list) {
            allGrid.innerHTML = '';
            list.forEach((project, index) => {
                allGrid.append(buildProjectCard(project, index));
            });
        }

        renderAllProjectsList(projects);
    }

    // Modal view handlers for "View All Projects"
    const openAllBtn = document.getElementById('openAllProjectsBtn');
    const closeAllBtn = document.getElementById('closeAllProjectsBtn');
    const allModal = document.getElementById('allProjectsModal');

    if (openAllBtn && allModal) {
        openAllBtn.addEventListener('click', () => allModal.classList.add('is-open'));
    }
    if (closeAllBtn && allModal) {
        closeAllBtn.addEventListener('click', () => allModal.classList.remove('is-open'));
    }

    // Mobile Drawer Setup
    const navToggle = document.querySelector('.nav-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    if (navToggle && drawer) {
        const closeBtn = drawer.querySelector('.mobile-drawer-close');
        navToggle.addEventListener('click', () => drawer.classList.add('is-open'));
        if (closeBtn) closeBtn.addEventListener('click', () => drawer.classList.remove('is-open'));
        drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('is-open')));
    }
})();

// Build Project Card Component
function buildProjectCard(project, index) {
    const card = document.createElement('article');
    card.className = 'project-card';

    const thumbHTML = project.image
        ? `<div class="project-thumb"><img src="${project.image}" alt="${escapeText(project.title)}" loading="lazy"></div>`
        : `<div class="project-thumb"><div class="project-thumb-placeholder">Preview</div></div>`;

    const body = document.createElement('div');
    body.className = 'project-body';

    body.innerHTML = `
        <div class="project-category">${escapeText(project.category)} · ${escapeText(project.year)}</div>
        <h3>${escapeText(project.title)}</h3>
        <p>${escapeText(project.description)}</p>
        <div class="tech-tags">${project.tech.map(t => `<span>${escapeText(t)}</span>`).join('')}</div>
        <div class="project-links"></div>
    `;

    const linksEl = body.querySelector('.project-links');
    if (project.live) {
        const liveLink = document.createElement('a');
        liveLink.href = project.live;
        liveLink.target = '_blank';
        liveLink.rel = 'noopener noreferrer';
        liveLink.textContent = 'Live Demo ↗';
        linksEl.append(liveLink);
    }
    if (project.github) {
        const ghLink = document.createElement('a');
        ghLink.href = project.github;
        ghLink.target = '_blank';
        ghLink.rel = 'noopener noreferrer';
        ghLink.textContent = 'Source ↗';
        linksEl.append(ghLink);
    }

    const detailsBtn = document.createElement('button');
    detailsBtn.type = 'button';
    detailsBtn.className = 'project-details-btn';
    detailsBtn.style.cssText = 'background:none;border:none;margin-left:auto;cursor:pointer;';
    detailsBtn.textContent = 'Case Study ↗';
    detailsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openCaseStudy(project);
    });
    linksEl.append(detailsBtn);

    card.addEventListener('click', () => openCaseStudy(project));

    card.innerHTML = thumbHTML;
    card.append(body);
    return card;
}

// Open Case Study Modal
function openCaseStudy(project) {
    let overlay = document.querySelector('.modal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = '<div class="modal-panel" role="dialog"></div>';
        document.body.append(overlay);
        overlay.addEventListener('click', e => { if (e.target === overlay) closeCaseStudy(); });
    }
    const panel = overlay.querySelector('.modal-panel');
    panel.innerHTML = `
        <button class="modal-close">&times;</button>
        <h3>${escapeText(project.title)}</h3>
        <div class="modal-field">
            <div class="modal-field-label">OVERVIEW</div>
            <p>${escapeText(project.description)}</p>
        </div>
        <div class="modal-field">
            <div class="modal-field-label">DEVELOPMENT & LEARNING</div>
            <p>${escapeText(project.learned || 'Core full-stack web practice.')}</p>
        </div>
        ${project.securityNote ? `
        <div class="modal-field">
            <div class="modal-field-label">SECURITY HIGHLIGHT</div>
            <p>${escapeText(project.securityNote)}</p>
        </div>` : ''}
        <div class="modal-field">
            <div class="modal-field-label">TECHNOLOGIES</div>
            <p>${project.tech.map(escapeText).join(', ')}</p>
        </div>
    `;
    panel.querySelector('.modal-close').addEventListener('click', closeCaseStudy);
    overlay.classList.add('is-open');
}

function closeCaseStudy() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) overlay.classList.remove('is-open');
}

function escapeText(str) {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
}