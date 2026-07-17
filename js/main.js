const btn = document.querySelector('.header-btn-menu');
const nav = document.querySelector('.header-menu');

btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu')
    btn.innerHTML = btn.innerHTML === 'メニュー'
    ? '閉じる'
    : 'メニュー'
});