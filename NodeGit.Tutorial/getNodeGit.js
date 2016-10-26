var git = require("nodegit");

git.Clone("https://github.com/nodegit/nodegit", "nodegit").then(function(repository) {
    // Work with the repository
});