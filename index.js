'use strict;'



//"https://api.github.com/users/:username/repos"


const apiURL = "https://api.github.com/users/";

function displayRepos(responseJson) {
    console.log(responseJson);
}

function getRepos(githubUser) {
    const url = apiURL + githubUser + "/repos";
    console.log(url);
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayRepos(responseJson))
        .catch(error => {
            //error message
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