/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
 function find(obj, val){
   let arr = [];
   finder(obj, val, arr);
   switch(arr.length){
       case 0:
        return null;
        break;
       case 1:
        return arr[0];
        break;
       default:
        return arr;
        break;
   }
 }

 function finder(obj, val, arr, path = ''){
   for (let i in obj){
     if(obj[i].__proto__.constructor.name === "Object"){
       finder(obj[i], val, arr, path + i + ".");
     }else if (obj[i] === val){
       arr.push(path + i);
   }
 }
 }
