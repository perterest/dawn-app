'use strict';

/**
 * @ngdoc function
 * @name dawnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dawnApp
 */
angular.module('dawnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
