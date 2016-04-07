angular.module('starter.services', [])

.factory('Unicorns', function($http) {
  var unicornGifs = [];

  return {
    GetFeed: function(){
      return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&limit=10&api_key=dc6zaTOxFJmzC').then(function(response){
        unicornGifs = response.data;
        return unicornGifs;
      });
    },
    GetMoreGifs: function(){
      return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&limit=10&offset=' + unicornGifs.length + '&api_key=dc6zaTOxFJmzC').then(function(response){

        // unicornGifs = unicornGifs.concat(response.data);

        unicornGifs = response.data;
        return unicornGifs;
      });
    }
  }


});

