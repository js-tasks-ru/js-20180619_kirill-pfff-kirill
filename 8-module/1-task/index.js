'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');

    this.render = function(items){
        this.el.innerHTML = '';
        this.el.insertAdjacentHTML('afterbegin',
            `<thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
                    <td>City</td>
                </tr>
            </thead>`
        )

        let tbody = document.createElement('tbody');

        items.map(item => {
            let tr = document.createElement('tr');
            for(let i of Object.values(item)){
                let td = document.createElement('td');
                td.innerText = i;
                tr.appendChild(td)
            }
            tbody.appendChild(tr)
        });

        this.el.appendChild(tbody);
    }

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        column = Object.keys(items[0])[column];

        items.sort((a,b) => {
            if (desc){
                return a[column] < b[column];
            }
            return a[column] > b[column];
        });

        this.render(items);
    }

    this.render(items);
}
