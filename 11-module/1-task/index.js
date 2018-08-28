(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            function show(e){
                if (e.target.dataset.tooltip){
                    let { bottom, top } = e.target.getBoundingClientRect();

                    if (!(+innerHeight - +bottom > 20)){
                        this.el.style.top = top - 40 + 'px';
                    }else{
                        this.el.style.top = top + 20 + 'px';
                    }

                    this.el.innerHTML = e.target.dataset.tooltip;
                    this.el.classList.toggle('tooltip_active');
                }
            }

            function hide(e){
                if (e.target.dataset.tooltip){
                    this.el.classList.toggle('tooltip_active');
                }
            }

            root.addEventListener('mouseover', show.bind(this));
            root.addEventListener('mouseout', hide.bind(this));
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
            this.el.classList.toggle('tooltip_active');
        }
    }

    window.Tooltip = Tooltip;
})();