document.addEventListener('DOMContentLoaded', function() {
  var projects = document.querySelectorAll('.projects > div');

  var updateAgo = function(project, json) {
    var right = project.querySelector('.right'),
        updated = moment(json.updated_at),
        date = updated.format('MM/DD/YY'),
        ago = updated.fromNow(),
        small = document.createElement('small');

    small.innerHTML = '<a href="https://github.com/' + repo + '" title="' + date + '">' + ago + '</a>';
    right.appendChild(small);
  }

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i],
        repo = project.getAttribute('data-repo'),
        repoUrl = 'https://api.github.com/repos/' + repo,
        xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);

        updateAgo(projects[i], json);
      }
    }

    xhr.open('GET', repoUrl, true);
    xhr.send();

    project.style.cursor = 'pointer';

    project.addEventListener('click', function(e) {
      if (!(e.ctrlKey || e.metaKey)) {
        var link = this.querySelector('h2 a');
        location.href = link.getAttribute('href');
      }
    });
  }
});
