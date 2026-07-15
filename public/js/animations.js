// public/js/animations.js
export function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in reveal sections
    gsap.utils.toArray('.reveal').forEach((elem) => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Optimized Staggered grid animations
    const grids = ['.programs-grid', '.faculty-grid', '.institutions-grid', '.tests-list', '.grid'];
    grids.forEach(grid => {
        const target = document.querySelector(grid);
        if (target && target.children.length > 0) {
            gsap.from(target.children, {
                opacity: 0,
                y: 30,
                scale: 0.98,
                duration: 0.6,
                stagger: {
                    amount: 0.4,
                    from: "start"
                },
                ease: "expo.out",
                scrollTrigger: {
                    trigger: grid,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        }
    });
}

export function initSmoothScroll() {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }
}

export function animateCounter(element, target) {
    let current = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / target));
    
    const timer = setInterval(() => {
        current += 1;
        element.textContent = current;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        }
    }, stepTime);
}