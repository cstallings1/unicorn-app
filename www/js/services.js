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
    gifs: [],
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
});
















