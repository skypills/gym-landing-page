const tabs = document.querySelectorAll('.services-tab');
const panels = document.querySelectorAll('.services-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('is-active'));
    panels.forEach(p => p.classList.remove('is-active'));

    tab.classList.add('is-active');
    document.getElementById(tab.dataset.tab).classList.add('is-active');
  })
});