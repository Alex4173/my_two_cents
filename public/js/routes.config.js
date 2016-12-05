(function() {
  angular.module('two-cents')
    .config(RouterConfiguration);

    RouterConfiguration.$inject = ['$routeProvider'];

    function RouterConfiguration($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'html/views/home.html',
          controller: "HomeController"
        })
        .when('/login', {
          templateUrl: 'html/views/login.html',
          controller: "LoginController"
        })
        .when('/signup', {
          templateUrl: 'html/views/signup.html',
          controller: 'SignUpController'
        })
        .when('/profile/:username', {
          templateUrl: 'html/views/profile.html',
          controller: 'ProfileController'
        })
        .when('/create', {
          templateUrl: 'html/views/create.html',
          controller: 'CreateController'
        })
        .when('/edit/:postId', {
          templateUrl: 'html/views/edit.html',
          controller: 'EditController'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
}());
