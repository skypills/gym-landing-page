export function initTabs(root = document) {
  const tabs = [...root.querySelectorAll('.services-tab')];
  const panels = [...root.querySelectorAll('.services-panel')];

  if (!tabs.length) return;

  function selectTab(activeTab) {
    tabs.forEach(tab => {
      const isActive = tab === activeTab;

      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach(panel => {
      panel.classList.toggle('is-active', panel.id === activeTab.dataset.tab);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => selectTab(tab));

    tab.addEventListener('keydown', event => {
      const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
      if (!keys.includes(event.key)) return;

      event.preventDefault();

      const currentIndex = tabs.indexOf(tab);
      let nextIndex;

      if (event.key === 'Home') {
        nextIndex = 0;
      } else if (event.key === 'End') {
        nextIndex = tabs.length - 1;
      } else {
        const step = event.key === 'ArrowRight' ? 1 : -1;
        nextIndex = (currentIndex + step + tabs.length) % tabs.length;
      }

      const nextTab = tabs[nextIndex];
      nextTab.focus();
      selectTab(nextTab);
    });
  });
}