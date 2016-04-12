angular.module('starter.controllers', [])

.controller('UnicornCtrl', function($scope, $ionicModal, $ionicScrollDelegate, Unicorns, User) {
  $scope.gifs = [];

  Unicorns.search('unicorns').then(function(gifs) {
     $scope.gifs = gifs.data;
   });

  $scope.search = function(term) {
    Unicorns.search(term).then(function(gifs) {
      $scope.gifs = gifs.data;
      $ionicScrollDelegate.scrollTop();
    }
  )};

  $scope.favorite = function(gif) {
    User.addGifToFavorites(gif);
  }

  $scope.loadMoreGifs = function() {
    Unicorns.GetMoreGifs($scope.gifs).then(function(gifs) {
      $scope.gifs = gifs;
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

.controller('TrendingCtrl', function($scope, $ionicModal, Trending, User) {
  $scope.gifs = [];

  Trending.GetTrending().then(function(gifs) {
     $scope.gifs = gifs.data;
   });

  $scope.loadMoreGifs = function() {
    Trending.GetMoreGifs($scope.gifs).then(function(gifs) {
      $scope.gifs = gifs;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  $scope.favorite = function(gif) {
    User.addGifToFavorites(gif);
  }

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

.controller('FavoritesCtrl', function($scope, $ionicModal, User) {
  $scope.gifs = User.returnFavorites();

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
});


