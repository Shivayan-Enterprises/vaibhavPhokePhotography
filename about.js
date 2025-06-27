
// GSAP Setup
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

// Navbar scroll effect
ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: { className: "scrolled", targets: ".navbar" }
});

// Page entrance animations
gsap.timeline()
    .from('.page-title', { 
        opacity: 0, 
        y: 100, 
        duration: 1.2, 
        ease: "power3.out" 
    })
    .from('.page-subtitle', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        ease: "power2.out" 
    }, "-=0.5");

// Parallax background
gsap.to('.about-bg', {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
        trigger: '.page-hero',
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Story section animations
gsap.from('.story-title', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.story-section',
        start: "top 70%"
    }
});

gsap.from('.story-paragraph', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.story-text',
        start: "top 80%"
    }
});

// About image parallax
gsap.to('.about-image', {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: '.about-image-container',
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Skills animation
gsap.from('.skill-item', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.skills-grid',
        start: "top 80%"
    }
});

// Stats counter animation
gsap.from('.stat-number', {
    textContent: 0,
    duration: 2,
    ease: "power2.out",
    snap: { textContent: 1 },
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.stats-grid',
        start: "top 80%"
    }
});

// Floating skill icons hover effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.skill-icon'), {
            scale: 1.2,
            rotation: 360,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.skill-icon'), {
            scale: 1,
            rotation: 0,
            duration: 0.3
        });
    });
});
