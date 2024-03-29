// ==UserScript==
// @name         YouTube
// @namespace    https://open.spotify.com/
// @version      0.1
// @description  A custom theme for YouTube
// @author       Artem Melnik
// @match        https://open.spotify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// @updateURL    https://github.com/Artem-Melnik/github-universal-theme/blob/main/Tampermonkey/Spotify.js
// @downloadURL  https://github.com/Artem-Melnik/github-universal-theme/blob/main/Tampermonkey/Spotify.js
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      file:///C:\Users\artem\Downloads\Test.js
// @grant        none
// ==/UserScript==

'use strict';

// Creates a button
let button = document.createElement('button');
button.innerHTML = 'Click here';
document.body.appendChild(button);

// Activate the newly added button.
document.getElementById('myButton').addEventListener (
    'click', OnButtonClick, false
);

// Function that runs when button is pressed
function OnButtonClick(Event) {
    var addedText = document.createElement('text');
    addedText.innerHTML = 'A new line of text is added when button is pressed';
    document.getElementById('myContainer').appendChild (addedText);
}

// Style newly added elements with CSS
GM_addStyle (`
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              36px;
        background:             orange;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                1.0;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myButton {
        cursor: pointer;
    }
    #myContainer text {
        color: green;
        background: blue;
    }
`);