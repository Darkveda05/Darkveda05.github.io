
<!-- Typewriter Script -->

document.addEventListener('DOMContentLoaded', () => {
  const text = 'A passionate Network/Security Engineer';
  const el = document.getElementById('typewriter');
  if (!el) return;

  let i = 0;
  const speed = 250;

  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, 400);
});

<!-- /Typewriter Script -->