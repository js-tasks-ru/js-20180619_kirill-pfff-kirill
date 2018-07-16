'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const status = table.querySelectorAll('tbody > tr > td:last-child');

    for (let i of status){
        if (i.dataset.available === 'true'){
            i.parentElement.classList.add('available');
        }else if (i.dataset.available === 'false') {
            i.parentElement.classList.add('unavailable');
        }else{
            i.parentElement.hidden = true;
        }
    }

    const gender = table.querySelectorAll('tbody > tr > td:nth-child(3)');

    for (let i of gender){
        if (i.innerHTML === 'm'){
            i.parentElement.classList.add('male');
        }else{
            i.parentElement.classList.add('female');
        }
    }

    const age = table.querySelectorAll('tbody > tr > td:nth-child(2)');

    for (let i of age){
        if (parseInt(i.innerHTML) < 18){
            i.parentElement.style.textDecoration = 'line-through';
        }
    }

}
