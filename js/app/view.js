define(
    'view',
    ['tmpl'],
    function() {
        var View = function(model) {
            var self = this;
            var init = function() {
                var wrapper = tmpl($('#wrapper-template').html());

                $('body').append(wrapper);

                self.elements = {
                    listContainer: $('.toDoList'),
                    input: $('.toDoList__input-item'),
                    addBtn: $('.toDoList__btn-add')
                };

                self.renderList(model.data);
            };

            self.renderList = function(data) {
                var list = tmpl($('#list-template').html(), {data: data});
                self.elements.listContainer.html(list);
            };

            self.selection = function(elem) {
                var select = window.getSelection();
                var range = document.createRange();

                range.selectNodeContents(elem);
                select.addRange(range);
            };

            self.tips = {
                edit: '(press enter for applying changes)'
            }

            self.changeText = function($elem, text) {
                $elem.text(text);
            }

            init();
        };

        return View;
    }
);
