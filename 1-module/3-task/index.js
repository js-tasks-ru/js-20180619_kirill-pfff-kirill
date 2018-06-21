'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arr = [];
    let number = '';

    str += 'a';

    for (let i of str){
        if (isNaN(i) === false){
            number += i;
        }else if (i === '-'){
            if (number.length === 0 || number.substr(-1) !== '-'){
                number += i;
            }
        }else if (i === '.') {
            if (number.length === 0 || number.substr(-1) !== '.') {
                number += i;
            }
        }else{
            if (number){
                arr.push(Number(number));
                number = '';
            }
        }
    }

    return {min:Math.min(...arr), max:Math.max(...arr)};
}
