const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// メニュー外クリックで自動的に閉じる処理
document.addEventListener('click', (e) => {
  const isClickInside = toggle.contains(e.target) || nav.contains(e.target);
  if (!isClickInside) {
    nav.classList.remove('open');
  }
});