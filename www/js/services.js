angular.module('starter.services', [])

.factory('Unicorns', function($http, $q) {
  var unicornGifs = [];

  return {
    GetFeed: function(){

      return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&limit=10&api_key=dc6zaTOxFJmzC').then(function(response){
        unicornGifs = response.data;

        return unicornGifs;
      });
    },
    GetMoreGifs: function(array){

      return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&limit=10&offset=' + array.length + '&api_key=dc6zaTOxFJmzC').then(function(response){
        unicornGifs = array.concat(response.data.data);

        return unicornGifs;
      });
    }
  }


});




