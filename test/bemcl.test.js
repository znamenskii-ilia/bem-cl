var bemcl = require('../index');
var expect = require('chai').expect;


describe('bem-cl', function () {
    var b = bemcl('button');

    describe('block', function () {
        it('key/value modifier', function () {
            var actual = b({ theme: 'green' }).toString();
            var actual2 = b({ theme: 'green', size: 'xl' }).toString();

            expect(actual).to.equal('button button_theme_green');
            expect(actual2).to.equal('button button_theme_green button_size_xl');
        });

        it('logical modifier', function () {
            var actual = b({ loading: true }).toString();
            var actual2 = b({ loading: false }).toString();

            expect(actual).to.equal('button button_loading');
            expect(actual2).to.equal('button');
        });

        it('mix', function () {
            var actual = b().mix('material-icons').toString();
            var actual2 = b({ theme: 'green' }).mix('material-icons').toString();
            var actual3 = b({ loading: true }).mix('material-icons').toString();

            expect(actual).to.equal('button material-icons');
            expect(actual2).to.equal('button button_theme_green material-icons');
            expect(actual3).to.equal('button button_loading material-icons');
        });
    });

    describe('element', function () {
        it('element', function () {
            var actual = b(('icon')).toString();

            expect(actual).to.equal('button__icon');
        });

        it('key/value modifier', function () {
            var actual = b(('icon'), { type: 'close' }).toString();

            expect(actual).to.equal('button__icon button__icon_type_close');
        });

        it('logical modifier', function () {
            var actual = b('icon', { animate: true }).toString();
            var actual2 = b('icon', { animate: false }).toString();

            expect(actual).to.equal('button__icon button__icon_animate');
            expect(actual2).to.equal('button__icon');
        });

        it('mix', function () {
            var actual = b('icon').mix('material-icons').toString();
            var actual2 = b(('icon'), { type: 'close' }).mix('material-icons').toString();
            var actual3 = b(('icon'), { animate: true }).mix('material-icons').toString();

            expect(actual).to.equal('button__icon material-icons');
            expect(actual2).to.equal('button__icon button__icon_type_close material-icons');
            expect(actual3).to.equal('button__icon button__icon_animate material-icons');
        });
    });
});
