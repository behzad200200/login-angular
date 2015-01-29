'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$auth',function($scope, $auth) {
        $scope.registrationLogin = {};
        console.log('djflsdkjfs');
        $scope.register = function(registrationLogin){
            $auth.submitRegistration(registrationLogin)
                .then(function (res){
                    console.log("yessss")
                })
                .catch(function (res) {
                    console.log(res.data)
                })
        }

}]);