(function() {
  angular.module('two-cents')
      .controller("MainController", MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService){
    $scope.posts = PostService.getAll();
    $scope.create = create;
    $scope.deletePost = deletePost;
    $scope.updatePost = updatePost;


    $scope.$watch(function(){
      return PostService.getAll();
    }, function(){
      $scope.posts = PostService.getAll();
    });

    function create(newPost){
      PostService.create(newPost);
      $scope.newPost = {};
    }

    function deletePost(id){
      PostService.delete(id);
      $scope.deleteId = '';
    }
    function updatePost(id, newPostData){
      PostService.update(id, newPostData);
      $scope.updateId = '';
      $scope.updatedPost = {};
    }
  }
  
}());
