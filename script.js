// إضافة تفاعلية بسيطة عند الضغط على الزر
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('contactBtn');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'شكراً لاهتمامك! يمكنك التواصل معي عبر البريد الإلكتروني.';
        message.style.color = 'green';
    });
});