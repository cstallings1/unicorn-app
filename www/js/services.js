angular.module('starter.services', [])

.factory('Unicorns', function($http) {
  return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&api_key=dc6zaTOxFJmzC').success(function(resp) {
    var unicornGifs = resp.data;
    return unicornGifs;
  });
});





