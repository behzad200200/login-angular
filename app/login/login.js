'use strict';

angular.module('myApp.login', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/login',{
            templateUrl: 'login/login.html',
            controller: 'loginController'
        })
    }])
    .controller('loginController',['$auth', '$scope', function($auth, $scope){
        $scope.credential = {};
        $scope.msg = "behzad";
        $scope.submitLogin = function(credential){
            $auth.submitLogin(credential)
                .then(function(res){

                })
                .catch(function(res){

                })

        }
    }])
