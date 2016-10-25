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
            
            init();
        };

        return View;
    }
);
