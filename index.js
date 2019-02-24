'use strict;'

const apiURL = "https://api.github.com/users/";

function displayRepos(responseJson) {
    $('section').empty();

    for (let i = 0; i < responseJson.length; i++) {
        let listString = `<li><p>${responseJson[i].name}</p><p><a href="${responseJson[i].html_url}">View Repo</a></p></li>`;
        $('section').append(listString);
    }

    $('section').removeClass('hidden');
}

function getRepos(githubUser) {
    const url = apiURL + githubUser + "/repos";

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayRepos(responseJson))
        .catch(error => {
            $('section').append(`<p>Error: ${error.message}.`);
        })
}

function watchForm() {
    $('form').submit(function(event) {
        event.preventDefault();
        const githubUser = $('#user-input').val();
        getRepos(githubUser);
    });
}

$(watchForm);