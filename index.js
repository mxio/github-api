'use strict;'



//"https://api.github.com/users/:username/repos"


function watchForm() {
    $('form').submit(event => {
        event.preventDefault()
        const githubUser = $('input').is("type=text").val();
        getRepos();
    });
}

$(watchForm);