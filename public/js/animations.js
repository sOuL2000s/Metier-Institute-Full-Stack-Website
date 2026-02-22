// public/js/animations.js
export function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15
    });

    reveals.forEach(reveal => revealObserver.observe(reveal));
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