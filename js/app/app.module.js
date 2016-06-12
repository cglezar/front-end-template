define(['users'],function(users){

  var app = angular.module('app',['ngRoute', 'app.users']);

  app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/users',{
      templateUrl: 'views/app/users/users.html',
      controller: 'UsersController',
      controllerAs: 'usersCtrl'
    }).when('/addUser',{
      templateUrl: 'views/app/users/addUser.html',
      controller: 'AddUserController',
      controllerAs: 'addUserCtrl'
    }).otherwise('/users');

  }]);

  return app;
});
