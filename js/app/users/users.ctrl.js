define([],function(){
  return ['usersService',function(usersService){

    var self = this;

    self.users = [];


    init();

    ////////////////////////////////////////////

    function init(){

      usersService.getUsers().then(function(users){
        self.users = users;
      },function(error){
        console.error(error); // Log error into console
      });
    }

  }];
});
