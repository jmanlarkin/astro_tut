(function() {
    const base = document.createElement('base');
    if (window.location.hostname === 'jmanlarkin.github.io') {
      base.href = '/astro_tut/';
    } else {
      base.href = '/';
    }
    document.head.appendChild(base);
  })();