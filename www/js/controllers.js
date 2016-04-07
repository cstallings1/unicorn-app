angular.module('starter.controllers', [])

.controller('UnicornCtrl', function($scope, Unicorns) {
  // $scope.gifs = Unicorns;
  Unicorns.success(function(data) {
     $scope.gifs = data.data;
   })
})

