document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.product-card');
  const emptyState = document.querySelector('.empty-state');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.dataset.filter;
      let visibleCount = 0;

      cards.forEach((card) => {
        const matches = filter === 'todos' || card.dataset.category === filter;
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
      });

      emptyState.hidden = visibleCount > 0;
    });
  });
});
