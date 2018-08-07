'use strict';

/**
 * Функция выполняет наследование
 * @param {Function} Main - класс который должен стать наследником
 * @param {Function} Parent - родительский класс
 */
function extendClass(Main, Parent) {
    let newProt = Object.create(Parent.prototype);
    newProt.constructor = Main;
    Main.prototype = newProt;
}
