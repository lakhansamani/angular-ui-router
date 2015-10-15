var app=angular.module('myApp', ['myApp.controllers','ui.router']);
app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('main', {
		url: '/',
		templateUrl: 'templates/main.html',
		controller: 'MainCtrl'
	})
	.state('main.about',{
		abstract:true,
		views:{
			'menu':{
				templateUrl:'templates/menu.html'
			},
			'':{
				templateUrl:'templates/about.html'
			}
		},
	})
	.state('main.about.vision',{
		url:'vision',
		templateUrl:'templates/vision.html'
	})
	.state('main.about.director',{
		url:'director',
		'templateUrl':'templates/director.html'
	})
	;	
    $urlRouterProvider.otherwise('/');
}]);
angular.module('myApp.controllers',[]);