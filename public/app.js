var app = angular.module('planner', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/views/home.html',
            controller: 'ProjectCtrl'
        }).
        when('/project/:id', {
            templateUrl: '/views/project_view.html',
            controller: 'ProjectDetailsCtrl'
        }).
        otherwise({redirectTo: '/'})
    $locationProvider.hashPrefix('');
}]);