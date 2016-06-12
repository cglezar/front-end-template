define([],function(){

  return ['localStorageService', function(localStorageService){

    var self = this;

    self.user = {};
    self.users = localStorageService.get('users') || [];
    self.newUser = newUser;

    /////////////////////////////////////

    function newUser(){
      self.users.push(self.user);
      localStorageService.set('users',self.users);
      self.user = {};
    }
  }];
});
