'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$auth',function($scope, $auth) {
        $scope.registrationLogin = {};
        $scope.submitRegistration = function(registrationLogin){
            console.log("test");
            $auth.submitLogin(registrationLogin)
                .then(function (res){
                    console.log("yessss")
                })
                .catch(function (res) {
                    console.log(res.data)
                })
        }

}]);