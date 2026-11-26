const tabs = [...document.querySelectorAll('.services-tab')];
const panels = [...document.querySelectorAll('.services-panel')];

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

const packages = [...document.querySelectorAll('.package')];

function syncPackages() {
  packages.forEach(pkg => {
    const isSelected = pkg.querySelector('.package__input').checked;

    pkg.classList.toggle('is-selected', isSelected);
    pkg.querySelector('.package-btn__label').textContent =
      isSelected ? 'Package Selected' : 'Get This Package';
  });
}

packages.forEach(pkg => {
  pkg.querySelector('.package__input').addEventListener('change', syncPackages);
});

syncPackages();
