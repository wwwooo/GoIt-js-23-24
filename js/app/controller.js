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
                var closeEditItem = function() {
                    var newItem = $item.text();
                    $(this).attr('contenteditable', 'false');
                    model.editItem(item, newItem);
                    view.renderList(model.data);
                };

                $(this).text('*edit*');
                $item.attr('contenteditable', 'true').focus().on('keydown', function(e) {
                    if (e.keyCode == 13) {
                        closeEditItem();
                        $(document).off('mousedown');
                    }
                });

                $(document).on('mousedown', function(e) {
                    if (e.target != $item[0] && !$item.has(e.target).length) {
                        closeEditItem();
                        $(document).off('mousedown');
                    }
                });
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
