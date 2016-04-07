angular.module('starter.controllers', [])

.controller('UnicornCtrl', function($scope, Unicorns) {
  $scope.gifs = [];

  Unicorns.GetFeed().then(function(unicornGifs) {
     $scope.gifs = unicornGifs.data;
   });

  $scope.loadMoreGifs = function() {
    Unicorns.GetMoreGifs().then(function(unicornGifs) {
      $scope.gifs = $scope.gifs.concat(unicornGifs.data);
      // $scope.gifs = unicornGifs.data;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

});
