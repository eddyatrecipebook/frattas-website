// Copyright year: always the visitor's current year (the HTML carries a hardcoded fallback).
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle.
var toggle = document.querySelector('.menu-toggle');
var menu = document.getElementById('menu');

toggle.addEventListener('click', function () {
  var open = menu.hidden;
  menu.hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  toggle.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
});
