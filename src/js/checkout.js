export function initCheckout(root = document) {
  const form = root.querySelector('.join-us form');

  if (!form) return;

  const terms = form.querySelector('#terms');
  const submit = form.querySelector('.submit-btn');

  function syncSubmit() {
    if (!submit) return;
    submit.disabled = !terms.checked;
  }

  if (terms) {
    terms.addEventListener('change', syncSubmit);
    syncSubmit();
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
  });
}
