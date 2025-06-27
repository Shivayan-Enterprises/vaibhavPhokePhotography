
// GSAP Registration
gsap.registerPlugin(ScrollTrigger);

// Global Variables
let cursor = document.querySelector('.cursor');
let cursorTrail = document.querySelector('.cursor-trail');
let preloader = document.getElementById('preloader');
let navbar = document.getElementById('navbar');

// Custom Cursor
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Delayed trail effect
    setTimeout(() => {
        cursorTrail.style.left = e.clientX + 'px';
        cursorTrail.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effects
document.querySelectorAll('a, button, .nav-dot').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'radial-gradient(circle, #39ff14 0%, transparent 70%)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'radial-gradient(circle, #00d4ff 0%, transparent 70%)';
    });
});

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            initAnimations();
        }, 500);
    }, 2000);
});

// Navigation scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll function
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation click handlers
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScrollTo(target);
    });
});

// Initialize animations
function initAnimations() {
    // Hero section animations
    gsap.timeline()
        .from('.hero-title .glitch-text', {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-title .neon-text', {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-divider', {
            duration: 0.8,
            scaleX: 0,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.cta-button', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.3');
    
    // Particles animation
    createParticles();
    
    // About section animations
    gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    })
    .from('.about-image-wrapper', {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
    })
    .from('.about-content', {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.text-block', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.5');
    
    // Work section animations
    gsap.timeline({
        scrollTrigger: {
            trigger: '.work',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    })
    .from('.work-header', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    })
    .from('.project-info', {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.project-media', {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.8');
    
    // Contact section animations
    gsap.timeline({
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    })
    .from('.contact-header', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    })
    .from('.contact-info', {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.contact-form', {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.8');
    
    // Form input animations
    initFormAnimations();
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = '#00d4ff';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
        
        // Animate particle
        gsap.to(particle, {
            y: '-=100',
            duration: Math.random() * 3 + 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: Math.random() * 2
        });
    }
}

// Project navigation
const projectImages = document.querySelectorAll('.project-image');
const navDots = document.querySelectorAll('.nav-dot');
const projectData = [
    {
        category: 'Commercial Photography',
        title: 'NEON NIGHTS',
        description: 'A high-energy campaign showcasing urban nightlife through vibrant neon aesthetics.'
    },
    {
        category: 'Artistic Video',
        title: 'COSMIC DREAMS',
        description: 'An ethereal journey through space and time, blending reality with imagination.'
    },
    {
        category: 'Nature Documentary',
        title: 'FOREST WHISPERS',
        description: 'Capturing the hidden stories within ancient forests through cinematic storytelling.'
    }
];

let currentProject = 0;

navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        switchProject(index);
    });
});

function switchProject(index) {
    // Update active states
    projectImages[currentProject].classList.remove('active');
    navDots[currentProject].classList.remove('active');
    
    currentProject = index;
    
    projectImages[currentProject].classList.add('active');
    navDots[currentProject].classList.add('active');
    
    // Update project info with animation
    const projectInfo = document.querySelector('.project-info');
    gsap.to(projectInfo, {
        duration: 0.3,
        opacity: 0,
        y: 20,
        onComplete: () => {
            document.querySelector('.project-category').textContent = projectData[index].category;
            document.querySelector('.project-title').textContent = projectData[index].title;
            document.querySelector('.project-description').textContent = projectData[index].description;
            
            gsap.to(projectInfo, {
                duration: 0.3,
                opacity: 1,
                y: 0
            });
        }
    });
}

// Auto-rotate projects
setInterval(() => {
    const nextProject = (currentProject + 1) % projectImages.length;
    switchProject(nextProject);
}, 5000);

// Form animations and validation
function initFormAnimations() {
    const formInputs = document.querySelectorAll('.form-input');
    const contactForm = document.getElementById('contactForm');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input.parentNode.querySelector('.form-glow'), {
                duration: 0.3,
                opacity: 0.1
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input.parentNode.querySelector('.form-glow'), {
                duration: 0.3,
                opacity: 0
            });
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Animate submit button
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.querySelector('span').textContent;
        
        submitButton.querySelector('span').textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitButton.querySelector('span').textContent = 'Message Sent!';
            
            setTimeout(() => {
                submitButton.querySelector('span').textContent = originalText;
                submitButton.disabled = false;
                contactForm.reset();
                
                // Reset form labels
                formInputs.forEach(input => {
                    const label = input.parentNode.querySelector('.form-label');
                    if (label) {
                        label.style.transform = '';
                        label.style.color = '';
                    }
                });
            }, 2000);
        }, 1500);
    });
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Parallax effects on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.about-image-wrapper');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add loading states for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        gsap.to(img, {
            duration: 0.5,
            opacity: 1,
            ease: 'power2.out'
        });
    });
    
    // Start with opacity 0
    img.style.opacity = '0';
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial states
    gsap.set('.hero-title .glitch-text, .hero-title .neon-text, .hero-subtitle, .cta-button', {
        opacity: 0,
        y: 100
    });
    
    gsap.set('.hero-divider', {
        scaleX: 0
    });
});
