document.addEventListener('DOMContentLoaded', () => {
    const hiddenbox = document.querySelectorAll('.box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenbox.forEach(div => {
        observer.observe(div);
    });
});
