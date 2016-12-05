(function() {
  angular.module('two-cents')
    .controller("LogoutController", LogoutController);

  LogoutController.$inject = ['$scope'];
  $scope.logout = logout;
  
  function LogoutController(){
    console.log('Loging out!');

  }
}());
