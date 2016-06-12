define(['users'],function(users){

  var app = angular.module('app',['ngRoute', 'app.users']);

  app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/users',{
      templateUrl: 'views/users.html',
      controller: 'UsersController as usersCtrl'
    }).otherwise('/users');
    
  }]);

  return app;
});
