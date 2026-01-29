// Main JavaScript for Walletis FinTech Application

// Language Switching
function setLang(lang) {
  document.body.setAttribute('data-lang', lang);
  document.getElementById('lang-fr-btn').classList.toggle('active', lang === 'fr');
  document.getElementById('lang-fr-btn').classList.toggle('opacity-40', lang !== 'fr');
  document.getElementById('lang-en-btn').classList.toggle('active', lang === 'en');
  document.getElementById('lang-en-btn').classList.toggle('opacity-40', lang !== 'en');
  localStorage.setItem('walletis-lang', lang);
}

// Theme Switching
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    themeIcon.setAttribute('icon', 'lucide:sun');
  } else {
    document.documentElement.classList.remove('dark');
    themeIcon.setAttribute('icon', 'lucide:moon');
  }
  localStorage.setItem('walletis-theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(!isDark);
});

// Initialization
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('walletis-lang') || 'fr';
  const savedTheme = localStorage.getItem('walletis-theme') || 'light';
  setLang(savedLang);
  setTheme(savedTheme === 'dark');
});

// Scroll Reveal
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, observerOptions);
document.querySelectorAll('.reveal-scroll').forEach(el => revealObserver.observe(el));

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.classList.add('shadow-premium', 'h-16');
    nav.classList.remove('h-20');
  } else {
    nav.classList.remove('shadow-premium', 'h-16');
    nav.classList.add('h-20');
  }
});

// Dynamic positioning based on announcement banner height
function updateFixedElementsPosition() {
  const announcementBanner = document.querySelector('.bg-brand-emerald.text-white');
  const navigation = document.querySelector('nav');
  const scrollProgress = document.querySelector('.scroll-progress')?.parentElement;
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (announcementBanner && navigation) {
    const bannerHeight = announcementBanner.offsetHeight;
    const navTop = bannerHeight;
    
    // Update navigation position to stay right below announcement
    navigation.style.top = `${navTop}px`;
    
    // Update scroll progress to stay at bottom of announcement banner
    if (scrollProgress) {
      scrollProgress.style.top = `${bannerHeight - 1}px`; // -1px to overlap at bottom edge
    }
    
    // Update mobile menu position
    if (mobileMenu) {
      const mobileMenuTop = navTop + navigation.offsetHeight;
      mobileMenu.style.top = `${mobileMenuTop}px`;
    }
    
    // Update main content padding to account for fixed elements
    const mainContent = document.querySelector('main');
    if (mainContent) {
      const totalFixedHeight = bannerHeight + navigation.offsetHeight;
      mainContent.style.paddingTop = `${totalFixedHeight + 32}px`; // 32px extra spacing
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateFixedElementsPosition();
  
  // Re-calculate on window resize
  window.addEventListener('resize', updateFixedElementsPosition);
  
  // Re-calculate if announcement banner content changes
  const announcementBanner = document.querySelector('.bg-brand-emerald.text-white');
  if (announcementBanner) {
    const observer = new MutationObserver(updateFixedElementsPosition);
    observer.observe(announcementBanner, { 
      childList: true, 
      subtree: true, 
      characterData: true 
    });
  }
  
  // Ensure navigation stays fixed during scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 20) {
      nav.classList.add('shadow-premium', 'h-16');
      nav.classList.remove('h-20');
    } else {
      nav.classList.remove('shadow-premium', 'h-16');
      nav.classList.add('h-20');
    }
    
    // Re-calculate position after navigation height change
    setTimeout(updateFixedElementsPosition, 100);
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('translate-y-4');
  });
}

// Active menu state management
function updateActiveMenuState() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = {
    'index.html': 'nav-home-link',
    'about.html': 'nav-about-link',
    'cards.html': 'nav-cards-link',
    'wallets.html': 'nav-wallets-link',
    'contact.html': 'nav-contact-link'
  };
  
  // Remove active states from all nav links
  Object.values(navLinks).forEach(linkId => {
    const link = document.getElementById(linkId);
    if (link) {
      link.classList.remove('text-brand-emerald');
      link.classList.add('hover:text-brand-emerald');
    }
  });
  
  // Add active state to current page link
  const activeLinkId = navLinks[currentPage];
  if (activeLinkId) {
    const activeLink = document.getElementById(activeLinkId);
    if (activeLink) {
      activeLink.classList.add('text-brand-emerald');
      activeLink.classList.remove('hover:text-brand-emerald');
    }
  }
}

// Initialize active menu state
document.addEventListener('DOMContentLoaded', () => {
  updateActiveMenuState();
});

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden', 'opacity-0', 'translate-y-4');
      }
    });

    // FAQ Collapse Functionality
document.addEventListener('DOMContentLoaded', () => {
  // FAQ accordion
  const faqItems = document.querySelectorAll('.premium-card.cursor-pointer.group');
  
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const icon = item.querySelector('iconify-icon');
      const isExpanded = icon.getAttribute('icon') === 'lucide:minus';
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherIcon = otherItem.querySelector('iconify-icon');
          otherIcon.setAttribute('icon', 'lucide:plus');
          // Remove any expanded content if it exists
          const existingContent = otherItem.querySelector('.faq-content');
          if (existingContent) {
            existingContent.remove();
          }
        }
      });
      
      // Toggle current item
      if (isExpanded) {
        icon.setAttribute('icon', 'lucide:plus');
        // Remove expanded content
        const existingContent = item.querySelector('.faq-content');
        if (existingContent) {
          existingContent.remove();
        }
      } else {
        icon.setAttribute('icon', 'lucide:minus');
        // Add expanded content
        const questionText = item.querySelector('h4').textContent.trim();
        let answerText = '';
        
        // Simple FAQ answers based on question content
        if (questionText.includes('recharger') || questionText.includes('top up')) {
          answerText = 'Vous pouvez recharger votre compte via Mobile Money (Airtel, Vodacom, Orange, Africell), virement bancaire, ou dans nos agences partenaires. Les fonds sont crédités instantanément.';
        } else if (questionText.includes('frais') || questionText.includes('fees')) {
          answerText = 'La carte Gold One Plus a des frais de maintenance annuels de 10 USD. Les transactions locales sont gratuites, les transactions internationales ont 1.5% de frais.';
        } else if (questionText.includes('Goma') || questionText.includes('outside')) {
          answerText = 'Oui! Walletis est disponible dans toute la RDC et fonctionne internationalement. Vous pouvez utiliser votre carte Gold One Plus dans plus de 150 pays.';
        } else if (questionText.includes('obtenir ma carte') || questionText.includes('get my card')) {
          answerText = 'Après avoir créé votre compte, vous pouvez demander votre carte Gold One Plus directement depuis l\'application. La carte virtuelle est instantanée, la carte physique est livrée en 3-5 jours ouvrables.';
        } else if (questionText.includes('limites de transaction') || questionText.includes('transaction limits')) {
          answerText = 'Les limites quotidiennes sont: 5,000 USD pour les retraits, 10,000 USD pour les achats, et 20,000 USD pour les transferts. Ces limites peuvent être augmentées sur demande.';
        } else if (questionText.includes('sécurisé') || questionText.includes('secure')) {
          answerText = 'Walletis utilise le chiffrement AES-256, l\'authentification à deux facteurs, et est régulé par la BCC. Vos fonds sont protégés par des assurances bancaires standards.';
        } else if (questionText.includes('achats internationaux') || questionText.includes('international purchases')) {
          answerText = 'Oui! Votre carte Gold One Plus fonctionne dans plus de 150 pays et sur toutes les plateformes internationales comme Netflix, Amazon, Alibaba, etc.';
        } else if (questionText.includes('support client') || questionText.includes('customer support')) {
          answerText = 'Notre support est disponible 24/7 par email à hello@walletis.cd, par téléphone au +243 81 000 0000, et par WhatsApp. Vous pouvez aussi nous rendre visite à notre bureau de Goma.';
        }
        
        const answerDiv = document.createElement('div');
        answerDiv.className = 'faq-content mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 text-sm opacity-70';
        answerDiv.innerHTML = `
          <p class="lang-fr">${answerText}</p>
          <p class="lang-en">You can top up your account via Mobile Money, bank transfer, or at partner agencies. Funds are credited instantly.</p>
        `;
        item.appendChild(answerDiv);
      }
    });
  });
});
