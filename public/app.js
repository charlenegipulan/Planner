var app = angular.module('planner', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/views/home.html',
            controller: 'DashboardCtrl'
        }).
        when('/project/name', {
            templateUrl: '/views/project_view.html',
            controller: 'ProjectCtrl'
        }).
        otherwise({redirectTo: '/'})
    $locationProvider.hashPrefix('');
}]);