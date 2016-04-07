angular.module('starter.services', [])

.factory('Unicorns', function($http, $q) {
  var unicornGifs = [];

  return {
    GetFeed: function(){
      var deferred = $q.defer();

      return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&limit=10&api_key=dc6zaTOxFJmzC').then(function(response){
        unicornGifs = response.data;
        deferred.resolve(unicornGifs);

        // return unicornGifs;
      });
      return deferred.promise;
    },
    GetMoreGifs: function(){
      var deferred = $q.defer();

      return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&limit=10&offset=' + unicornGifs.data.length + '&api_key=dc6zaTOxFJmzC').then(function(response){
        unicornGifs = unicornGifs.data.concat(response.data);
        deferred.resolve(unicornGifs);
        // unicornGifs = response.data;
        // return unicornGifs;
      });
      return deferred.promise;
    }
  }


});




