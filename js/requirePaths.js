var requirePaths = {
  /* Libs */
  'angular': 'bower_components/angular/angular.min',
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
  'bootstrap': ['jquery']
};
