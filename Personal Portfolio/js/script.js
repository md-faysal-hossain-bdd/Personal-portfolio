document.addEventListener('DOMContentLoaded', function() {
    // Initialize Projects Carousel
    var projectsCarousel = document.getElementById('projectsCarousel');
    if (projectsCarousel) {
        new bootstrap.Carousel(projectsCarousel, {
            interval: 2000,
            ride: 'carousel',
            wrap: true,
            pause: false
        });
    }

    // Contact form handling (simple client-side validation + mailto fallback)
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('cfName').value.trim();
            var email = document.getElementById('cfEmail').value.trim();
            var msg = document.getElementById('cfMessage').value.trim();
            if (!name || !email || !msg) {
                alert('Please fill all fields.');
                return;
            }
            var subject = encodeURIComponent('Contact from portfolio: ' + name);
            var body = encodeURIComponent(msg + '\n\n— ' + name + ' (' + email + ')');
            window.location.href = 'mailto:teambangladesh599@gmail.com?subject=' + subject + '&body=' + body;
        });
    }

    // Set current year in footer
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
