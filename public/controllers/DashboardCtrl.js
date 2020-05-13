angular.module('planner')

.controller('DashboardCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('/projectlist').then(function(data) {
        console.log('i got the data');
        $scope.projectList = data;
    })

}]);