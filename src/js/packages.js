export function initPackages(root = document) {
  const packages = [...root.querySelectorAll('.package')];

  if (!packages.length) return;

  const billPackage = root.querySelector('#bill-package');
  const totalPrice = root.querySelector('#total-price');
  const totalPriceVat = root.querySelector('#total-price-vat');

  function syncPackages() {
    packages.forEach(pkg => {
      const isSelected = pkg.querySelector('.package__input').checked;

      pkg.classList.toggle('is-selected', isSelected);
      pkg.querySelector('.package-btn__label').textContent =
        isSelected ? 'Package Selected' : 'Get This Package';

      if (!isSelected) return;

      const name = pkg.querySelector('.package__head h4').textContent.trim();
      const price = pkg.querySelector('.price').textContent.trim();

      if (billPackage) billPackage.textContent = `${name} Package:`;
      if (totalPrice) totalPrice.textContent = price;
      if (totalPriceVat) totalPriceVat.textContent = price;
    });
  }

  packages.forEach(pkg => {
    pkg.querySelector('.package__input').addEventListener('change', syncPackages);
  });

  syncPackages();
}
