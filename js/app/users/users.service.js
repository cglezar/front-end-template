define([],function(){

  return ['$http','$q',function($http, $q){

    var self = this;

    self.getUsers = getUsers;
    self.flag = true;

    /////////////////////////////////////

    function getUsers(){

      var deferred = $q.defer();

      $http({
        url: 'json/users.json',
        method: 'GET'
      }).then(function(response){
        deferred.resolve(response.data);
      },function(error){
        deferred.reject(error);
      });

      return deferred.promise;

    }
  }];
});
