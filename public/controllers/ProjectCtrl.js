angular.module('planner')

.controller('ProjectCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {    
    $http.get('/projectList').then(function(data) {
        $scope.projects = data.data;
    });

}])

.controller('ProjectDetailsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $http.get('/projectList/'+$routeParams.id).then(function(data) {
        $scope.project = data.data[0];
        console.log($scope.project);
    });
}]);