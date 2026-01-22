// ===== 手機版選單切換 =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// 點擊連結後關閉選單
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
    });
});

// ===== 導航列滾動效果 =====
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    }
});

// ===== 平滑滾動 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 減去導航列高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== 表單提交處理 =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 取得表單資料
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // 這裡可以加入實際的表單提交邏輯
        // 例如使用 fetch 發送到後端 API
        
        // 顯示成功訊息
        alert('感謝您的訊息！我們會盡快回覆您。');
        
        // 清空表單
        contactForm.reset();
    });
}

// ===== 滾動動畫 =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// 監視所有需要動畫的元素
document.querySelectorAll('.game-card, .team-member, .stat-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 加入動畫類別的樣式
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

// ===== 打字效果（可選） =====
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== 粒子背景效果 =====
function createParticles() {
    const heroParticles = document.querySelector('.hero-particles');
    if (!heroParticles) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(108, 92, 231, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        heroParticles.appendChild(particle);
    }
}

// 初始化粒子效果
createParticles();

// ===== 封面輪播控制 =====
function initCoverSlider() {
    const coverTrack = document.querySelector('.cover-track');
    const coverDots = document.querySelectorAll('.cover-dot');
    const coverSlides = document.querySelectorAll('.cover-slide');
    
    if (!coverTrack || !coverDots.length || !coverSlides.length) return;
    
    // 計算單個 slide 寬度
    function getSlideWidth() {
        return coverTrack.offsetWidth;
    }
    
    // 滾動到指定 slide
    function scrollToSlide(index) {
        const slideWidth = getSlideWidth();
        coverTrack.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
        
        // 更新 active 狀態
        coverDots.forEach((d, i) => {
            d.classList.toggle('active', i === index);
        });
    }
    
    // 點擊 dot 滾動到對應 slide
    coverDots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const slideIndex = parseInt(dot.getAttribute('data-slide')) || 0;
            scrollToSlide(slideIndex);
        });
    });
    
    // 監聽滾動更新 active dot
    let scrollTimeout;
    coverTrack.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const slideWidth = getSlideWidth();
            const currentIndex = Math.round(coverTrack.scrollLeft / slideWidth);
            
            coverDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }, 50);
    });
    
    // 拖曳滑動支援
    let isDown = false;
    let startX;
    let scrollLeft;
    
    coverTrack.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - coverTrack.offsetLeft;
        scrollLeft = coverTrack.scrollLeft;
    });
    
    coverTrack.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    coverTrack.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    coverTrack.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - coverTrack.offsetLeft;
        const walk = (x - startX) * 2;
        coverTrack.scrollLeft = scrollLeft - walk;
    });
}

// 初始化封面輪播
initCoverSlider();

// ===== 頁面載入完成 =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

console.log('🎮 HanabiFuusen Website Loaded!');
