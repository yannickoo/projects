document.addEventListener('DOMContentLoaded', function() {
  var projects = document.querySelectorAll('.projects > div');

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    project.style.cursor = 'pointer';

    project.addEventListener('click', function(e) {
      if (!(e.ctrlKey || e.metaKey)) {
        var link = this.querySelector('h2 a');
        location.href = link.getAttribute('href');
      }
    });
  }
});
