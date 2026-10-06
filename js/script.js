/* Oreia Tech - JavaScript Vanilla
   Só o que o CSS não consegue fazer sozinho. */

(() => {
  const topbar = document.getElementById('topbar');
  const toggle = document.getElementById('menu-toggle');

  // Navbar ganha fundo desfocado ao rolar a página
  const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Fecha o menu mobile ao escolher um link ou apertar Esc
  document.querySelectorAll('.menu a').forEach((link) =>
    link.addEventListener('click', () => { toggle.checked = false; })
  );
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggle.checked = false;
  });

  // Ano do rodapé sempre atualizado
  document.getElementById('ano').textContent = new Date().getFullYear();
})();
