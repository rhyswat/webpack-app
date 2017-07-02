// looks after the footer part of the dom

const $ = require('jquery');

const image = require('../images/noavatar92.png');

function AppHeader() {
    console.log('new header');
};

AppHeader.prototype.init = function() {
    let header = $('#app-header');
    header.empty();
    header.append('<img src="' + image + '" alt="webpack fucked up"></img>');
    console.log('header initialised');
};

module.exports = AppHeader;