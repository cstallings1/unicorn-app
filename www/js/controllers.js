angular.module('starter.controllers', [])

.controller('UnicornCtrl', function($scope, $ionicModal, Unicorns) {
  $scope.gifs = [];

  Unicorns.GetFeed().then(function(unicornGifs) {
     $scope.gifs = unicornGifs.data;
   });

  $scope.loadMoreGifs = function() {
    Unicorns.GetMoreGifs($scope.gifs).then(function(unicornGifs) {
      $scope.gifs = unicornGifs;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  $scope.showImages = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/image-popover.html')
  }

  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope,
      animation: 'slide-in-left'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };

})


