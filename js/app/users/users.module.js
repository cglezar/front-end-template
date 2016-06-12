define(['usersController','addUserController','usersService'],function(usersController, addUserController, usersService ){

  var users = angular.module('app.users',[]);

  /* Controllers */
  users.controller('UsersController',usersController);
  users.controller('AddUserController',addUserController);

  /* Services */
  users.service('usersService',usersService);

  return users;
});
