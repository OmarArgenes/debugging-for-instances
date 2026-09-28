const button = document.querySelector('#copyDoi');
const doi = document.querySelector('#doi');

if (button && doi) {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(doi.textContent.trim());
      const original = button.textContent;
      button.textContent = 'Copied';
      window.setTimeout(() => { button.textContent = original; }, 1400);
    } catch {
      button.textContent = 'Copy failed';
    }
  });
}