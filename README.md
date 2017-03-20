
[![gh.js](http://i.imgur.com/ku5PMH1.png)](#)

# gh.js

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/gh.js.svg)](https://travis-ci.org/IonicaBizau/gh.js/) [![Version](https://img.shields.io/npm/v/gh.js.svg)](https://www.npmjs.com/package/gh.js) [![Downloads](https://img.shields.io/npm/dt/gh.js.svg)](https://www.npmjs.com/package/gh.js)

> Tiny GitHub API wrapper for server and client.

## :cloud: Installation
### Server
```sh
$ npm i gh.js
```

Then you can use it this way:

```js
let GitHub = require("gh.js");

let gh = new GitHub({
    token: "an optional token"
});

gh.get("users/IonicaBizau", (err, repos) => {
    console.log(err || repos);
});
```
### Client
```html
<script src="path/to/gh.js"></script>
<script>
(function () {
    var gh = new GitHub();
    gh.get("users/IonicaBizau", function (err, repos) {
        console.log(err || repos);
    });
})();
</script>
```

## :clipboard: Example



```js
// Dependencies
const GitHub = require("gh.js");

// Create a new instance
let gh = new GitHub("");
// Or for authenticated requests, send the access token
// let gh = new GitHub("access token");

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
```

## :memo: Documentation


### `GitHub(options)`
Creates a new instance of `GitHub`.

#### Params
- **String|Object** `options`: An access token or an object containing the following options:

 - `host` (String): The GitHub API host (default: `"https://api.github.com/"`).
 - `token` (String): The GitHub token.
 - `user_agent` (String): The user agen (default: `"gh.js"`).

#### Return
- **GitHub** A new `GitHub` instance.

### `req(url, options, callback)`
Makes a request to the GitHub API.

#### Params
- **String** `url`: The request url.
- **Object** `options`: An object containing the following fields:
 - `all` (Boolean|Function): If `true`, then the endpoint pages will be
   iterated and the results will be concatenated in one array. If a function
   is provided, that function will be called when a page is fetched.
 - `opts` (Object): An object containing querystring parameters to be stringified.
 - `data` (Object): The POST data (if provided the request will be a POST request).
 - `req_options` (Object): Custom options passed to [`jsonrequest`](https://github.com/IonicaBizau/jsonrequest).
 - `method` (String): Custom method (by default: `GET` or `POST`, if there is data).
- **Function** `callback`: The callback function.

#### Return
- **Request** The request object.

### `checkResponse(err, data, res, callback)`
Checks if the response is an error or not.

#### Params
- **Error** `err`: The error value.
- **Object** `data`: The data object.
- **Response** `res`: The response object.
- **Function** `callback`: The callback option.

### `get(url, options, callback)`
Higher level function for making API requests.

#### Params
- **String** `url`: The request url.
- **Object** `options`: An object containing the following fields:
 - `all` (Boolean|Function): If `true`, then the endpoint pages will be
   iterated and the results will be concatenated in one array. If a function
   is provided, that function will be called when a page is fetched.
 - `opts` (Object): An object containing querystring parameters to be stringified.
 - `data` (Object): The POST data (if provided the request will be a POST request).
 - `req_options` (Object): Custom options passed to [`jsonrequest`](https://github.com/IonicaBizau/jsonrequest).
 - `method` (String): Custom method (by default: `GET` or `POST`, if there is data).
- **Function** `callback`: The callback function.

#### Return
- **Request** The request object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify-github-login`](https://github.com/Bloggify/github-login#readme) (by Bloggify)—Login with GitHub for Bloggify.
 - [`gh-following`](https://github.com/IonicaBizau/gh-following#readme)—Fetches the users you follow but they don't follow you and the users that follow you but you don't.
 - [`gh-fork-source`](https://github.com/IonicaBizau/gh-fork-source#readme)—Get the source repository of a GitHub fork.
 - [`gh-notifier`](https://bitbucket.org/IonicaBizau/gh-notifier#readme)—Receive desktop notifications from your GitHub dashboard.
 - [`gh-polyglot`](https://github.com/IonicaBizau/node-gh-polyglot)—Get language stats about GitHub users and repositories.
 - [`gh-repos`](https://github.com/IonicaBizau/gh-repos#readme)—Get one or all the owner repositories from GitHub.
 - [`github-emojify`](https://github.com/IonicaBizau/github-emojifiy#readme)—Emojify your GitHub repository descriptions.
 - [`github-labeller`](https://github.com/IonicaBizau/github-labeller#readme)—Automagically create issue labels in your GitHub projects.
 - [`located-in`](https://github.com/egoist/located-in#readme) (by EGOIST)—Get users by a speified location.
 - [`made-in`](https://github.com/IonicaBizau/made-in#readme)—Get GitHub projects created by users from a specific location.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.
 - [`sort-github-user-repos`](https://github.com/IonicaBizau/sort-github-user-repos#readme)—Sort GitHub repositories by stars for user.
 - [Hubber Memory Game](https://github.com/alysonla/hubber-memory-game) by [**@alysonla**](https://github.com/alysonla/)

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
