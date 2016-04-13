angular.module('starter.services', [])

.factory('Unicorns', function($http) {
  var obj = {
    gifs: [],
    term: 'unicorns'
  };

  return {
    search: function(term){
      obj.term = term;
      return $http.get('http://api.giphy.com/v1/gifs/search?q=' + obj.term + '&limit=10&api_key=dc6zaTOxFJmzC')
      .then(function(response){
        gifs = response.data;
        return gifs;
      });
    },
    GetMoreGifs: function(array){
      return $http.get('http://api.giphy.com/v1/gifs/search?q=' + obj.term + '&limit=10&offset=' + array.length + '&api_key=dc6zaTOxFJmzC')
      .then(function(response){
        gifs = array.concat(response.data.data);
        return gifs;
      });
    }
  }
})

.factory('Trending', function($http) {
  var obj = {
    gifs: []
  };

  return {
    GetTrending: function() {
      return $http.get("http://api.giphy.com/v1/gifs/trending?limit=10&api_key=dc6zaTOxFJmzC")
      .then(function(response) {
        gifs = response.data;
        return gifs;
      });
    },
    GetMoreGifs: function(array){
      return $http.get('http://api.giphy.com/v1/gifs/trending?limit=10&offset=' + array.length + '&api_key=dc6zaTOxFJmzC')
      .then(function(response){
        gifs = array.concat(response.data.data);
        return gifs;
      });
    }
  }
})

.factory('User', function($localStorage) {
  $localStorage = $localStorage.$default({
    favorites: []
  });

  function isDuplicateGif(gif) {
    if (!$localStorage.favorites) return false;
    return $localStorage.favorites.some(function(savedGif){
      return savedGif.id === gif.id;
    })
  }

  return {
    addGifToFavorites: function(gif) {
      if (!isDuplicateGif(gif)) {
        // obj.favorites.unshift(gif);
        $localStorage.favorites.push(gif)
      }
    },
    returnFavorites: function() {
      // return obj.favorites;
      return $localStorage.favorites;
    }
  }
})

.factory('StorageService', function($localStorage) {
  var _getAll = function() {
    return $localStorage.things;
  };

  var _add = function(thing) {
    $localStorage.things.push(thing)
  };

  var _remove = function(thing) {
    $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
  };

  return {
    getAll: _getAll,
    add: _add,
    remove: _remove
  };
});
















