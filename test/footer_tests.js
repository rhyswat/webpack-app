const util = require('util');

const chai = require('chai');
const expect = chai.expect;



describe('footer tests', function () {
    var jsdom;
    var $;
    var AppFooter;

    beforeEach(function () {
        jsdom = require('jsdom-global')('<div id="app-footer"></div>');
        $ = require('jquery');
        AppFooter = require('../src/js/footer');
    });

    afterEach(function () {
        if (jsdom) {
            jsdom();
        }
    });

    it('does something', function () {
        // given
        let footer = new AppFooter();

        // when
        footer.init();

        // then
        expect($('#app-footer').html()).to.equal('<h4>Footer</h4>');
    });

    it('does something again', function () {
        // given
        let footer = new AppFooter();

        // when
        footer.init();

        // then
        expect($('#app-footer').html()).to.equal('<h4>Footer</h4>');
    });
});