// Hamburger Menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    if (hamburger) {
        hamburger.onclick = function() {
            nav.classList.toggle('open');
        };
    }

    // Booking Form Submission (Demo)
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.onsubmit = function(e) {
            e.preventDefault();
            document.getElementById('booking-msg').textContent = "Booking received! We'll contact you soon.";
            bookingForm.reset();
        };
    }

    // Contact Form Submission (Demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            document.getElementById('contact-msg').textContent = "Message sent! We'll reply shortly.";
            contactForm.reset();
        };
    }

    // Simple Login (Super User)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;
            if (username === 'admin' && password === 'lionheart360') {
                // Only the super user can login (demo)
                window.location.href = 'admin.html';
            } else {
                document.getElementById('login-msg').textContent = "Invalid credentials!";
            }
        };
    }

    // Admin Dashboard - Announcements
    const announcementForm = document.getElementById('announcement-form');
    if (announcementForm) {
        announcementForm.onsubmit = function(e) {
            e.preventDefault();
            localStorage.setItem('announcement', announcementForm.announcement.value);
            document.getElementById('admin-msg').textContent = "Announcement posted!";
            announcementForm.reset();
        };
    }
    // Admin Dashboard - Gallery Upload (Demo)
    const galleryForm = document.getElementById('gallery-form');
    if (galleryForm) {
        galleryForm.onsubmit = function(e) {
            e.preventDefault();
            const file = galleryForm.media.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                let gallery = JSON.parse(localStorage.getItem('gallery') || '[]');
                gallery.push({ url: url, type: file.type });
                localStorage.setItem('gallery', JSON.stringify(gallery));
                document.getElementById('admin-msg').textContent = "File uploaded!";
                galleryForm.reset();
            }
        };
    }
    // Admin Dashboard - Info
    const infoForm = document.getElementById('info-form');
    if (infoForm) {
        infoForm.onsubmit = function(e) {
            e.preventDefault();
            localStorage.setItem('companyInfo', infoForm.info.value);
            document.getElementById('admin-msg').textContent = "Information saved!";
            infoForm.reset();
        };
    }
    // Show Announcement on Homepage
    const announcementSection = document.getElementById('announcement');
    if (announcementSection) {
        const announcement = localStorage.getItem('announcement');
        if (announcement) {
            announcementSection.innerHTML = `<div class="announcement-banner">${announcement}</div>`;
        }
    }
    // Gallery Load
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        const gallery = JSON.parse(localStorage.getItem('gallery') || '[]');
        gallery.forEach(item => {
            if (item.type.startsWith('image')) {
                const img = document.createElement('img');
                img.src = item.url;
                galleryGrid.appendChild(img);
            } else if (item.type.startsWith('video')) {
                const video = document.createElement('video');
                video.src = item.url;
                video.controls = true;
                galleryGrid.appendChild(video);
            }
        });
    }
});


// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();

// Newsletter form feedback
document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const msg = document.getElementById("newsletter-msg");
    msg.textContent = "Thanks for subscribing!";
    msg.style.color = "#f9c846";
    this.reset();
});