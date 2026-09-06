// Mobile navigation toggle. Shared by every page.
(function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('siteNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
