document.addEventListener('DOMContentLoaded', function () {
  var logo = document.querySelector('a[data-md-component="logo"]') || document.querySelector('.md-logo');
  if (!logo) return;
  try {
    logo.setAttribute('href', 'https://www.evospikenet.org');
  } catch (e) {}
});
