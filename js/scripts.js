'use strict';

(function () {
    function Calc(input, display) {
        this._input = document.querySelectorAll(input);
        this._display = document.querySelector(display);
        this._assignEvent(this._input);
    }
    Calc.prototype._assignEvent = function (input) {
        input.forEach(this._click, this);
    }
    Calc.prototype._click = function (input) {
        input.addEventListener('click', this._calculate.bind(this));
    }
    Calc.prototype._calculate = function (input) {

        if (input.target.value === 'C') {
            this._display.value = '';
        }
        else if (input.target.value === '=') {
            this._display.value = eval(this._display.value);
        }
        else {
            this._display.value += input.target.value;
        }
    }    
    new Calc('input[type ="button"]', '#res');
})();
