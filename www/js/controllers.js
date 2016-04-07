angular.module('starter.controllers', [])

// .controller('UnicornCtrl', function($scope, Unicorns) {
//   Unicorns.success(function(data) {
//      $scope.gifs = data.data;
//    })
// })

.controller('UnicornCtrl', function($scope, Unicorns) {
  $scope.gifs = [];

  Unicorns.GetFeed().then(function(unicornGifs) {
     $scope.gifs = unicornGifs.data;
     console.log($scope.gifs);
   });
});
