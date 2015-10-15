var app=angular.module('myApp', ['myApp.controllers','ui.router']);
app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('main', {
		url: '/',
		templateUrl: 'templates/main.html',
		controller: 'MainCtrl'
	});	
    $urlRouterProvider.otherwise('/');
}]);
angular.module('myApp.controllers',[]);