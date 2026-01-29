// ========================
// SCROLL PROGRESS BAR
// ========================
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
});

// ========================
// TYPING ANIMATION
// ========================
const typingText = document.querySelector('.typing-text');
const roles = [
    'Full Stack Developer',
    'Software Engineer',
    'iOS Developer',
    'Cloud Enthusiast',
    'Problem Solver'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, 2000); // Pause at end
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    const typeSpeed = isDeleting ? 50 : 100;
    setTimeout(typeRole, typeSpeed);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeRole, 500);
});

// ========================
// SCROLL ANIMATIONS
// ========================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-category')) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe all major sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(`
        .about-content,
        .timeline-item,
        .project-card,
        .skill-category,
        .certification-highlight,
        .contact-content
    `);
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ========================
// ACTIVE NAV LINK
// ========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================
// HEADER SCROLL EFFECT
// ========================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========================
// SMOOTH SCROLL
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================
// MOBILE MENU (if needed)
// ========================
const menuIcon = document.getElementById('menu-icon');
const navLinksList = document.querySelector('.nav-links');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navLinksList.classList.toggle('active');
    });
}

// ========================
// MUSIC OVERLAY
// ========================
function showMusicPage() {
    const musicOverlay = document.getElementById('musicOverlay');
    musicOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeMusicPage() {
    const musicOverlay = document.getElementById('musicOverlay');
    musicOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// ========================
// GAMES OVERLAY
// ========================
function showGamesPage() {
    const gamesOverlay = document.getElementById('gamesOverlay');
    gamesOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGamesPage() {
    const gamesOverlay = document.getElementById('gamesOverlay');
    gamesOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================
// SPORTS OVERLAY
// ========================
function showSportsPage() {
    const sportsOverlay = document.getElementById('sportsOverlay');
    sportsOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSportsPage() {
    const sportsOverlay = document.getElementById('sportsOverlay');
    sportsOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================
// MOVIES OVERLAY
// ========================
function showMoviesPage() {
    const moviesOverlay = document.getElementById('moviesOverlay');
    moviesOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMoviesPage() {
    const moviesOverlay = document.getElementById('moviesOverlay');
    moviesOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close overlay when clicking outside the container
document.addEventListener('DOMContentLoaded', () => {
    const musicOverlay = document.getElementById('musicOverlay');
    if (musicOverlay) {
        musicOverlay.addEventListener('click', (e) => {
            if (e.target === musicOverlay) {
                closeMusicPage();
            }
        });
    }
    
    const gamesOverlay = document.getElementById('gamesOverlay');
    if (gamesOverlay) {
        gamesOverlay.addEventListener('click', (e) => {
            if (e.target === gamesOverlay) {
                closeGamesPage();
            }
        });
    }
    
    const sportsOverlay = document.getElementById('sportsOverlay');
    if (sportsOverlay) {
        sportsOverlay.addEventListener('click', (e) => {
            if (e.target === sportsOverlay) {
                closeSportsPage();
            }
        });
    }
    
    const moviesOverlay = document.getElementById('moviesOverlay');
    if (moviesOverlay) {
        moviesOverlay.addEventListener('click', (e) => {
            if (e.target === moviesOverlay) {
                closeMoviesPage();
            }
        });
    }
});

// Close overlay with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const musicOverlay = document.getElementById('musicOverlay');
        const gamesOverlay = document.getElementById('gamesOverlay');
        const sportsOverlay = document.getElementById('sportsOverlay');
        const moviesOverlay = document.getElementById('moviesOverlay');
        
        if (musicOverlay && musicOverlay.classList.contains('active')) {
            closeMusicPage();
        }
        if (gamesOverlay && gamesOverlay.classList.contains('active')) {
            closeGamesPage();
        }
        if (sportsOverlay && sportsOverlay.classList.contains('active')) {
            closeSportsPage();
        }
        if (moviesOverlay && moviesOverlay.classList.contains('active')) {
            closeMoviesPage();
        }
    }
});

// ========================
// CAROUSEL NAVIGATION
// ========================
let currentSlide = 0;

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.artists-carousel .artist-card');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.artists-carousel .artist-card');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    const musicOverlay = document.getElementById('musicOverlay');
    if (musicOverlay && musicOverlay.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            moveCarousel(-1);
        } else if (e.key === 'ArrowRight') {
            moveCarousel(1);
        }
    }
});
