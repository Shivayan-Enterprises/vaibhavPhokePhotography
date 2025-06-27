
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
const navbar = document.querySelector('.navbar');

ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: { className: "scrolled", targets: ".navbar" }
});

// Hero animations
gsap.timeline()
    .from('.title-main', { 
        opacity: 0, 
        y: 100, 
        duration: 1.2, 
        ease: "power3.out" 
    })
    .from('.title-script', { 
        opacity: 0, 
        x: -50, 
        duration: 1, 
        ease: "power2.out" 
    }, "-=0.5")
    .from('.hero-cta', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        ease: "power2.out" 
    }, "-=0.3");

// Parallax effect for hero background
gsap.to('.hero-bg', {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: '.hero',
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Featured items animations
gsap.from('.featured-item', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.featured-grid',
        start: "top 80%",
        end: "bottom 20%",
    }
});

// Parallax images in featured section
document.querySelectorAll('.parallax-image').forEach(img => {
    gsap.to(img, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// Philosophy section animations
gsap.from('.philosophy-text', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.philosophy',
        start: "top 70%"
    }
});

gsap.from('.float-element', {
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.floating-elements',
        start: "top 80%"
    }
});

// Tilt effect for featured items
document.querySelectorAll('[data-tilt]').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        gsap.to(element, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.3,
            transformPerspective: 1000,
            transformOrigin: "center"
        });
    });
    
    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.3
        });
    });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                scrollTo: target.offsetTop - 100,
                duration: 1,
                ease: "power2.inOut"
            });
        }
    });
});
