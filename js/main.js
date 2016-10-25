requirejs.config({
    paths: {
        'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery',
        'tmpl': 'lib/tmpl',
        'model': 'app/model',
        'view': 'app/view',
        'controller': 'app/controller'
    },
    shin: {
        'jquery': {
            exports: 'jQuery'
        }
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
    	var toDoList = ['husband', 'child', 'mother', 'father', 'sister', 'brother', 'aunt', 'uncle', 'grandma', 'grandpa'];
    	var model = new Model(toDoList);
    	var view = new View(model);
    	var controller = new Controller(model, view);
    }
);
