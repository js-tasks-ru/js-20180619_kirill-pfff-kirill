(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.data = data;
            this.render();
        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            for (let i = 0; i < this.data.length; i++){
                if (this.data[i].id === id){
                    this.data.splice(i, 1);
                }
            }
            this.render();
        }

        render(){
            this.el.innerHTML = '';
            this.el.insertAdjacentHTML('afterbegin',
            `<thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
                    <td>City</td>
                    <td></td>
                </tr>
            </thead>`);

            let tbody = document.createElement('tbody');

            tbody.addEventListener('click', function(e){
                if (e.target.className === 'del'){
                    e.preventDefault();
                    let id = e.target.closest('tr').dataset.id;
                    this.onRemoved(+id);
                }
            }.bind(this));

            this.data.map(item => {
                let tr = document.createElement('tr');
                let keys = Object.keys(item);
                tr.dataset.id = item[keys[0]];

                for (let i of keys.slice(1)){
                    let td = document.createElement('td');
                    td.innerHTML = item[i];
                    tr.appendChild(td);
                }

                let td = document.createElement('td');
                td.innerHTML = '<a href="#delete" class="del">X</a>';
                tr.appendChild(td);

                tbody.appendChild(tr);
                this.el.appendChild(tbody);
            });
        }
    }

    window.ClearedTable = ClearedTable;
})();
