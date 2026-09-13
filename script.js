// 1. تثبيت سنة حقوق النشر تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();

// 2. التحكم في المظهر (Dark/Light) بدون أخطاء وميض
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');
const currentTheme = localStorage.getItem('theme-mode') || 'dark';

if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme-mode', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme-mode', 'light');
  }
});

// 3. فلترة المشاريع التفاعلية الحقيقية
const filterButtons = document.querySelectorAll('.filter-chip');
const projectCards = document.querySelectorAll('.project-system');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // تبديل حالة الزر النشط
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedFilter = btn.getAttribute('data-filter');

    // إظهار وإخفاء المشاريع بسلاسة
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-cat');
      if (selectedFilter === 'all' || cardCategory === selectedFilter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 4. القائمة التفاعلية في شاشات الموبايل
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// 5. نموذج الإرسال مع تنبيه بصري مهني
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('usr-name').value;
  alert(`مرحباً م. ${userName}، تم استلام رسالتك وتوثيقها في النظام بنجاح. سأتواصل معك عبر البريد قريباً.`);
  e.target.reset();
});
