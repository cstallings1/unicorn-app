angular.module('starter.controllers', [])

.controller('UnicornCtrl', function($scope, Unicorns) {
  $scope.gifs = [];

  Unicorns.GetFeed().then(function(unicornGifs) {
     $scope.gifs = unicornGifs.data;
   });

  $scope.loadMoreGifs = function() {
    Unicorns.GetMoreGifs($scope.gifs).then(function(unicornGifs) {
      // console.log(unicornGifs);
      $scope.gifs = unicornGifs;
      // $scope.gifs = unicornGifs.data;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

});
