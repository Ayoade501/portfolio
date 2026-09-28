/* ==========================================================
   ADVANCED ANIMATION & INTERACTION ENGINE
   ========================================================== */

(() => {
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

    // 1. Particle Canvas Engine
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = Array.from({ length: 45 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.8 + 0.8
        }));

        let mouse = { x: -1000, y: -1000 };
        window.addEventListener('pointermove', e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(139, 228, 206, 0.45)';
                ctx.fill();

                // Connect nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(139, 228, 206, ${0.12 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }

    // 2. Scroll Progress & Header Transformation
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.prepend(bar);

    const header = document.querySelector('header');
    let lastY = scrollY;

    addEventListener('scroll', () => {
        const y = scrollY;
        const max = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

        if (header) {
            header.classList.toggle('is-scrolled', y > 20);
            header.classList.toggle('is-hidden', y > lastY && y > 280);
        }
        lastY = y;
    }, { passive: true });

    // 3. Cursor Spotlight Tracking
    const spotlight = document.getElementById('cursorSpotlight');
    if (finePointer && spotlight) {
        addEventListener('pointermove', e => {
            spotlight.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }

    // 4. Interactive 3D Card Tilt
    if (finePointer) {
        document.querySelectorAll('.tilt-card, .project-card').forEach(card => {
            card.addEventListener('pointermove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotateX = (-y / (rect.height / 2)) * 8;
                const rotateY = (x / (rect.width / 2)) * 8;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });

            card.addEventListener('pointerleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            });
        });
    }

    // 5. Physics-Driven Swinging Cord Motion
    const hangingFrame = document.getElementById('hangingFrame');
    if (hangingFrame) {
        let angle = 0;
        let velocity = 0;
        let isDragging = false;
        let startX = 0;

        function updatePhysics() {
            if (!isDragging) {
                const springForce = -0.05 * angle;
                velocity += springForce;
                velocity *= 0.93; // Damping
                angle += velocity;
            }
            hangingFrame.style.transform = `rotate(${angle}deg)`;
            requestAnimationFrame(updatePhysics);
        }
        updatePhysics();

        hangingFrame.addEventListener('pointerdown', e => {
            isDragging = true;
            startX = e.clientX;
        });

        addEventListener('pointermove', e => {
            if (isDragging) {
                const deltaX = e.clientX - startX;
                angle = Math.max(-35, Math.min(35, deltaX * 0.3));
            }
        });

        addEventListener('pointerup', () => {
            if (isDragging) {
                isDragging = false;
                velocity = angle * 0.15;
            }
        });
    }

    // 6. Metric Counters Animation
    const counters = document.querySelectorAll('.metric-number');
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'), 10);
                let current = 0;
                const step = Math.max(1, Math.floor(target / 30));
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        entry.target.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = current + '+';
                    }
                }, 40);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // 7. Staggered Scroll Reveal
    const revealer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                revealer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .metric-card, .skill-badge-card, .timeline-item, .contact-link').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.6s ease ${index % 5 * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index % 5 * 0.08}s`;
        revealer.observe(el);
    });

    // Add revealed state rule dynamically
    const style = document.createElement('style');
    style.textContent = '.is-revealed { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.append(style);
})();