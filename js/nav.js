document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');
  var toggle = document.querySelector('.navbar-toggle');
  var menu = document.getElementById('main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('top-nav-short', window.pageYOffset > 50);
  });

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var expanded = menu.classList.toggle('in');
      toggle.setAttribute('aria-expanded', expanded);
      navbar.classList.toggle('top-nav-expanded', expanded);
    });

    menu.querySelectorAll('.navlinks-parent').forEach(function (parent) {
      parent.addEventListener('click', function (e) {
        e.preventDefault();
        var container = parent.parentElement;
        var wasOpen = container.classList.contains('show-children');
        menu.querySelectorAll('.navlinks-container.show-children').forEach(function (el) {
          el.classList.remove('show-children');
        });
        if (!wasOpen) container.classList.add('show-children');
      });
    });
  }
});
