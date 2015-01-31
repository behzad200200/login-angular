angular.module('myApp')
    .directive('mondoHeader', function(){
        return{
            restrict: 'E',
            templateUrl: 'shared/header.html',
            controller: ['$scope', '$auth', '$rootScope', function($scope, $auth, $rootScope){

            }]
        }
    })