
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
    .from('.portfolio-title', { 
        opacity: 0, 
        y: 100, 
        duration: 1.2, 
        ease: "power3.out" 
    })
    .from('.portfolio-subtitle', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        ease: "power2.out" 
    }, "-=0.5");

// Portfolio items stagger animation
gsap.from('.portfolio-item', {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    stagger: {
        amount: 1.2,
        from: "random"
    },
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: '.grid-container',
        start: "top 80%",
        end: "bottom 20%"
    }
});

// Parallax effect for portfolio images
document.querySelectorAll('.portfolio-image').forEach(img => {
    gsap.to(img, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
            trigger: img.closest('.portfolio-item'),
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// Portfolio item hover animations
document.querySelectorAll('.portfolio-item').forEach(item => {
    const overlay = item.querySelector('.portfolio-overlay');
    const content = item.querySelector('.portfolio-content');
    
    item.addEventListener('mouseenter', () => {
        gsap.to(overlay, {
            opacity: 1,
            duration: 0.3
        });
        
        gsap.from(content.children, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.1
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(overlay, {
            opacity: 0,
            duration: 0.3
        });
    });
});

// Magnetic effect for portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) * 0.1;
        const moveY = (y - centerY) * 0.1;
        
        gsap.to(item, {
            x: moveX,
            y: moveY,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// CTA section animation
gsap.from('.cta-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.cta-section',
        start: "top 80%"
    }
});

// Category filter effect (simulated)
document.querySelectorAll('.portfolio-category').forEach(category => {
    category.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Add a pulse effect
        gsap.fromTo(category, {
            scale: 1
        }, {
            scale: 1.1,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });
    });
});
