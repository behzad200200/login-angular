'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.login',
    'myApp.version',
    'ng-token-auth'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }])
    .config(function($authProvider){
        $authProvider.configure({
            apiUrl: 'http://127.0.0.1:3000'
        })
    })
    .controller('ApplicationController', ['$rootScope', function($rootScope){
        $rootScope.currentUser = null;
        console.log('application');
        $rootScope.$on('auth:login-success', function(ev, user){
            $rootScope.currentUser = user
        })
    }])