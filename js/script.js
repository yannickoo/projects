document.addEventListener('DOMContentLoaded', function() {
  var projects = document.querySelectorAll('.projects > div');

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    project.addEventListener('click', function() {
      var link = this.querySelector('h2 a');
      location.href = link.getAttribute('href');
    });
  }
});
