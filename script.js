// Language Management
const translations = {
    ar: {},
    fr: {},
    en: {}
};

let currentLang = 'ar';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    initNavigation();
    initScrollEffects();
    initActivityTabs();
    initBookingForm();
    initScrollToTop();
    initAnimations();
});

// Language Switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update body class for direction
    document.body.className = `lang-${lang}`;
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    updateTranslations(lang);
}

function updateTranslations(lang) {
    // Update elements with data attributes
    document.querySelectorAll('[data-ar]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if(text) {
            if(element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if(element.hasAttribute('placeholder')) {
                    element.placeholder = text;
                }
            } else if(element.tagName === 'OPTION') {
                element.textContent = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update textarea placeholders
    const textarea = document.querySelector('textarea[name="message"]');
    if(textarea) {
        const placeholder = textarea.getAttribute(`data-${lang}-placeholder`);
        if(placeholder) {
            textarea.placeholder = placeholder;
        }
    }
    
    // Update page title
    const titles = {
        ar: 'مريم مسعي أحمد - أخصائية ومعالجة نفسانية | قسنطينة، الجزائر',
        fr: 'Maryam Messai-Ahmed - Psychothérapeute | Constantine, Algérie',
        en: 'Maryam Messai-Ahmed - Psychotherapist | Constantine, Algeria'
    };
    document.title = titles[lang];
    
    // Update meta description
    const descriptions = {
        ar: 'أخصائية ومعالجة نفسانية، كاتبة، باحثة ومدربة. جلسات علاج نفسي عبر الإنترنت وحضوريا في قسنطينة، الجزائر',
        fr: 'Psychothérapeute, écrivaine, chercheuse et formatrice. Séances de thérapie en ligne et en présentiel à Constantine, Algérie',
        en: 'Psychotherapist, writer, researcher, and trainer. Online and in-person therapy sessions in Constantine, Algeria'
    };
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc) {
        metaDesc.content = descriptions[lang];
    }
}

// Navigation
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    window.addEventListener('scroll', function() {
        if(window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if(mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if(targetSection) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if(navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileToggle.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Active link highlighting
    window.addEventListener('scroll', highlightActiveLink);
}

function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe cards
    const cards = document.querySelectorAll('.service-card, .blog-card, .activity-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Activity Tabs
function initActivityTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Booking Form
function initBookingForm() {
    const form = document.getElementById('bookingForm');
    
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Validate form
            if(validateForm(data)) {
                // In a real application, you would send this to a server
                console.log('Form data:', data);
                
                // Show success message
                showFormMessage('success');
                
                // Reset form
                form.reset();
            }
        });
    }
}

function validateForm(data) {
    const requiredFields = ['name', 'email', 'phone', 'sessionType', 'preferredDate'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        if(!data[field] || data[field].trim() === '') {
            isValid = false;
            highlightField(field, true);
        } else {
            highlightField(field, false);
        }
    });
    
    // Email validation
    if(data.email && !isValidEmail(data.email)) {
        isValid = false;
        highlightField('email', true);
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function highlightField(fieldName, hasError) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if(field) {
        if(hasError) {
            field.style.borderColor = '#e74c3c';
        } else {
            field.style.borderColor = '';
        }
    }
}

function showFormMessage(type) {
    const messages = {
        success: {
            ar: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.',
            fr: 'Votre demande a été envoyée avec succès! Nous vous contacterons bientôt.',
            en: 'Your request has been sent successfully! We will contact you soon.'
        },
        error: {
            ar: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
            fr: 'Une erreur s\'est produite. Veuillez réessayer.',
            en: 'An error occurred. Please try again.'
        }
    };
    
    const message = messages[type][currentLang];
    
    // Create and show message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 16px 32px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInDown 0.5s ease-out;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remove after 4 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutUp 0.5s ease-out';
        setTimeout(() => {
            messageDiv.remove();
        }, 500);
    }, 4000);
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if(scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if(window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Animations
function initAnimations() {
    // Add animation classes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
            to {
                opacity: 1;
                transform: translate(-50%, 0);
            }
        }
        
        @keyframes slideOutUp {
            from {
                opacity: 1;
                transform: translate(-50%, 0);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Image Loading with Placeholder
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        if(img.complete) {
            img.classList.add('loaded');
        }
    });
}

// Add CSS for image loading
const imageLoadStyle = document.createElement('style');
imageLoadStyle.textContent = `
    img {
        opacity: 0;
        transition: opacity 0.5s ease-out;
    }
    
    img.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(imageLoadStyle);

// Initialize image loading
initImageLoading();

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if(e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if(navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if(mobileToggle) {
                mobileToggle.classList.remove('active');
            }
        }
    }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Close mobile menu on desktop
        if(window.innerWidth > 768) {
            const navMenu = document.querySelector('.nav-menu');
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            
            if(navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if(mobileToggle) {
                    mobileToggle.classList.remove('active');
                }
            }
        }
    }, 250);
});

// Accessibility improvements
function initAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-color);
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

initAccessibility();

// Console welcome message
console.log('%cWelcome to Maryam Messai-Ahmed\'s Website', 'font-size: 20px; font-weight: bold; color: #2c5f6f;');
console.log('%cPsychotherapist | Writer | Researcher | Trainer', 'font-size: 14px; color: #666;');
console.log('%cWebsite developed with care and attention to detail', 'font-size: 12px; color: #999;');
