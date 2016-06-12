describe('Protractor test suite for addUser Controller',function(){

  var EC;

  beforeEach(function(){
    browser.get('http://localhost:8080/#/addUser');
    EC = protractor.ExpectedConditions;
  });

  it('Test newUser()',function(){

    var nameInput = element(by.model('addUserCtrl.user.name'));
    var lastNameInput = element(by.model('addUserCtrl.user.lastName'));
    var newUserForm = element(by.id('newUserForm'));
    var backBtn = element(by.id('backBtn'));
    var repeater = element(by.repeater('user in usersCtrl.users'));

    nameInput.sendKeys('Angel');
    lastNameInput.sendKeys('Velazquez');

    newUserForm.submit();
    backBtn.click();

    browser.wait(EC.presenceOf(repeater), 5000);
    expect(repeater.isPresent()).toBe(true);


    var users = element.all(by.repeater('user in usersCtrl.users')).then(function(elements){
      elements.forEach(function(e){
        e.getText().then(function(text){
          expect(text).toEqual('Angel Velazquez');
        });
      });
    });
  });
});
