'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$auth',function($scope, $auth) {
    if ($auth.validateUser){
        console.log('yesss');
        $scope.result = 'behzad';
    }
}]);