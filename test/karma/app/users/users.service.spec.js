define(['users','angular-mocks'],function(){

  describe('Mocking users module', function(){

    beforeEach(module('app.users'));

    describe('Test suite for usersService',function(){

      var usersService;

      beforeEach(inject(['usersService',function(_usersService_){
        usersService = _usersService_;
      }]));

      it('getUsers() spec',function(){
        expect(usersService.flag).toBe(true);
      });
    });
  });
});
