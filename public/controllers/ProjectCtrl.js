angular.module('planner')

.controller('ProjectCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('/projectlist').then(function(data) {
        console.log('i got the data');
        $scope.projectList = data.data;
        console.log(data);
    });

}]);