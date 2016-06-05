define(['usersController','usersService'],function(usersController,usersService){

  var users = angular.module('app.users',[]);

  /* Controllers */
  users.controller('UsersController',usersController);

  /* Services */
  users.service('usersService',usersService);

  return users;
});
