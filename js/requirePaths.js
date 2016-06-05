var requirePaths = {
  /* Libs */
  'angular': 'bower_components/angular/angular.min',
  'angular-mocks': 'bower_components/angular-mocks/angular-mocks',
  'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
  'jquery': 'bower_components/jquery/dist/jquery.min',
  /* Angular Modules */
  'app': 'js/app/app.module',
  'users': 'js/app/users/users.module',
  /* Angular Controllers */
  'usersController': 'js/app/users/users.ctrl',
  /* Angular Services */
  'usersService': 'js/app/users/users.service'
};

var requireShim = {
  'app': ['angular','bootstrap'],
  'users': ['angular'],
  'bootstrap': ['jquery'],
  'angular-mocks': ['angular']
};
