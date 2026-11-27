export function initPackages(root = document) {
  const packages = [...root.querySelectorAll('.package')];

  if (!packages.length) return;

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
}