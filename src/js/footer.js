// looks after the footer part of the dom

const $ = require('jquery');

function AppFooter() {
};

AppFooter.prototype.init = function() {
    let footer = $('#app-footer');
    footer.empty();
    footer.append('<h4>Footer</h4>');
};

module.exports = AppFooter;