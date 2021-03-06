var requirePaths = {
  /* Libs */
  'angular': 'bower_components/angular/angular.min',
  'angular-mocks': 'bower_components/angular-mocks/angular-mocks',
  'angular-route': 'bower_components/angular-route/angular-route.min',
  'angular-local-storage': 'bower_components/angular-local-storage/dist/angular-local-storage.min',
  'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
  'jquery': 'bower_components/jquery/dist/jquery.min',
  /* Angular Modules */
  'app': 'js/app/app.module',
  'users': 'js/app/users/users.module',
  /* Angular Controllers */
  'usersController': 'js/app/users/users.ctrl',
  'addUserController': 'js/app/users/addUser.ctrl',
  /* Angular Services */
  'usersService': 'js/app/users/users.service'
};

var requireShim = {
  'app': ['angular','angular-route','angular-local-storage','bootstrap'],
  'users': ['angular'],
  'bootstrap': ['jquery'],
  'angular-mocks': ['angular'],
  'angular-route': ['angular'],
  'angular-local-storage': ['angular']
};
