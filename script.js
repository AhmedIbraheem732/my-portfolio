// 1. تحديث سنة الفوتر تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();

// 2. التحكم في الوضع الليلي / الفاتح مع حفظ الاختيار
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const savedTheme = localStorage.getItem('site-theme') || 'dark';

if (savedTheme === 'light') {
  document.body.setAttribute('data-theme', 'light');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.body.removeAttribute('data-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('site-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('site-theme', 'light');
  }
});

// 3. التحكم في قائمة الهاتف التفاعلية
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// 4. رسالة تأكيد إرسال نموذج التواصل
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('شكراً لتواصلك معي! تم إرسال رسالتك وسأقوم بالرد عليك في أقرب وقت.');
  e.target.reset();
});
