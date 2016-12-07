(function() {
  angular.module('two-cents')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope','AuthService'];

  function SignUpController($scope, AuthService){
    $scope.signup = signup;

    function signup(newUser){
      console.log('x');
      AuthService.signup(newUser)
                 .then(function(){
                   alert('Yayyyyy! Signing up!');
                 })
                 .catch(function(){
                   $scope.newUser = {};
                   alert('Your stuff is broked');
                 });
    }
  }
}());
