define(
    'controller',
    function() {
        var Controller = function(model, view) {
            var addItem = function() {
                var newItem = view.elements.input.val();

                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            };
            var addItemEnter = function(event) {
                if (event.keyCode == 13) {
                    addItem();
                }
            };
            var editItem = function() {
                var item = $(this).attr('data-value');
                var $item = $(this).siblings('.toDoList__item-text');

                $item.attr('contenteditable', 'true').focus().on('keydown', function(event) {
                    if (event.keyCode == 13) {
                        var newItem = $item.text();

                        $(this).attr('contenteditable', 'false');
                        model.editItem(item, newItem);
                        view.renderList(model.data);
                    }
                });
                view.selection($item[0]);
                view.changeText($(this), view.tips.edit);
                //$(this).text('(press enter for applying changes)');

            };
            var removeItem = function() {
                var item = $(this).attr('data-value');

                model.removeItem(item);
                view.renderList(model.data);
            };

            view.elements.addBtn.on('click', addItem);
            view.elements.input.on('keydown', addItemEnter);
            view.elements.listContainer.on('click', '.toDoList__item-edit', editItem);
            view.elements.listContainer.on('click', '.toDoList__item-delete', removeItem);
        };

        return Controller;
    }
);
