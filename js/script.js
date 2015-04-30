document.addEventListener('DOMContentLoaded', function() {
  var projects = document.querySelectorAll('.projects > div');

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i],
        repo = project.getAttribute('data-repo'),
        overlayContainer = project.querySelector('.left');

    project.style.cursor = 'pointer';

    project.addEventListener('click', function(e) {
      if (!(e.ctrlKey || e.metaKey)) {
        var link = this.querySelector('h2 a');
        location.href = link.getAttribute('href');
      }
    });

    if (repo && overlayContainer) {
      overlayContainer.innerHTML += '<div class="overlay"><a class="github-button" href="https://github.com/' + repo + '" data-icon="octicon-star" data-style="mega" data-count-href="/' + repo + '/stargazers" data-count-api="/repos/' + repo + '#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star ' + repo + ' on GitHub">Star</a></div>';
    }
  }
});
