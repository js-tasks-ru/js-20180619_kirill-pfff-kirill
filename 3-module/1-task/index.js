/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
 function showSalary(data, age) {
  let result = '';
  for (let i of data){
    if (i.age <= age){
      result += `${i.name}, ${i.balance}\n`;
    }
  }
  return result.trim();
}
