angular.module('starter.services', [])

// .factory('Unicorns', function($http) {
//   return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&limit=10&api_key=dc6zaTOxFJmzC').success(function(resp) {
//     var unicornGifs = resp.data;
//     return unicornGifs;
//   });
// });

.factory('Unicorns', function($http) {
  var unicornGifs = [];

  return {
    GetFeed: function(){
      return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&limit=10&api_key=dc6zaTOxFJmzC').then(function(response){
        unicornGifs = response.data;
        return unicornGifs;
      });
    }
  //   GetNewUsers: function(){
  //     return $http.get(BASE_URL+'?results=10').then(function(response){
  //       items = response.data.results;
  //       return items;
  //     });
  //   }
  }


});


// .factory('PersonService', function($http){
//   var BASE_URL = "http://api.randomuser.me/";
//   var items = [];

//   return {
//     GetFeed: function(){
//       return $http.get(BASE_URL+'?results=10').then(function(response){
//         items = response.data.results;
//         return items;
//       });
//     },
//     GetNewUsers: function(){
//       return $http.get(BASE_URL+'?results=10').then(function(response){
//         items = response.data.results;
//         return items;
//       });
//     }
//   }
// })





