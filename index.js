/* eslint-disable */
(function(root, factory) {
    'use strict';
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.bemClass = factory();
    }
})(this, function () {
    function BemClass() {};

    BemClass.prototype = {
        _mix: function(mixClass) {
            if (typeof mixClass !== 'string') {
                return this;
            }

            return this + ' ' + mixClass;
        },

        _formatModifier: function (startWith, key, value) {
            if (typeof value === 'undefined' || value === false) {
                return '';
            }

            if (value === true) {
                return ' ' + startWith + '_' + key;
            }

            return ' ' + startWith + '_' + key + '_' + value;
        },

        _formatModifiers: function (startWith, modifiers) {
            var result = '';

            for (var key in modifiers) {
                result += this._formatModifier(startWith, key, modifiers[key]);
            }

            return result;
        },

        format: function(block, element, modifiers) {
            var result = block;

            // Модификаторы для блока
            if (element && typeof element === 'object') {
                modifiers = element;
                element = null;
            }

            // Элемент
            if (element) {
                result = block + '__' + element;
            }

            if (modifiers) {
                result += this._formatModifiers(result, modifiers);
            }

            result = new String(result);
            result.mix = this._mix;

            return result;
        }
    };


    return function(block) {
        var bemClass = new BemClass(block);

        return bemClass.format.bind(bemClass, block);
    };
});
