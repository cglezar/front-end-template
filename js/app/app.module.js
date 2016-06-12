define(['users'],function(users){

  var app = angular.module('app',['ngRoute', 'LocalStorageModule', 'app.users']);

  app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('wtco');
  }]);

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
