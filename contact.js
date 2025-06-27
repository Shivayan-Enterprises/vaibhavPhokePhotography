
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
    .from('.contact-title', { 
        opacity: 0, 
        y: 100, 
        duration: 1.2, 
        ease: "power3.out" 
    })
    .from('.contact-subtitle', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        ease: "power2.out" 
    }, "-=0.5");

// Contact info animations
gsap.from('.contact-block', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact-content',
        start: "top 70%"
    }
});

gsap.from('.contact-item', {
    opacity: 0,
    x: -30,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.contact-details',
        start: "top 80%"
    }
});

// Form animations
gsap.from('.form-group', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.contact-form',
        start: "top 80%"
    }
});

// Form input interactions
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input.nextElementSibling.nextElementSibling, {
            width: '100%',
            duration: 0.3
        });
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            gsap.to(input.nextElementSibling.nextElementSibling, {
                width: '0%',
                duration: 0.3
            });
        }
    });
});

// Contact icons hover effect
document.querySelectorAll('.contact-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
    });
    
    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3
        });
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const button = document.querySelector('.submit-button');
    const buttonText = button.querySelector('span');
    
    // Button loading animation
    gsap.to(buttonText, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            buttonText.textContent = 'Sending...';
            gsap.to(buttonText, {
                opacity: 1,
                duration: 0.2
            });
        }
    });
    
    // Simulate form submission
    setTimeout(() => {
        gsap.to(buttonText, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                buttonText.textContent = 'Message Sent!';
                gsap.to(buttonText, {
                    opacity: 1,
                    duration: 0.2
                });
                
                // Reset after 2 seconds
                setTimeout(() => {
                    gsap.to(buttonText, {
                        opacity: 0,
                        duration: 0.2,
                        onComplete: () => {
                            buttonText.textContent = 'Send Message';
                            gsap.to(buttonText, {
                                opacity: 1,
                                duration: 0.2
                            });
                        }
                    });
                }, 2000);
            }
        });
    }, 1500);
});

// Footer fade in
gsap.from('.footer', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.footer',
        start: "top 90%"
    }
});
