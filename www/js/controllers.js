angular.module('starter', ['ionic'])

.controller('DisplayUnicornCtrl', function($scope, $http) {
  $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&api_key=dc6zaTOxFJmzC').then(function(resp) {
    console.log('Success', resp);
  }, function(err) {
    console.log('ERR', err);
  })
})