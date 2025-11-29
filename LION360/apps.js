// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Gallery image loader (replace with backend fetch if needed)
const galleryImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80'
];

const galleryGrid = document.getElementById('gallery-grid');
if (galleryGrid) {
    galleryImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "LionHeart360 Gallery Image";
        galleryGrid.appendChild(img);
    });
}

// Newsletter subscription feedback
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const msg = document.getElementById("newsletter-msg");
        msg.textContent = "Thanks for subscribing!";
        msg.style.color = "#f9c846";
        newsletterForm.reset();
        // Optionally, send to backend here using fetch/AJAX.
    });
}

// Auto-update year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}