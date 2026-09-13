/* ============================================
   ByteBite Portfolio - Vanilla JavaScript
   Version: 2.0
   ============================================ */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        // Nav
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.techstack': 'Tech Stack',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.journey': 'Journey',
        'nav.github': 'GitHub',
        'nav.contact': 'Contact',

        // Hero
        'hero.badge': 'Full-Stack Developer · Backend Focused',
        'hero.subtitle': 'I build modern, scalable and maintainable web applications with a strong focus on backend engineering, databases and clean architecture.',
        'hero.cta.projects': 'View Projects',
        'hero.cta.contact': 'Contact Me',
        'hero.scroll': 'Scroll',

        // About
        'about.title': 'About Me',
        'about.subtitle': 'Backend-focused developer building real software systems',
        'about.p1': 'AmirAli is a developer focused on building web applications and backend systems. His main development environment revolves around Python and Django, while also working with modern frontend technologies.',
        'about.p2': 'He is particularly interested in backend engineering, database design, PostgreSQL, APIs, scalable architecture, clean code, and real-world software systems. He believes in writing maintainable code and building systems that solve real problems.',
        'about.interests.title': 'Main Interests',
        'about.interests.1': 'Backend Engineering',
        'about.interests.2': 'Database Design',
        'about.interests.5': 'Scalable Architecture',
        'about.interests.6': 'Clean Code',
        'about.interests.7': 'Real-world Software Systems',
        'about.card.role': 'Full-Stack Developer · Backend Focused',

        // Badges
        'badge.primary': 'Primary',
        'badge.working': 'Working With',
        'badge.familiar': 'Familiar',
        'badge.learning': 'Learning',

        // Tech Stack
        'techstack.title': 'Tech Stack',
        'techstack.subtitle': 'Technologies and tools I work with',
        'techstack.backend': 'Backend',
        'techstack.database': 'Database',
        'techstack.frontend': 'Frontend',
        'techstack.infrastructure': 'Infrastructure',

        // Skills
        'skills.title': 'Skills',
        'skills.subtitle': 'Technologies I work with, grouped by domain',
        'skills.programming': 'Programming',
        'skills.backend': 'Backend',
        'skills.database': 'Database',
        'skills.frontend': 'Frontend',
        'skills.infrastructure': 'Infrastructure',
        'skills.db.badge': 'A core area of interest',
        'skills.db.title': 'Database Engineering',
        'skills.db.desc': 'I am deeply interested in PostgreSQL and relational database design. From data modeling and indexing to query optimization and scalable data architecture — database engineering is a central part of how I think about backend systems.',
        'skills.db.design': 'Database Design',
        'skills.db.relational': 'Relational Database Design',
        'skills.db.modeling': 'Data Modeling',
        'skills.db.indexing': 'Indexing',
        'skills.db.optimization': 'Query Optimization',
        'skills.db.architecture': 'Database Architecture',
        'skills.db.scalable': 'Scalable Data Systems',

        // Projects
        'projects.title': 'Projects',
        'projects.subtitle': 'Real software systems I am building',
        'projects.filter.all': 'All',
        'projects.filter.backend': 'Backend',
        'projects.filter.fullstack': 'Full-Stack',
        'projects.filter.django': 'Django',
        'projects.filter.python': 'Python',
        'projects.filter.database': 'Database',
        'projects.filter.experimental': 'Experimental',
        'projects.features': 'Key Features',
        'projects.technologies': 'Technologies',

        'projects.novaorm.desc': 'A custom ORM and database abstraction layer built in Python. An experimental project exploring how ORMs work internally — query building, connection management, and model mapping.',
        'projects.novaorm.f1': 'Database abstraction layer',
        'projects.novaorm.f2': 'Query builder implementation',
        'projects.novaorm.f3': 'Model-to-table mapping',
        'projects.novaorm.f4': 'Connection management',
        'projects.novaorm.f5': 'Clean architectural patterns',

        'projects.novashop.desc': 'A Django-based server-side rendered e-commerce platform. Features product catalog, session-based cart, checkout, orders, user profiles, and admin management.',
        'projects.novashop.f1': 'Authentication system',
        'projects.novashop.f2': 'Product catalog and product details',
        'projects.novashop.f3': 'Session-based shopping cart',
        'projects.novashop.f4': 'Checkout and order management',
        'projects.novashop.f5': 'User profile and order history',
        'projects.novashop.f6': 'Admin management panel',

        // Status
        'status.inprogress': 'In Progress',
        'status.planned': 'Planned',

        // Journey
        'journey.title': 'Development Journey',
        'journey.subtitle': 'The path from first line of code to building real systems',
        'journey.step1.title': 'Started Web Development',
        'journey.step1.desc': 'HTML / CSS / JavaScript — the foundations of the web',
        'journey.step2.title': 'Backend Development',
        'journey.step2.desc': 'Python / Django — building server-side applications',
        'journey.step3.title': 'API Development',
        'journey.step3.desc': 'Django REST Framework / FastAPI — designing and building APIs',
        'journey.step4.title': 'Database Engineering',
        'journey.step4.desc': 'SQL / PostgreSQL — data modeling, indexing and optimization',
        'journey.step5.title': 'Full-Stack Development',
        'journey.step5.desc': 'React / Next.js / TypeScript — building complete web applications',
        'journey.step6.title': 'Building Real Software Systems',
        'journey.step6.desc': 'Search engines, e-commerce systems, management systems and testing platforms',

        // Currently
        'currently.badge': 'What I am focused on right now',
        'currently.title': 'Currently Building & Learning',
        'currently.1': 'Advanced Django',
        'currently.4': 'Backend Architecture',
        'currently.5': 'Database Engineering',
        'currently.6': 'Full-Stack Development',
        'currently.7': 'Scalable Systems',
        'currently.8': 'Clean Architecture',

        // GitHub
        'github.subtitle': 'Open source code and contributions',
        'github.profile': 'GitHub Profile',
        'github.repos': 'Repositories',
        'github.stars': 'Stars',
        'github.viewProfile': 'View Profile',
        'github.featured': 'Featured Repositories',
        'github.languages': 'Language Distribution: Python, JavaScript, TypeScript, HTML, CSS',
        'github.loading': 'Loading...',
        'github.error': 'Unable to load GitHub data',

        // Contact
        'contact.title': 'Contact',
        'contact.subtitle': 'Get in touch',
        'contact.cta': "Have a project or idea? Let's build something great.",
        'contact.name': 'Name',
        'contact.name.placeholder': 'Your name',
        'contact.email': 'Email',
        'contact.email.placeholder': 'your.email@example.com',
        'contact.message': 'Message',
        'contact.message.placeholder': 'Tell me about your project or idea...',
        'contact.send': 'Send Message',
        'contact.success': 'Message sent successfully! I will get back to you soon.',
        'contact.error': 'Something went wrong. Please try again.',
        'contact.validation.name': 'Please enter your name.',
        'contact.validation.email': 'Please enter a valid email address.',
        'contact.validation.message': 'Please enter a message.',
    },
    fa: {
        // Nav
        'nav.home': 'خانه',
        'nav.about': 'درباره من',
        'nav.techstack': 'تکنولوژی‌ها',
        'nav.skills': 'مهارت‌ها',
        'nav.projects': 'پروژه‌ها',
        'nav.journey': 'مسیر',
        'nav.github': 'گیت‌هاب',
        'nav.contact': 'تماس',

        // Hero
        'hero.badge': 'توسعه‌دهنده فول‌استک · متمرکز بر بک‌اند',
        'hero.subtitle': 'من اپلیکیشن‌های وب مدرن، مقیاس‌پذیر و قابل نگهداری می‌سازم با تمرکز قوی بر مهندسی بک‌اند، پایگاه داده و معماری تمیز.',
        'hero.cta.projects': 'مشاهده پروژه‌ها',
        'hero.cta.contact': 'تماس با من',
        'hero.scroll': 'اسکرول',

        // About
        'about.title': 'درباره من',
        'about.subtitle': 'توسعه‌دهنده متمرکز بر بک‌اند، سازنده سیستم‌های نرم‌افزاری واقعی',
        'about.p1': 'امیرعلی یک توسعه‌دهنده متمرکز بر ساخت اپلیکیشن‌های وب و سیستم‌های بک‌اند است. محیط اصلی توسعه او حول Python و Django می‌چرخد و همچنین با تکنولوژی‌های مدرن فرانت‌اند کار می‌کند.',
        'about.p2': 'او به طور خاص به مهندسی بک‌اند، طراحی پایگاه داده، PostgreSQL، APIها، معماری مقیاس‌پذیر، کد تمیز و سیستم‌های نرم‌افزاری واقعی علاقه‌مند است. او به نوشتن کد قابل نگهداری و ساخت سیستم‌هایی که مشکلات واقعی را حل می‌کنند باور دارد.',
        'about.interests.title': 'علاقه‌مندی‌های اصلی',
        'about.interests.1': 'مهندسی بک‌اند',
        'about.interests.2': 'طراحی پایگاه داده',
        'about.interests.5': 'معماری مقیاس‌پذیر',
        'about.interests.6': 'کد تمیز',
        'about.interests.7': 'سیستم‌های نرم‌افزاری واقعی',
        'about.card.role': 'توسعه‌دهنده فول‌استک · متمرکز بر بک‌اند',

        // Badges
        'badge.primary': 'اصلی',
        'badge.working': 'در حال کار',
        'badge.familiar': 'آشنا',
        'badge.learning': 'در حال یادگیری',

        // Tech Stack
        'techstack.title': 'تکنولوژی‌ها',
        'techstack.subtitle': 'تکنولوژی‌ها و ابزارهایی که با آنها کار می‌کنم',
        'techstack.backend': 'بک‌اند',
        'techstack.database': 'پایگاه داده',
        'techstack.frontend': 'فرانت‌اند',
        'techstack.infrastructure': 'زیرساخت',

        // Skills
        'skills.title': 'مهارت‌ها',
        'skills.subtitle': 'تکنولوژی‌هایی که با آنها کار می‌کنم، دسته‌بندی شده بر اساس حوزه',
        'skills.programming': 'برنامه‌نویسی',
        'skills.backend': 'بک‌اند',
        'skills.database': 'پایگاه داده',
        'skills.frontend': 'فرانت‌اند',
        'skills.infrastructure': 'زیرساخت',
        'skills.db.badge': 'یک حوزه اصلی علاقه‌مندی',
        'skills.db.title': 'مهندسی پایگاه داده',
        'skills.db.desc': 'من عمیقاً به PostgreSQL و طراحی پایگاه داده رابطه‌ای علاقه‌مندم. از مدل‌سازی داده و ایندکس‌گذاری تا بهینه‌سازی کوئری و معماری داده مقیاس‌پذیر — مهندسی پایگاه داده بخش مرکزی تفکر من درباره سیستم‌های بک‌اند است.',
        'skills.db.design': 'طراحی پایگاه داده',
        'skills.db.relational': 'طراحی پایگاه داده رابطه‌ای',
        'skills.db.modeling': 'مدل‌سازی داده',
        'skills.db.indexing': 'ایندکس‌گذاری',
        'skills.db.optimization': 'بهینه‌سازی کوئری',
        'skills.db.architecture': 'معماری پایگاه داده',
        'skills.db.scalable': 'سیستم‌های داده مقیاس‌پذیر',

        // Projects
        'projects.title': 'پروژه‌ها',
        'projects.subtitle': 'سیستم‌های نرم‌افزاری واقعی که در حال ساخت هستم',
        'projects.filter.all': 'همه',
        'projects.filter.backend': 'بک‌اند',
        'projects.filter.fullstack': 'فول‌استک',
        'projects.filter.django': 'جنگو',
        'projects.filter.python': 'پایتون',
        'projects.filter.database': 'پایگاه داده',
        'projects.filter.experimental': 'آزمایشی',
        'projects.features': 'ویژگی‌های کلیدی',
        'projects.technologies': 'تکنولوژی‌ها',

        'projects.novaorm.desc': 'یک ORM سفارشی و لایه انتزاع پایگاه داده ساخته شده با Python. یک پروژه آزمایشی برای کاوش در نحوه کار داخلی ORMها — ساخت کوئری، مدیریت اتصال و نگاشت مدل.',
        'projects.novaorm.f1': 'لایه انتزاع پایگاه داده',
        'projects.novaorm.f2': 'پیاده‌سازی Query Builder',
        'projects.novaorm.f3': 'نگاشت مدل به جدول',
        'projects.novaorm.f4': 'مدیریت اتصال',
        'projects.novaorm.f5': 'الگوهای معماری تمیز',

        'projects.novashop.desc': 'یک پلتفرم تجارت الکترونیک مبتنی بر Django با رندر سمت سرور. شامل کاتالوگ محصول، سبد خرید مبتنی بر session، پرداخت، سفارشات، پروفایل کاربر و مدیریت ادمین.',
        'projects.novashop.f1': 'سیستم احراز هویت',
        'projects.novashop.f2': 'کاتالوگ محصول و جزئیات محصول',
        'projects.novashop.f3': 'سبد خرید مبتنی بر session',
        'projects.novashop.f4': 'پرداخت و مدیریت سفارش',
        'projects.novashop.f5': 'پروفایل کاربر و تاریخچه سفارش',
        'projects.novashop.f6': 'پنل مدیریت ادمین',

        // Status
        'status.inprogress': 'در حال توسعه',
        'status.planned': 'برنامه‌ریزی شده',

        // Journey
        'journey.title': 'مسیر توسعه',
        'journey.subtitle': 'مسیر از اولین خط کد تا ساخت سیستم‌های واقعی',
        'journey.step1.title': 'شروع توسعه وب',
        'journey.step1.desc': 'HTML / CSS / JavaScript — پایه‌های وب',
        'journey.step2.title': 'توسعه بک‌اند',
        'journey.step2.desc': 'Python / Django — ساخت اپلیکیشن‌های سمت سرور',
        'journey.step3.title': 'توسعه API',
        'journey.step3.desc': 'Django REST Framework / FastAPI — طراحی و ساخت APIها',
        'journey.step4.title': 'مهندسی پایگاه داده',
        'journey.step4.desc': 'SQL / PostgreSQL — مدل‌سازی داده، ایندکس‌گذاری و بهینه‌سازی',
        'journey.step5.title': 'توسعه فول‌استک',
        'journey.step5.desc': 'React / Next.js / TypeScript — ساخت اپلیکیشن‌های وب کامل',
        'journey.step6.title': 'ساخت سیستم‌های نرم‌افزاری واقعی',
        'journey.step6.desc': 'موتورهای جستجو، سیستم‌های تجارت الکترونیک، سیستم‌های مدیریتی و پلتفرم‌های آزمون',

        // Currently
        'currently.badge': 'چیزی که الان روی آن متمرکزم',
        'currently.title': 'در حال ساخت و یادگیری',
        'currently.1': 'جنگو پیشرفته',
        'currently.4': 'معماری بک‌اند',
        'currently.5': 'مهندسی پایگاه داده',
        'currently.6': 'توسعه فول‌استک',
        'currently.7': 'سیستم‌های مقیاس‌پذیر',
        'currently.8': 'معماری تمیز',

        // GitHub
        'github.subtitle': 'کد متن‌باز و مشارکت‌ها',
        'github.profile': 'پروفایل گیت‌هاب',
        'github.repos': 'مخازن',
        'github.stars': 'ستاره‌ها',
        'github.viewProfile': 'مشاهده پروفایل',
        'github.featured': 'مخازن ویژه',
        'github.languages': 'توزیع زبان‌ها: Python, JavaScript, TypeScript, HTML, CSS',
        'github.loading': 'در حال بارگذاری...',
        'github.error': 'امکان دریافت اطلاعات گیت‌هاب وجود ندارد',

        // Contact
        'contact.title': 'تماس',
        'contact.subtitle': 'در ارتباط باشید',
        'contact.cta': 'پروژه یا ایده‌ای دارید؟ بیایید چیز بزرگی بسازیم.',
        'contact.name': 'نام',
        'contact.name.placeholder': 'نام شما',
        'contact.email': 'ایمیل',
        'contact.email.placeholder': 'your.email@example.com',
        'contact.message': 'پیام',
        'contact.message.placeholder': 'درباره پروژه یا ایده‌تان بگویید...',
        'contact.send': 'ارسال پیام',
        'contact.success': 'پیام با موفقیت ارسال شد! به زودی با شما تماس می‌گیرم.',
        'contact.error': 'مشکلی پیش آمد. لطفاً دوباره تلاش کنید.',
        'contact.validation.name': 'لطفاً نام خود را وارد کنید.',
        'contact.validation.email': 'لطفاً یک آدرس ایمیل معتبر وارد کنید.',
        'contact.validation.message': 'لطفاً یک پیام وارد کنید.',
    }
};

// ============================================
// CONFIG
// ============================================
const CONFIG = {
    github: {
        username: 'ByteBite1391',
        apiBase: 'https://api.github.com',
        cacheKey: 'bytebite-github-cache',
        projectsCacheKey: 'bytebite-projects-cache',
        cacheDuration: 30 * 60 * 1000, // 30 دقیقه
        featuredRepos: ['NovaORM', 'NovaShop']
    }
};

// ============================================
// PROJECTS CONFIG
// ============================================
const PROJECTS_CONFIG = [
    {
        repo: 'NovaORM',
        status: 'inprogress',
        filters: ['backend', 'python', 'database', 'experimental'],
        features: [
            { en: 'Database abstraction layer', fa: 'لایه انتزاع پایگاه داده' },
            { en: 'Query builder implementation', fa: 'پیاده‌سازی Query Builder' },
            { en: 'Model-to-table mapping', fa: 'نگاشت مدل به جدول' },
            { en: 'Connection management', fa: 'مدیریت اتصال' },
            { en: 'Clean architectural patterns', fa: 'الگوهای معماری تمیز' }
        ],
        customTech: ['Python', 'ORM Concepts', 'Software Architecture'],
        icon: 'database'
    },
    {
        repo: 'NovaShop',
        status: 'inprogress',
        filters: ['fullstack', 'backend', 'django', 'python'],
        features: [
            { en: 'Authentication system', fa: 'سیستم احراز هویت' },
            { en: 'Product catalog and product details', fa: 'کاتالوگ محصول و جزئیات محصول' },
            { en: 'Session-based shopping cart', fa: 'سبد خرید مبتنی بر session' },
            { en: 'Checkout and order management', fa: 'پرداخت و مدیریت سفارش' },
            { en: 'User profile and order history', fa: 'پروفایل کاربر و تاریخچه سفارش' },
            { en: 'Admin management panel', fa: 'پنل مدیریت ادمین' }
        ],
        customTech: ['Python', 'Django', 'Django Templates', 'HTML5', 'CSS3', 'JavaScript', 'PostgreSQL'],
        icon: 'shop'
    }
];

// ============================================
// PROJECT ICONS (SVG paths)
// ============================================
const PROJECT_ICONS = {
    search: `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,
    database: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>`,
    shop: `<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>`,
    code: `<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>`
};

// ============================================
// STATE
// ============================================
let currentLang = 'en';
let navbar, menuToggle, mobileMenu, langToggle, contactForm, submitBtn, formStatus;

// ============================================
// INIT
// ============================================
function init() {
    navbar = document.getElementById('navbar');
    menuToggle = document.getElementById('menu-toggle');
    mobileMenu = document.getElementById('mobile-menu');
    langToggle = document.getElementById('lang-toggle');
    contactForm = document.getElementById('contact-form');
    submitBtn = document.getElementById('submit-btn');
    formStatus = document.getElementById('form-status');

    detectLanguage();
    setupNavbar();
    setupMobileMenu();
    setupLanguageToggle();
    setupScrollReveal();
    setupActiveNavigation();
    setupProjectFilters();
    setupContactForm();
    setupSmoothScroll();

    // GitHub data
    fetchGitHubData();
    fetchAndRenderProjects();
}

// ============================================
// LANGUAGE
// ============================================
function detectLanguage() {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved) {
        currentLang = saved;
    } else {
        const browserLang = navigator.language || navigator.userLanguage || 'en';
        currentLang = browserLang.toLowerCase().startsWith('fa') ? 'fa' : 'en';
    }
    applyLanguage();
}

function applyLanguage() {
    const html = document.documentElement;
    const t = translations[currentLang];

    if (currentLang === 'fa') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'fa');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    document.title = currentLang === 'fa'
        ? 'امیرعلی پوربابایی | توسعه‌دهنده فول‌استک'
        : 'AmirAli Pourbabaeii | Full-Stack Developer';

    localStorage.setItem('portfolio-lang', currentLang);
}

function setupLanguageToggle() {
    if (!langToggle) return;
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fa' : 'en';
        applyLanguage();

        // Re-render projects & repos با زبان جدید
        const projectsCached = getCache(CONFIG.github.projectsCacheKey);
        if (projectsCached) renderProjects(projectsCached);

        const ghCached = getCache(CONFIG.github.cacheKey);
        if (ghCached) renderGitHubData(ghCached.profile, ghCached.repos);
    });
}

// ============================================
// NAVBAR
// ============================================
function setupNavbar() {
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 50);
    }, { passive: true });
}

// ============================================
// MOBILE MENU
// ============================================
function setupMobileMenu() {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) closeMobileMenu();
        else openMobileMenu();
    });

    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    const overlayBg = mobileMenu.querySelector('.mobile-overlay-bg');
    if (overlayBg) overlayBg.addEventListener('click', closeMobileMenu);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function openMobileMenu() {
    mobileMenu.classList.add('active');
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ============================================
// SCROLL REVEAL
// ============================================
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================
// ACTIVE NAV
// ============================================
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('data-section') === id);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(s => observer.observe(s));
}

// ============================================
// PROJECT FILTERS
// ============================================
function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-categories') || '';
                const shouldShow = filter === 'all' || categories.split(' ').includes(filter);
                card.classList.toggle('hidden', !shouldShow);
            });
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length < 2) return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                if (mobileMenu && mobileMenu.classList.contains('active')) closeMobileMenu();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// CONTACT FORM
// ============================================
function setupContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const t = translations[currentLang];
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        formStatus.textContent = '';
        formStatus.className = 'form-status';

        let isValid = true;

        if (!name.value.trim()) {
            nameError.textContent = t['contact.validation.name'];
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
            emailError.textContent = t['contact.validation.email'];
            isValid = false;
        }

        if (!message.value.trim()) {
            messageError.textContent = t['contact.validation.message'];
            isValid = false;
        }

        if (!isValid) return;

        submitBtn.disabled = true;
        formStatus.textContent = '...';
        formStatus.className = 'form-status loading';

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            formStatus.textContent = t['contact.success'];
            formStatus.className = 'form-status success';
            contactForm.reset();
        } catch (err) {
            formStatus.textContent = t['contact.error'];
            formStatus.className = 'form-status error';
        } finally {
            submitBtn.disabled = false;
        }
    });
}

// ============================================
// GITHUB DATA (Profile + Stars + Repos)
// ============================================
async function fetchGitHubData() {
    const { username, apiBase, cacheKey, cacheDuration } = CONFIG.github;

    const cached = getCache(cacheKey);
    if (cached) {
        renderGitHubData(cached.profile, cached.repos);
        return;
    }

    setGitHubLoading();

    try {
        const profileRes = await fetch(`${apiBase}/users/${username}`);
        if (!profileRes.ok) throw new Error(`Profile fetch failed: ${profileRes.status}`);
        const profile = await profileRes.json();

        const reposRes = await fetch(`${apiBase}/users/${username}/repos?per_page=100&sort=updated`);
        if (!reposRes.ok) throw new Error(`Repos fetch failed: ${reposRes.status}`);
        const repos = await reposRes.json();

        setCache(cacheKey, { profile, repos }, cacheDuration);
        renderGitHubData(profile, repos);
    } catch (err) {
        console.warn('GitHub API error:', err);
        setGitHubError();
    }
}

function renderGitHubData(profile, repos) {
    const repoCountEl = document.getElementById('repo-count');
    const starCountEl = document.getElementById('star-count');

    if (repoCountEl) repoCountEl.textContent = profile.public_repos ?? '—';

    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
    if (starCountEl) starCountEl.textContent = totalStars;

    const repoList = document.querySelector('.repo-list');
    if (!repoList) return;

    const featuredNames = CONFIG.github.featuredRepos;
    const featured = repos
        .filter(r => !r.fork && featuredNames.includes(r.name))
        .sort((a, b) => featuredNames.indexOf(a.name) - featuredNames.indexOf(b.name));

    const displayRepos = featured.length > 0
        ? featured
        : repos.filter(r => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);

    if (displayRepos.length === 0) {
        repoList.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:1rem;">${translations[currentLang]['github.error']}</p>`;
        return;
    }

    repoList.innerHTML = displayRepos.map(repo => buildRepoHTML(repo)).join('');
}

function buildRepoHTML(repo) {
    const langColors = {
        'Python': '#eab308', 'JavaScript': '#f7df1e', 'TypeScript': '#3178c6',
        'HTML': '#e34c26', 'CSS': '#563d7c', 'Dockerfile': '#384d54',
        'Shell': '#89e051', 'Vue': '#41b883', 'Go': '#00add8'
    };

    const langHTML = repo.language
        ? `<span class="repo-lang"><span class="lang-dot" style="background:${langColors[repo.language] || '#6b7280'}"></span>${repo.language}</span>`
        : '';

    const desc = repo.description || 'No description';

    return `
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-item">
            <div class="repo-info">
                <div class="repo-name-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
                    </svg>
                    <span class="repo-name">${escapeHTML(repo.name)}</span>
                </div>
                <p class="repo-desc">${escapeHTML(desc)}</p>
            </div>
            <div class="repo-meta">
                ${langHTML}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 3h6v6"/><path d="M10 14 21 3"/>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                </svg>
            </div>
        </a>
    `;
}

function setGitHubLoading() {
    const repoCountEl = document.getElementById('repo-count');
    const starCountEl = document.getElementById('star-count');
    const t = translations[currentLang];

    if (repoCountEl) repoCountEl.textContent = '...';
    if (starCountEl) starCountEl.textContent = '...';

    const repoList = document.querySelector('.repo-list');
    if (repoList && repoList.children.length === 0) {
        repoList.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:1rem;">${t['github.loading']}</p>`;
    }
}

function setGitHubError() {
    const repoCountEl = document.getElementById('repo-count');
    const starCountEl = document.getElementById('star-count');
    const t = translations[currentLang];

    if (repoCountEl) repoCountEl.textContent = '—';
    if (starCountEl) starCountEl.textContent = '—';

    const repoList = document.querySelector('.repo-list');
    if (repoList) {
        repoList.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:1rem;">${t['github.error']}</p>`;
    }
}

// ============================================
// DYNAMIC PROJECTS FROM GITHUB
// ============================================
async function fetchAndRenderProjects() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    const { username, apiBase, projectsCacheKey, cacheDuration } = CONFIG.github;

    const cached = getCache(projectsCacheKey);
    if (cached) {
        renderProjects(cached);
        return;
    }

    try {
        const res = await fetch(`${apiBase}/users/${username}/repos?per_page=100&sort=updated`);
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const repos = await res.json();

        setCache(projectsCacheKey, repos, cacheDuration);
        renderProjects(repos);
    } catch (err) {
        console.warn('Projects API error:', err);
        // در صورت خطا، از دیتای استاتیک موجود در HTML استفاده کن
        setupProjectFilters();
    }
}

function renderProjects(repos) {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    const repoMap = {};
    repos.forEach(r => { repoMap[r.name] = r; });

    const html = PROJECTS_CONFIG.map(proj => {
        const repo = repoMap[proj.repo];
        return buildProjectCard(proj, repo);
    }).join('');

    grid.innerHTML = html;
    setupProjectFilters();
}

function buildProjectCard(proj, repo) {
    const lang = currentLang;
    const t = translations[lang];

    const name = repo ? repo.name : proj.repo;
    const desc = repo && repo.description
        ? repo.description
        : (t[`projects.${proj.repo.toLowerCase()}.desc`] || 'No description');

    const stars = repo ? repo.stargazers_count : 0;
    const starsHTML = stars > 0
        ? `<span class="project-stars">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              ${stars}
           </span>`
        : '';

    const featuresHTML = proj.features.map(f => `
        <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6 9 17l-5-5"/>
            </svg>
            <span>${f[lang] || f.en}</span>
        </li>
    `).join('');

    const techTagsHTML = proj.customTech.map(t => `<span>${t}</span>`).join('');

    const statusKey = `status.${proj.status}`;
    const statusLabel = t[statusKey] || proj.status;
    const statusClass = proj.status === 'planned' ? 'badge-info' : 'badge-warning';

    const iconPath = PROJECT_ICONS[proj.icon] || PROJECT_ICONS.code;
    const repoUrl = repo ? repo.html_url : `https://github.com/${CONFIG.github.username}/${proj.repo}`;

    return `
        <article class="project-card glass-card-hover reveal visible"
                 data-categories="${proj.filters.join(' ')}">
            <div class="project-header">
                <div class="project-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                        ${iconPath}
                    </svg>
                </div>
                <h3 class="project-name">${escapeHTML(name)}</h3>
                <span class="${statusClass}">${statusLabel}</span>
            </div>

            <p class="project-desc">${escapeHTML(desc)}</p>

            <div class="project-features">
                <p class="features-label">${t['projects.features']}</p>
                <ul class="features-list">${featuresHTML}</ul>
            </div>

            <div class="project-tech">
                <p class="tech-label">${t['projects.technologies']}</p>
                <div class="tech-tags">${techTagsHTML}</div>
            </div>

            <div class="project-footer">
                ${starsHTML}
                <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 3h6v6"/><path d="M10 14 21 3"/>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    </svg>
                    <span>GitHub</span>
                </a>
            </div>
        </article>
    `;
}

// ============================================
// CACHE HELPERS
// ============================================
function getCache(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (Date.now() > data.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return data.value;
    } catch {
        return null;
    }
}

function setCache(key, value, duration) {
    try {
        localStorage.setItem(key, JSON.stringify({
            value,
            expiry: Date.now() + duration
        }));
    } catch {}
}

// ============================================
// SECURITY
// ============================================
function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ============================================
// START
// ============================================
document.addEventListener('DOMContentLoaded', init);