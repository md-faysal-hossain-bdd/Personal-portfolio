document.addEventListener('DOMContentLoaded', function() {
    // ===== Initialize Projects Carousel =====
    var projectsCarousel = document.getElementById('projectsCarousel');
    if (projectsCarousel) {
        new bootstrap.Carousel(projectsCarousel, {
            interval: 2000,
            ride: 'carousel',
            wrap: true,
            pause: false
        });
    }

    // ===== Contact Form Handling =====
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var name = document.getElementById('cfName').value.trim();
            var email = document.getElementById('cfEmail').value.trim();
            var message = document.getElementById('cfMessage').value.trim();

            if (!name || !email || !message) {
                alert('Please fill all fields.');
                return;
            }

            var subject = encodeURIComponent('Contact from portfolio: ' + name);
            var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');

            // Open default mail client with pre-filled email
            window.location.href = 'mailto:teambangladesh599@gmail.com?subject=' + subject + '&body=' + body;

            // Optional: Reset form after submission
            contactForm.reset();
        });
    }

    // ===== Set Current Year in Footer =====
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
