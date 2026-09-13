/* ============================================
   ByteBite Portfolio - Vanilla JavaScript
   ============================================ */

// === Translations ===
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

        'projects.novasearch.desc': 'A search-oriented backend system designed for fast, scalable full-text search across large datasets. Built with a modern Python stack and containerized infrastructure.',
        'projects.novasearch.f1': 'Search architecture with Elasticsearch/OpenSearch',
        'projects.novasearch.f2': 'RESTful backend APIs with FastAPI',
        'projects.novasearch.f3': 'PostgreSQL for primary data storage',
        'projects.novasearch.f4': 'Redis-based caching layer',
        'projects.novasearch.f5': 'Docker Compose infrastructure',

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

        'projects.hospital.desc': 'A hospital personnel shift management system built with Django. Handles employees, departments, shift assignments, swap requests, and leave management.',
        'projects.hospital.f1': 'Employee, department, and role management',
        'projects.hospital.f2': 'Shift types and shift assignments',
        'projects.hospital.f3': 'Shift swap and leave requests',
        'projects.hospital.f4': 'Conflict prevention for overlapping shifts',
        'projects.hospital.f5': 'Notifications and activity logs',

        'projects.ielts.desc': 'A professional online IELTS testing platform with a full-stack architecture. Designed to handle authentication, timed exams, auto-save, scoring, and PDF report generation.',
        'projects.ielts.f1': 'Authentication & permissions system',
        'projects.ielts.f2': 'Exam engine with timers and auto-save',
        'projects.ielts.f3': 'Question navigation and flagging',
        'projects.ielts.f4': 'Automated scoring and results',
        'projects.ielts.f5': 'PDF report generation',

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

        'projects.novasearch.desc': 'یک سیستم بک‌اند متمرکز بر جستجو طراحی شده برای جستجوی متن کامل سریع و مقیاس‌پذیر در مجموعه داده‌های بزرگ. ساخته شده با استک مدرن Python و زیرساخت کانتینری.',
        'projects.novasearch.f1': 'معماری جستجو با Elasticsearch/OpenSearch',
        'projects.novasearch.f2': 'APIهای بک‌اند RESTful با FastAPI',
        'projects.novasearch.f3': 'PostgreSQL برای ذخیره‌سازی اصلی داده',
        'projects.novasearch.f4': 'لایه کش مبتنی بر Redis',
        'projects.novasearch.f5': 'زیرساخت Docker Compose',

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

        'projects.hospital.desc': 'یک سیستم مدیریت شیفت پرسنل بیمارستان ساخته شده با Django. مدیریت کارمندان، بخش‌ها، تخصیص شیفت، درخواست جابجایی و مدیریت مرخصی.',
        'projects.hospital.f1': 'مدیریت کارمند، بخش و نقش',
        'projects.hospital.f2': 'انواع شیفت و تخصیص شیفت',
        'projects.hospital.f3': 'درخواست جابجایی و مرخصی',
        'projects.hospital.f4': 'جلوگیری از تداخل شیفت‌ها',
        'projects.hospital.f5': 'اعلان‌ها و لاگ فعالیت',

        'projects.ielts.desc': 'یک پلتفرم آزمون آنلاین IELTS حرفه‌ای با معماری فول‌استک. طراحی شده برای مدیریت احراز هویت، آزمون‌های زمان‌دار، ذخیره خودکار، نمره‌دهی و تولید گزارش PDF.',
        'projects.ielts.f1': 'سیستم احراز هویت و مجوزها',
        'projects.ielts.f2': 'موتور آزمون با تایمر و ذخیره خودکار',
        'projects.ielts.f3': 'ناوبری سوالات و نشانه‌گذاری',
        'projects.ielts.f4': 'نمره‌دهی خودکار و نتایج',
        'projects.ielts.f5': 'تولید گزارش PDF',

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

// === State ===
let currentLang = 'en';

// === DOM Elements ===
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const langToggle = document.getElementById('lang-toggle');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

// === Initialize ===
function init() {
    detectLanguage();
    setupNavbar();
    setupMobileMenu();
    setupLanguageToggle();
    setupScrollReveal();
    setupActiveNavigation();
    setupProjectFilters();
    setupContactForm();
    fetchGitHubData();
}

// === Language Detection ===
function detectLanguage() {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved) {
        currentLang = saved;
    } else {
        const browserLang = navigator.language || navigator.userLanguage;
        currentLang = browserLang.startsWith('fa') ? 'fa' : 'en';
    }
    applyLanguage();
}

// === Apply Language ===
function applyLanguage() {
    const html = document.documentElement;
    const t = translations[currentLang];

    // Set direction
    if (currentLang === 'fa') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'fa');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    // Update page title
    if (currentLang === 'fa') {
        document.title = 'امیرعلی پوربابایی | توسعه‌دهنده فول‌استک';
    } else {
        document.title = 'AmirAli Pourbabaeii | Full-Stack Developer';
    }

    // Save preference
    localStorage.setItem('portfolio-lang', currentLang);
}

// === Navbar Scroll ===
function setupNavbar() {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

// === Mobile Menu ===
function setupMobileMenu() {
    menuToggle.addEventListener('click', () => {
        const isActive = mobileMenu.classList.contains('active');

        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close on link click
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close on overlay click
    mobileMenu.querySelector('.mobile-overlay-bg').addEventListener('click', () => {
        closeMobileMenu();
    });

    // Close on Escape
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

// === Language Toggle ===
function setupLanguageToggle() {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fa' : 'en';
        applyLanguage();
    });
}

// === Scroll Reveal ===
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// === Active Navigation ===
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// === Project Filters ===
function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-categories') || '';

                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// === Contact Form ===
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

        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        formStatus.textContent = '';
        formStatus.className = 'form-status';

        let isValid = true;

        // Validate name
        if (!name.value.trim()) {
            nameError.textContent = t['contact.validation.name'];
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
            emailError.textContent = t['contact.validation.email'];
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            messageError.textContent = t['contact.validation.message'];
            isValid = false;
        }

        if (!isValid) return;

        // Show loading
        submitBtn.disabled = true;
        formStatus.textContent = '...';
        formStatus.className = 'form-status loading';

        // Simulate sending (since there's no backend)
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

// === GitHub Data ===
async function fetchGitHubData() {
    try {
        const response = await fetch('https://api.github.com/users/ByteBite1391');

        if (!response.ok) throw new Error('GitHub API error');

        const data = await response.json();

        const repoCount = document.getElementById('repo-count');
        const starCount = document.getElementById('star-count');

        if (repoCount) {
            repoCount.textContent = data.public_repos || '—';
        }

        // Fetch stars separately
        const reposResponse = await fetch('https://api.github.com/users/ByteBite1391/repos?per_page=100');
        if (reposResponse.ok) {
            const repos = await reposResponse.json();
            const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
            if (starCount) {
                starCount.textContent = totalStars || '—';
            }
        }
    } catch (err) {
        // Silently fail - keep the "—" placeholders
        console.log('GitHub API unavailable, using fallback display');
    }
}

// === Smooth Scroll for anchor links ===
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

// === Start ===
document.addEventListener('DOMContentLoaded', init);
