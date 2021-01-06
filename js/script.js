'use strict';

var codeHTML = '<p>\n';
for(var i = 200; i > 1; i--) {
    if (i % 2 === 0) {
        codeHTML += `${i} <br>`;
    }
}
codeHTML += '</p>';

var div = document.querySelector('div');

div.innerHTML = codeHTML;