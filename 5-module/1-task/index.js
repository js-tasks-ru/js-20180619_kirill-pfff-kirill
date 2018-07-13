'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const status = table.querySelectorAll('tbody > tr > td:last-child');

    for (let i of status){
        if (i.dataset.available === 'true'){
            i.classList.add('available');
        }else if (i.dataset.available === 'false') {
            i.classList.add('unavailable');
        }else{
            i.hidden = true;
        }
    }

    const gender = table.querySelectorAll('tbody > tr > td:nth-child(3)');

    for (let i of gender){
        if (i.innerHTML === 'm'){
            i.classList.add('male');
        }else{
            i.classList.add('female');
        }
    }

    const age = table.querySelectorAll('tbody > tr > td:nth-child(2)');

    for (let i of age){
        if (parseInt(i.innerHTML) < 18){
            i.style.textDecoration = 'line-through';
        }
    }

}
