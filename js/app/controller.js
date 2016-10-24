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
            var selection = function(elem) {
                var select = window.getSelection();
                var range = document.createRange();

                range.selectNodeContents(elem);
                select.addRange(range);
            };
            var editItem = function() {
                var item_value = $(this).attr('data-value');
                var $item = $(this).prev();

                selection($item[0]);

                $item.attr('contenteditable','true').focus().on('keydown', function(event) {
                    if (event.keyCode == 13) {
                        $(this).attr('contenteditable','false');
                        model.editItem(item_value, $item.text());
                        view.renderList(model.data);
                    }
                });
            };
			var removeItem = function() {
                var item_value = $(this).attr('data-value');

				model.removeItem(item_value);
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
