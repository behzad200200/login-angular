angular.module('myApp').
    directive('mondoFooter', function(){
        return{
            restrict: 'E',
            templateUrl: "shared/footer.html"
        }
    })