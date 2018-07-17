'use strict';

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
 */
 function getBeforeTime(when) {
     let current = Date.now();

     let diff = new Date(when.getTime() - current);

     if (+diff < 0){
       return 'событие завершилось';
     }else{
       let result = '';

       if (diff.getUTCFullYear() > 1970){
         result += `${diff.getUTCFullYear() - 1970} г., `
       }
       if (diff.getUTCMonth() > 0){
         result += `${diff.getUTCMonth()} м., `
       }
       if (diff.getUTCDate() > 1){
         result += `${diff.getUTCDate()} д., `
       }

       return result;
     }
 }
