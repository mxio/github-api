'use strict;'



//"https://api.github.com/users/:username/repos"


function watchForm() {
    $('form').submit(function(event) {
        event.preventDefault();
        const githubUser = $('#user-input').val();
        getRepos(githubUser);
    });
}

$(watchForm);