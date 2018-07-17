'use strict';

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
 */
 function getBeforeTime(when) {
     let current = Date.now();

     let diff = new Date(when.getTime() - current);

     console.log(new Date(diff).getUTCFullYear());
     console.log(new Date(diff).getUTCMonth());
     console.log(new Date(diff).getUTCDate());

     if (+diff <= 0){
       return 'событие завершилось';
     }else{
       let result = [];

       if (diff.getUTCFullYear() > 1970){
         result.push(`${diff.getUTCFullYear() - 1970} г.`);
       }
       if (diff.getUTCMonth() > 0){
         result.push(`${diff.getUTCMonth()} мес.`);
       }
       if (diff.getUTCDate()-1 > 0){
         result.push(`${diff.getUTCDate()-1} д.`);
       }
       if (diff.getUTCFullYear() > 1970){
         result.push(`${diff.getUTCDate()} д.`);
       }
       if (diff.getUTCHours() > 0){
         result.push(`${diff.getUTCHours()} ч.`);
       }
       if (diff.getUTCMinutes() > 0){
         result.push(`${diff.getUTCMinutes()} мин.`);
       }
       if (diff.getUTCSeconds() > 0){
         result.push(`${diff.getUTCSeconds()} сек.`);
       }

       return result.join(', ');
     }
 }
