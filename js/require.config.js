requirejs.config({
  baseUrl: '/',
  paths: requirePaths,
  shim: requireShim
});

requirejs(['app'],function(app){
  // Manual Bootstrap AngularJS Application
  angular.bootstrap(document,['app']); // same as <html ng-app="app">
});
