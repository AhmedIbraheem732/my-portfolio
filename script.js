// 1. تثبيت سنة حقوق النشر تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();

// 2. إدارة الوضع الداكن والفاتح بسلاسة وبدون وميض
const themeBtn = document.getElementById('theme-btn');
const themeIcon = themeBtn.querySelector('i');

// التحقق من الإعداد المخزن مسبقاً (الافتراضي هو الوضع الداكن الفاحم)
const savedTheme = localStorage.getItem('folio-theme') || 'dark';

if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('folio-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('folio-theme', 'light');
  }
});

// 3. القائمة لشاشات الجوال
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// 4. نموذج المراسلة
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`شكراً لك يا ${name}، تم تسجيل الرسالة وسأتواصل معك على بريدك.`);
  e.target.reset();
});
