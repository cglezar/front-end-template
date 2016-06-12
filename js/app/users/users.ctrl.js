define([],function(){
  return ['usersService','localStorageService',function(usersService, localStorageService){

    var self = this;
    self.users = [];

    init();

    ////////////////////////////////////////////

    function init(){

      var usersInStore = localStorageService.get('users');

      self.users = usersInStore || [];

      if(self.users.length == 0){

        usersService.getUsers().then(function(users){

          localStorageService.set('users', users);
          self.users = users;
        },function(error){
          console.error(error); // Log error into console
        });
      }

    }

  }];
});
