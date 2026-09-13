// 1. تحديث سنة حقوق الملكية تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();

// 2. إدارة الوضع الليلي/الفاتح بدقة هندسية وحفظ الاختيار
const themeBtn = document.getElementById('theme-btn');
const themeIcon = themeBtn.querySelector('i');
const savedTheme = localStorage.getItem('user-theme') || 'dark';

if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
  document.documentElement.removeAttribute('data-theme');
}

themeBtn.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('user-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('user-theme', 'light');
  }
});

// 3. التحكم في القائمة المنسدلة لشاشات الهواتف
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// إغلاق القائمة فور الضغط على أي عنصر داخلها
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// 4. معالجة إرسال النموذج بشكل نظيف
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const senderName = document.getElementById('name').value;
  alert(`أهلاً بك يا ${senderName}، تم استلام رسالتك بنجاح وسأرد عليك في أقرب وقت.`);
  e.target.reset();
});
