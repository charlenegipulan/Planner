angular.module('planner')

.controller('ProjectCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {    
    $http.get('/projectList').then(function(data) {
        $scope.projects = data.data;
    });

}])


.controller('ProjectDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    var projectId = $routeParams.projectId;
    console.log(projectId);
    $http.get('/projectList/'+projectId).then(function(data) {
        $scope.projects = data.data;
    });
}])