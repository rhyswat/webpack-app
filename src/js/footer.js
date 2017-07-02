// looks after the footer part of the dom

const $ = require('jquery');

function AppFooter() {
    console.log('new footer');
};

AppFooter.prototype.init = function() {
    let footer = $('#app-footer');
    footer.empty();
    footer.append('<h4>Footer</h4>');
    console.log('footer initialised');
};

module.exports = AppFooter;