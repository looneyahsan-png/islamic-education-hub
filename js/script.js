// Islamic Education Hub - Simplified JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🕌 Islamic Education Hub loaded successfully!');
    
    // Initialize all features
    initializeNavigation();
    initializeAnimations();
    initializeButtons();
    
    console.log('✅ All features initialized!');
});

// Navigation functionality
function initializeNavigation() {
    // Set active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Simple animations
function initializeAnimations() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card, .content-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Button functionality
function initializeButtons() {
    // Real Islamic book links
    const bookLinks = {
        'Holy Quran': 'https://quran.com',
        'Sahih Bukhari': 'https://sunnah.com/bukhari',
        'Sahih Muslim': 'https://sunnah.com/muslim',
        'Sunan Abu Dawud': 'https://sunnah.com/abudawud',
        'Tafsir Ibn Kathir': 'https://www.alim.org/library/quran/AlQuran-tafsir/TIK',
        'The Sealed Nectar': 'https://archive.org/details/TheSealeNectar_201702',
        'Fortress of the Muslim': 'https://www.islamicfinder.org/duas/',
        'Riyad as-Salihin': 'https://sunnah.com/riyadussalihin'
    };
    
    // Handle read buttons
    const readButtons = document.querySelectorAll('.btn-primary');
    readButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.textContent.includes('Read') || this.textContent.includes('Explore')) {
                e.preventDefault();
                
                const title = this.closest('.card, .content-item')?.querySelector('h3')?.textContent;
                const link = bookLinks[title] || bookLinks['Holy Quran'];
                
                showNotification(`Opening ${title || 'Islamic content'}...`);
                setTimeout(() => {
                    window.open(link, '_blank');
                }, 500);
            }
        });
    });
    
    // Handle download buttons
    const downloadButtons = document.querySelectorAll('.btn-secondary');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.textContent.includes('Download')) {
                e.preventDefault();
                
                const title = this.closest('.card, .content-item')?.querySelector('h3')?.textContent;
                showNotification(`Preparing download for ${title || 'Islamic book'}...`);
                
                setTimeout(() => {
                    window.open('https://archive.org/search.php?query=islamic+books', '_blank');
                }, 1000);
            }
        });
    });
}

// Simple notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #8B5CF6;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
Should I continue with the HTML files? This approach will be much cleaner and more reliable! 🚀




Prime /Ahsan

Today at 8:32pm
comeplete java script first

Comprehensive Web Development Workflow

Today at 8:32pm
⚡ COMPLETE JavaScript File: script.js

// ===== ISLAMIC EDUCATION HUB - COMPLETE SIMPLIFIED JAVASCRIPT =====

// Global variables
let currentPage = '';
let bookmarks = [];
let searchResults = [];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🕌 Islamic Education Hub loaded successfully!');
    
    // Initialize all features
    initializeNavigation();
    initializeAnimations();
    initializeButtons();
    initializeSearch();
    initializeBookmarks();
    initializeCounters();
    initializeModals();
    initializeKeyboardShortcuts();
    loadUserPreferences();
    
    console.log('✅ All features initialized!');
});

// ===== NAVIGATION SYSTEM =====
function initializeNavigation() {
    // Set active navigation link
    currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Mobile menu toggle (if exists)
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
    
    console.log('✅ Navigation initialized');
}

// ===== ANIMATION SYSTEM =====
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add staggered animation for grid items
                const gridItems = entry.target.querySelectorAll('.card, .content-item');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('fade-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card, .content-item, .section-header, .hero');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Smooth scroll for anchor links
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
    
    console.log('✅ Animations initialized');
}

// ===== BUTTON FUNCTIONALITY =====
function initializeButtons() {
    // Real Islamic book links database
    const bookLinks = {
        // Quran & Tafseer
        'Holy Quran': 'https://quran.com',
        'Quran Majeed': 'https://quran.com',
        'Tafsir Ibn Kathir': 'https://www.alim.org/library/quran/AlQuran-tafsir/TIK',
        'Tafseer Ibn Kathir': 'https://www.alim.org/library/quran/AlQuran-tafsir/TIK',
        'Tafsir At-Tabari': 'https://www.altafsir.com',
        'Tafsir Al-Qurtubi': 'https://www.altafsir.com',
        
        // Hadith Collections
        'Sahih Bukhari': 'https://sunnah.com/bukhari',
        'Sahih Muslim': 'https://sunnah.com/muslim',
        'Sunan Abu Dawud': 'https://sunnah.com/abudawud',
        'Jami` at-Tirmidhi': 'https://sunnah.com/tirmidhi',
        'Sunan an-Nasa\'i': 'https://sunnah.com/nasai',
        'Sunan Ibn Majah': 'https://sunnah.com/ibnmajah',
        'Muwatta Malik': 'https://sunnah.com/malik',
        'Musnad Ahmad': 'https://sunnah.com/ahmad',
        
        // Islamic Books
        'The Sealed Nectar': 'https://archive.org/details/TheSealeNectar_201702',
        'Ar-Raheeq Al-Makhtum': 'https://archive.org/details/TheSealeNectar_201702',
        'Fortress of the Muslim': 'https://www.islamicfinder.org/duas/',
        'Hisnul Muslim': 'https://www.islamicfinder.org/duas/',
        'Riyad as-Salihin': 'https://sunnah.com/riyadussalihin',
        'Gardens of the Righteous': 'https://sunnah.com/riyadussalihin',
        'The Fundamentals of Tawheed': 'https://www.kalamullah.com/Books/Fundamentals%20Of%20Tawheed.pdf',
        'Kitab at-Tawhid': 'https://www.kalamullah.com/Books/Kitab%20At-Tawhid.pdf',
        'Stories of the Prophets': 'https://www.kalamullah.com/Books/Stories%20Of%20The%20Prophets.pdf',
        'Fiqh us-Sunnah': 'https://archive.org/details/FiqhUsSunnah',
        
        // Default
        'default': 'https://islamqa.info'
    };
    
    // PDF download links
    const pdfLinks = {
        'The Sealed Nectar': 'https://www.kalamullah.com/Books/The%20Sealed%20Nectar.pdf',
        'Fortress of the Muslim': 'https://www.kalamullah.com/Books/Fortress%20Of%20The%20Muslim.pdf',
        'The Fundamentals of Tawheed': 'https://www.kalamullah.com/Books/Fundamentals%20Of%20Tawheed.pdf',
        'Stories of the Prophets': 'https://www.kalamullah.com/Books/Stories%20Of%20The%20Prophets.pdf',
        'Riyad as-Salihin': 'https://www.kalamullah.com/Books/Riyadh%20Us%20Saliheen.pdf',
        'default': 'https://archive.org/search.php?query=islamic+books+pdf'
    };
    
    // Handle read/explore buttons
    const readButtons = document.querySelectorAll('.btn-primary, .read-btn, .explore-btn');
    readButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const btnText = this.textContent.toLowerCase();
            
            if (btnText.includes('read') || btnText.includes('explore') || btnText.includes('open')) {
                e.preventDefault();
                
                const title = getContentTitle(this);
                const link = findBookLink(title, bookLinks);
                
                showNotification(`Opening ${title}...`, 'info');
                
                setTimeout(() => {
                    window.open(link, '_blank');
                    showNotification(`${title} opened successfully!`, 'success');
                }, 800);
            }
        });
    });
    
    // Handle download buttons
    const downloadButtons = document.querySelectorAll('.btn-secondary, .download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const btnText = this.textContent.toLowerCase();
            
            if (btnText.includes('download') || btnText.includes('pdf')) {
                e.preventDefault();
                
                const title = getContentTitle(this);
                const link = findBookLink(title, pdfLinks);
                
                showNotification(`Preparing download for ${title}...`, 'info');
                
                setTimeout(() => {
                    window.open(link, '_blank');
                    showNotification(`Download started for ${title}!`, 'success');
                }, 1000);
            }
        });
    });
    
    // Handle preview buttons
    const previewButtons = document.querySelectorAll('.preview-btn');
    previewButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const title = getContentTitle(this);
            showPreviewModal(title);
        });
    });
    
    // Handle bookmark buttons
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    bookmarkButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleBookmark(this);
        });
    });
    
    // Handle share buttons
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            shareContent(this);
        });
    });
    
    console.log('✅ Buttons initialized');
}

// Helper function to get content title
function getContentTitle(button) {
    const card = button.closest('.card, .content-item, .book-card');
    if (card) {
        const title = card.querySelector('h3, h4, .title')?.textContent?.trim();
        if (title) return title;
    }
    
    // Fallback methods
    const section = button.closest('section');
    const fallbackTitle = section?.querySelector('h2, h3')?.textContent?.trim();
    
    return fallbackTitle || 'Islamic Content';
}

// Helper function to find book link
function findBookLink(title, linkDatabase) {
    // Direct match
    if (linkDatabase[title]) {
        return linkDatabase[title];
    }
    
    // Partial match
    for (const [key, link] of Object.entries(linkDatabase)) {
        if (title.toLowerCase().includes(key.toLowerCase()) || 
            key.toLowerCase().includes(title.toLowerCase())) {
            return link;
        }
    }
    
    // Special cases
    if (title.toLowerCase().includes('quran')) return linkDatabase['Holy Quran'] || linkDatabase['default'];
    if (title.toLowerCase().includes('bukhari')) return linkDatabase['Sahih Bukhari'] || linkDatabase['default'];
    if (title.toLowerCase().includes('muslim')) return linkDatabase['Sahih Muslim'] || linkDatabase['default'];
    
    return linkDatabase['default'];
}

// ===== SEARCH FUNCTIONALITY =====
function initializeSearch() {
    const searchInputs = document.querySelectorAll('input[type="search"], .search-input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            const targetContainer = this.getAttribute('data-target') || '.grid';
            
            if (query.length > 0) {
                performSearch(query, targetContainer);
            } else {
                clearSearch(targetContainer);
            }
        });
        
        // Clear search on escape
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.value = '';
                clearSearch(this.getAttribute('data-target') || '.grid');
            }
        });
    });
    
    console.log('✅ Search initialized');
}

function performSearch(query, targetContainer) {
    const container = document.querySelector(targetContainer);
    if (!container) return;
    
    const items = container.querySelectorAll('.card, .content-item');
    let visibleCount = 0;
    
    items.forEach(item => {
        const title = item.querySelector('h3, h4')?.textContent?.toLowerCase() || '';
        const content = item.textContent.toLowerCase();
        
        if (title.includes(query) || content.includes(query)) {
            item.style.display = 'block';
            item.classList.add('search-highlight');
            visibleCount++;
        } else {
            item.style.display = 'none';
            item.classList.remove('search-highlight');
        }
    });
    
    // Show search results count
    showSearchResults(visibleCount, query);
}

function clearSearch(targetContainer) {
    const container = document.querySelector(targetContainer);
    if (!container) return;
    
    const items = container.querySelectorAll('.card, .content-item');
    items.forEach(item => {
        item.style.display = 'block';
        item.classList.remove('search-highlight');
    });
    
    hideSearchResults();
}

function showSearchResults(count, query) {
    let resultsDiv = document.querySelector('.search-results');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.className = 'search-results';
        resultsDiv.style.cssText = `
            background: rgba(139, 92, 246, 0.1);
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            border: 1px solid rgba(139, 92, 246, 0.3);
            text-align: center;
        `;
        
        const container = document.querySelector('.container');
        if (container) {
            container.insertBefore(resultsDiv, container.firstChild);
        }
    }
    
    resultsDiv.innerHTML = `
        <p style="color: #8B5CF6; margin: 0;">
            Found ${count} result${count !== 1 ? 's' : ''} for "${query}"
        </p>
    `;
}

function hideSearchResults() {
    const resultsDiv = document.querySelector('.search-results');
    if (resultsDiv) {
        resultsDiv.remove();
    }
}

// ===== BOOKMARK SYSTEM =====
function initializeBookmarks() {
    // Load bookmarks from localStorage
    bookmarks = JSON.parse(localStorage.getItem('islamicHubBookmarks') || '[]');
    
    // Update bookmark button states
    updateBookmarkButtons();
    
    console.log('✅ Bookmarks initialized');
}

function toggleBookmark(button) {
    const title = getContentTitle(button);
    const isBookmarked = bookmarks.some(b => b.title === title);
    
    if (isBookmarked) {
        // Remove bookmark
        bookmarks = bookmarks.filter(b => b.title !== title);
        button.innerHTML = '<i class="fas fa-bookmark-o"></i> Bookmark';
        button.classList.remove('bookmarked');
        showNotification(`Removed "${title}" from bookmarks`, 'info');
    } else {
        // Add bookmark
        bookmarks.push({
            title: title,
            page: currentPage,
            timestamp: Date.now()
        });
        button.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
        button.classList.add('bookmarked');
        showNotification(`Added "${title}" to bookmarks`, 'success');
    }
    
    // Save to localStorage
    localStorage.setItem('islamicHubBookmarks', JSON.stringify(bookmarks));
}

function updateBookmarkButtons() {
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    
    bookmarkButtons.forEach(btn => {
        const title = getContentTitle(btn);
        const isBookmarked = bookmarks.some(b => b.title === title);
        
        if (isBookmarked) {
            btn.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
            btn.classList.add('bookmarked');
        } else {
            btn.innerHTML = '<i class="fas fa-bookmark-o"></i> Bookmark';
            btn.classList.remove('bookmarked');
        }
    });
}

// ===== COUNTER SYSTEM (for Dhikr/Tasbih) =====
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const incrementBtn = counter.querySelector('.increment-btn');
        const resetBtn = counter.querySelector('.reset-btn');
        const countDisplay = counter.querySelector('.count-display');
        const targetCount = parseInt(counter.getAttribute('data-target') || '33');
        
        let currentCount = 0;
        
        if (incrementBtn && countDisplay) {
            incrementBtn.addEventListener('click', function() {
                currentCount++;
                countDisplay.textContent = currentCount;
                
                // Add animation
                countDisplay.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    countDisplay.style.transform = 'scale(1)';
                }, 200);
                
                // Check if target reached
                if (currentCount >= targetCount) {
                    showCompletionModal(targetCount);
                    currentCount = 0;
                    countDisplay.textContent = currentCount;
                }
                
                // Vibration feedback (mobile)
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            });
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                currentCount = 0;
                countDisplay.textContent = currentCount;
                
                // Add reset animation
                countDisplay.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    countDisplay.style.transform = 'scale(1)';
                }, 200);
            });
        }
    });
    
    console.log('✅ Counters initialized');
}

function showCompletionModal(count) {
    const modal = createModal(`
        <div style="text-align: center;">
            <div style="font-size: 4rem; color: #8B5CF6; margin-bottom: 1rem;">
                <i class="fas fa-star"></i>
            </div>
            <h3 style="color: #FFFFFF; margin-bottom: 1rem;">Alhamdulillah! 🎉</h3>
            <p style="color: #E5E7EB; margin-bottom: 1rem;">
                You have completed ${count} dhikr!
            </p>
            <p style="color: #FCD34D; font-family: 'Amiri', serif; font-size: 1.2rem; margin-bottom: 2rem;">
                جَزَاكَ اللَّهُ خَيْرًا
            </p>
            <button onclick="closeModal()" class="btn btn-primary">
                Continue
            </button>
        </div>
    `);
    
    document.body.appendChild(modal);
}

// ===== MODAL SYSTEM =====
function initializeModals() {
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    console.log('✅ Modals initialized');
}

function createModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="
            background: #1A1A2E;
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid #8B5CF6;
            max-width: 500px;
            width: 90%;
            animation: slideUp 0.3s ease;
        ">
            ${content}
        </div>
    `;
    
    return modal;
}

function showPreviewModal(title) {
    const modal = createModal(`
        <div style="text-align: center;">
            <div style="font-size: 3rem; color: #8B5CF6; margin-bottom: 1rem;">
                <i class="fas fa-book-open"></i>
            </div>
            <h3 style="color: #FFFFFF; margin-bottom: 1rem;">${title}</h3>
            <p style="color: #E5E7EB; margin-bottom: 2rem; line-height: 1.6;">
                This is a preview of "${title}". Click "Read Full Content" to access the complete material from authentic Islamic sources.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="closeModal()" class="btn btn-secondary">
                    Close
                </button>
                <button onclick="openFullContent('${title}')" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i> Read Full Content
                </button>
            </div>
        </div>
    `);
    
    document.body.appendChild(modal);
}

function openFullContent(title) {
    const bookLinks = {
        'Holy Quran': 'https://quran.com',
        'Sahih Bukhari': 'https://sunnah.com/bukhari',
        'Sahih Muslim': 'https://sunnah.com/muslim'
    };
    
    const link = findBookLink(title, bookLinks);
    window.open(link, '_blank');
    closeModal();
}

function closeModal() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (modal.parentElement) {
                modal.remove();
            }
        }, 300);
    });
}

// Make closeModal available globally
window.closeModal = closeModal;

// ===== SHARE FUNCTIONALITY =====
function shareContent(button) {
    const title = getContentTitle(button);
    const url = window.location.href;
    const text = `Check out this Islamic content: ${title}`;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url
        }).then(() => {
            showNotification('Content shared successfully!', 'success');
        }).catch(() => {
            fallbackShare(text);
        });
    } else {
        fallbackShare(text);
    }
}

function fallbackShare(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Unable to copy link', 'error');
        });
    } else {
        showNotification('Sharing not supported on this device', 'info');
    }
}

// ===== KEYBOARD SHORTCUTS =====
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('input[type="search"], .search-input');
            if (searchInput) {
                searchInput.focus();
                showNotification('Search activated', 'info');
            }
        }
        
        // Space for counter increment
        if (e.code === 'Space') {
            const activeElement = document.activeElement;
            if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                const incrementBtn = document.querySelector('.increment-btn');
                if (incrementBtn) {
                    e.preventDefault();
                    incrementBtn.click();
                }
            }
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    console.log('✅ Keyboard shortcuts initialized');
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const colors = {
        success: '#22C55E',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#8B5CF6'
    };
    
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// ===== USER PREFERENCES =====
function loadUserPreferences() {
    // Load saved font size
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        document.documentElement.style.fontSize = savedFontSize + 'px';
    }
    
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(`theme-${savedTheme}`);
    }
    
    console.log('✅ User preferences loaded');
}

// ===== UTILITY FUNCTIONS =====
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== ADD REQUIRED CSS ANIMATIONS =====
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    .fade-in {
        animation: fadeIn 0.6s ease forwards;
    }
    
    .search-highlight {
        border-color: #8B5CF6 !important;
        box-shadow: 0 0 10px rgba(139, 92, 246, 0.3) !important;
    }
    
    .bookmarked {
        background: rgba(139, 92, 246, 0.2) !important;
        border-color: #8B5CF6 !important;
    }
`;

document.head.appendChild(animationStyles);

// ===== EXPORT FUNCTIONS FOR GLOBAL ACCESS =====
window.IslamicEducationHub = {
    showNotification,
    toggleBookmark,
    shareContent,
    showPreviewModal,
    closeModal,
    performSearch,
    clearSearch
};

console.log('🕌 Islamic Education Hub JavaScript fully loaded!');
console.log('🚀 All systems operational!');
console.log('🤲 May Allah bless this project and make it beneficial for the Ummah!');

// ===== END OF COMPLETE JAVASCRIPT FILE =====

// ===== ENHANCED ISLAMIC EDUCATION HUB JAVASCRIPT WITH REDIRECTS =====

// Authentic Islamic Website Links Database
const ISLAMIC_LINKS = {
    // Quran & Surahs - Redirect to Quran.com
    surahs: {
        'Al-Fatiha': 'https://quran.com/1',
        'Al-Baqarah': 'https://quran.com/2',
        'Al Imran': 'https://quran.com/3',
        'An-Nisa': 'https://quran.com/4',
        'Al-Ma\'idah': 'https://quran.com/5',
        'Al-An\'am': 'https://quran.com/6',
        'Al-A\'raf': 'https://quran.com/7',
        'Al-Anfal': 'https://quran.com/8',
        'At-Tawbah': 'https://quran.com/9',
        'Yunus': 'https://quran.com/10',
        'default': 'https://quran.com'
    },
    
    // Hadith Collections - Redirect to Sunnah.com
    hadith: {
        'Sahih Bukhari': 'https://sunnah.com/bukhari',
        'Sahih Muslim': 'https://sunnah.com/muslim',
        'Sunan Abu Dawud': 'https://sunnah.com/abudawud',
        'Jami` at-Tirmidhi': 'https://sunnah.com/tirmidhi',
        'Sunan an-Nasa\'i': 'https://sunnah.com/nasai',
        'Sunan Ibn Majah': 'https://sunnah.com/ibnmajah',
        'Muwatta Malik': 'https://sunnah.com/malik',
        'Musnad Ahmad': 'https://sunnah.com/ahmad',
        'Riyad as-Salihin': 'https://sunnah.com/riyadussalihin',
        'Actions by Intentions': 'https://sunnah.com/bukhari:1',
        'The Best of People': 'https://sunnah.com/bukhari:6863',
        'Seeking Knowledge': 'https://sunnah.com/ibnmajah:224',
        'default': 'https://sunnah.com'
    },
    
    // Islamic Books - Redirect to authentic sources
    books: {
        'The Sealed Nectar': 'https://archive.org/details/TheSealeNectar_201702',
        'Fortress of the Muslim': 'https://www.islamicfinder.org/duas/',
        'Tafsir Ibn Kathir': 'https://www.alim.org/library/quran/AlQuran-tafsir/TIK',
        'Riyad as-Salihin': 'https://sunnah.com/riyadussalihin',
        'The Fundamentals of Tawheed': 'https://www.kalamullah.com/Books/Fundamentals%20Of%20Tawheed.pdf',
        'Stories of the Prophets': 'https://www.kalamullah.com/Books/Stories%20Of%20The%20Prophets.pdf',
        'Fiqh us-Sunnah': 'https://archive.org/details/FiqhUsSunnah',
        'Kitab at-Tawhid': 'https://www.kalamullah.com/Books/Kitab%20At-Tawhid.pdf',
        'Ihya Ulum al-Din': 'https://archive.org/search.php?query=ihya+ulum+al+din',
        'The Noble Quran': 'https://quran.com',
        'Islamic Creed Series': 'https://www.kalamullah.com/Books/',
        'The Lawful and Prohibited': 'https://archive.org/search.php?query=halal+haram+qaradawi',
        'default': 'https://islamqa.info'
    }
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🕌 Islamic Education Hub loaded with redirect functionality!');
    
    // Initialize all features
    initializeNavigation();
    initializeRedirectButtons();
    initializeBookmarks();
    initializeSearch();
    
    console.log('✅ All features with redirects initialized!');
});

// ===== REDIRECT FUNCTIONALITY =====
function initializeRedirectButtons() {
    // Handle all "Read Online" buttons
    const readButtons = document.querySelectorAll('.btn-primary, .read-btn, button:contains("Read Online")');
    
    readButtons.forEach(button => {
        // Only add redirect to buttons that contain "Read" or "Open"
        const buttonText = button.textContent.toLowerCase();
        
        if (buttonText.includes('read') || buttonText.includes('open') || buttonText.includes('browse')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const contentTitle = getContentTitle(this);
                const redirectUrl = getRedirectUrl(contentTitle);
                
                // Show loading notification
                showNotification(`Opening ${contentTitle}...`, 'info');
                
                // Add loading state to button
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';
                this.disabled = true;
                
                // Redirect after short delay
                setTimeout(() => {
                    window.open(redirectUrl, '_blank');
                    showNotification(`${contentTitle} opened successfully!`, 'success');
                    
                    // Restore button
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 800);
            });
        }
    });
    
    // Handle card links
    const cardLinks = document.querySelectorAll('.card-link, .feature-link');
    cardLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const contentTitle = getContentTitle(this);
            const redirectUrl = getRedirectUrl(contentTitle);
            
            showNotification(`Opening ${contentTitle}...`, 'info');
            
            setTimeout(() => {
                window.open(redirectUrl, '_blank');
                showNotification(`${contentTitle} opened successfully!`, 'success');
            }, 500);
        });
    });
    
    console.log('✅ Redirect buttons initialized!');
}

// Get content title from button context
function getContentTitle(button) {
    // Try to find title in various ways
    const card = button.closest('.card, .content-item, .feature-card');
    
    if (card) {
        // Look for h3, h4, or title class
        const titleElement = card.querySelector('h3, h4, .title');
        if (titleElement) {
            return titleElement.textContent.trim();
        }
    }
    
    // Fallback: look in parent section
    const section = button.closest('section');
    if (section) {
        const sectionTitle = section.querySelector('h2, h3');
        if (sectionTitle) {
            return sectionTitle.textContent.trim();
        }
    }
    
    // Last resort: return generic
    return 'Islamic Content';
}

// Get appropriate redirect URL based on content
function getRedirectUrl(title) {
    // Clean the title (remove numbers, extra spaces)
    const cleanTitle = title.replace(/^\d+\.\s*/, '').trim();
    
    // Check if it's a Surah
    if (isSurah(cleanTitle)) {
        return ISLAMIC_LINKS.surahs[cleanTitle] || ISLAMIC_LINKS.surahs.default;
    }
    
    // Check if it's a Hadith collection
    if (isHadithCollection(cleanTitle)) {
        return ISLAMIC_LINKS.hadith[cleanTitle] || ISLAMIC_LINKS.hadith.default;
    }
    
    // Check if it's a book
    if (isBook(cleanTitle)) {
        return ISLAMIC_LINKS.books[cleanTitle] || ISLAMIC_LINKS.books.default;
    }
    
    // Default based on current page
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage.includes('quran')) {
        return ISLAMIC_LINKS.surahs.default;
    } else if (currentPage.includes('hadith')) {
        return ISLAMIC_LINKS.hadith.default;
    } else if (currentPage.includes('books')) {
        return ISLAMIC_LINKS.books.default;
    }
    
    // Ultimate fallback
    return 'https://islamqa.info';
}

// Helper functions to identify content type
function isSurah(title) {
    const surahNames = [
        'Al-Fatiha', 'Al-Baqarah', 'Al Imran', 'An-Nisa', 'Al-Ma\'idah',
        'Al-An\'am', 'Al-A\'raf', 'Al-Anfal', 'At-Tawbah', 'Yunus',
        'Hud', 'Yusuf', 'Ar-Ra\'d', 'Ibrahim', 'Al-Hijr'
    ];
    
    return surahNames.some(surah => 
        title.toLowerCase().includes(surah.toLowerCase()) ||
        surah.toLowerCase().includes(title.toLowerCase())
    );
}

function isHadithCollection(title) {
    const hadithCollections = [
        'Sahih Bukhari', 'Sahih Muslim', 'Sunan Abu Dawud', 'Jami` at-Tirmidhi',
        'Sunan an-Nasa\'i', 'Sunan Ibn Majah', 'Riyad as-Salihin', 'Actions by Intentions',
        'The Best of People', 'Seeking Knowledge', 'Kindness to Animals'
    ];
    
    return hadithCollections.some(collection => 
        title.toLowerCase().includes(collection.toLowerCase()) ||
        collection.toLowerCase().includes(title.toLowerCase())
    ) || title.toLowerCase().includes('hadith');
}

function isBook(title) {
    const bookTitles = [
        'The Sealed Nectar', 'Fortress of the Muslim', 'Tafsir Ibn Kathir',
        'The Fundamentals of Tawheed', 'Stories of the Prophets', 'Fiqh us-Sunnah',
        'Kitab at-Tawhid', 'Ihya Ulum al-Din', 'The Noble Quran'
    ];
    
    return bookTitles.some(book => 
        title.toLowerCase().includes(book.toLowerCase()) ||
        book.toLowerCase().includes(title.toLowerCase())
    );
}

// ===== NAVIGATION SYSTEM =====
function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    console.log('✅ Navigation initialized');
}

// ===== BOOKMARK SYSTEM =====
function initializeBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('islamicHubBookmarks') || '[]');
    
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn, .btn-secondary:contains("Bookmark")');
    
    bookmarkButtons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes('bookmark')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const title = getContentTitle(this);
                const isBookmarked = bookmarks.some(b => b.title === title);
                
                if (isBookmarked) {
                    bookmarks = bookmarks.filter(b => b.title !== title);
                    this.innerHTML = '<i class="fas fa-bookmark"></i> Bookmark';
                    showNotification(`Removed "${title}" from bookmarks`, 'info');
                } else {
                    bookmarks.push({
                        title: title,
                        page: window.location.pathname,
                        timestamp: Date.now()
                    });
                    this.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
                    showNotification(`Added "${title}" to bookmarks`, 'success');
                }
                
                localStorage.setItem('islamicHubBookmarks', JSON.stringify(bookmarks));
            });
        }
    });
    
    console.log('✅ Bookmarks initialized');
}

// ===== SEARCH FUNCTIONALITY =====
function initializeSearch() {
    const searchInputs = document.querySelectorAll('input[type="search"], .search-input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            const targetContainer = this.getAttribute('data-target') || '.grid';
            
            if (query.length > 0) {
                performSearch(query, targetContainer);
            } else {
                clearSearch(targetContainer);
            }
        });
    });
    
    console.log('✅ Search initialized');
}

function performSearch(query, targetContainer) {
    const container = document.querySelector(targetContainer);
    if (!container) return;
    
    const items = container.querySelectorAll('.card, .content-item, .feature-card');
    let visibleCount = 0;
    
    items.forEach(item => {
        const title = item.querySelector('h3, h4')?.textContent?.toLowerCase() || '';
        const content = item.textContent.toLowerCase();
        
        if (title.includes(query) || content.includes(query)) {
            item.style.display = 'block';
            item.classList.add('search-highlight');
            visibleCount++;
        } else {
            item.style.display = 'none';
            item.classList.remove('search-highlight');
        }
    });
    
    showSearchResults(visibleCount, query);
}

function clearSearch(targetContainer) {
    const container = document.querySelector(targetContainer);
    if (!container) return;
    
    const items = container.querySelectorAll('.card, .content-item, .feature-card');
    items.forEach(item => {
        item.style.display = 'block';
        item.classList.remove('search-highlight');
    });
    
    hideSearchResults();
}

function showSearchResults(count, query) {
    let resultsDiv = document.querySelector('.search-results');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.className = 'search-results';
        resultsDiv.style.cssText = `
            background: rgba(139, 92, 246, 0.1);
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            border: 1px solid rgba(139, 92, 246, 0.3);
            text-align: center;
        `;
        
        const container = document.querySelector('.container');
        if (container) {
            container.insertBefore(resultsDiv, container.firstChild);
        }
    }
    
    resultsDiv.innerHTML = `
        <p style="color: #8B5CF6; margin: 0;">
            Found ${count} result${count !== 1 ? 's' : ''} for "${query}"
        </p>
    `;
}

function hideSearchResults() {
    const resultsDiv = document.querySelector('.search-results');
    if (resultsDiv) {
        resultsDiv.remove();
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const colors = {
        success: '#22C55E',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#8B5CF6'
    };
    
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// ===== CSS ANIMATIONS =====
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .search-highlight {
        border-color: #FCD34D !important;
        box-shadow: 0 0 15px rgba(252, 211, 77, 0.3) !important;
        background: rgba(252, 211, 77, 0.05) !important;
    }
    
    .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

document.head.appendChild(animationStyles);

// ===== EXPORT FUNCTIONS =====
window.IslamicEducationHub = {
    showNotification,
    getRedirectUrl,
    performSearch,
    clearSearch
};

console.log('🕌 Islamic Education Hub JavaScript fully loaded with redirect functionality!');
console.log('🔗 All "Read Online" buttons now redirect to authentic Islamic websites!');
console.log('🚀 Ready to serve the Muslim Ummah!');