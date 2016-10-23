requirejs.config({
    paths: {
		'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
		tmpl: 'tmpl'
    }
});

require(
    [
        'model',
        'view',
        'controller',
        'jquery'
    ],
    function(Model, View, Controller, $){
    	var toDoList = ['mother', 'father', 'sister'];
    	var model = new Model(toDoList);
    	var view = new View(model);
    	var controller = new Controller(model, view);
    }
);
