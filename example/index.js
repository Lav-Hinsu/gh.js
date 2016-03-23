"use strict";

// Dependencies
const GitHub = require("../lib");

// Create a new instance
let gh = new GitHub();
gh.get("users/IonicaBizau", (err, user) => {
    console.log(err || user);
});

// Get the repositories of a user
gh.get("users/IonicaBizau/repos", {
    all: (err, pageRepos, currentPage) => {
        console.log("Fetched page " + currentPage);
    }
}, (err, repos) => {
    console.log(err || repos);
});
