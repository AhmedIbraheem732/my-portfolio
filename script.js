// 1. تحديث السنة تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();

// 2. إدارة المظهر الداكن/الفاتح (Default is clean dark)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const savedTheme = localStorage.getItem('app-theme') || 'dark';

if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
  document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('app-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('app-theme', 'light');
  }
});

// 3. القائمة في شاشات الموبايل
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

// 4. نموذج التواصل
// يمكنك لاحقاً ربطه بـ Webhook لـ Google Apps Script الذي تبرمجه بنفسك ليصلك على Gmail
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('sender-name').value;
  alert(`شكراً لك يا ${name}. تم استلام رسالتك وسأتواصل معك قريباً.`);
  e.target.reset();
});
