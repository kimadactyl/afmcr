var app = angular.module('afmcr', []);

app.controller('Events', function($scope, $http) {
  $http.get('http://db.afmcr.org/api/events')
        .then(function(response) {
        $scope.event_list = response.data;
    });
});

// app.controller('Events', ['$scope', function($scope) {
//   $scope.event_list = event_list
// }]);

app.controller('test', ['$scope', function($scope) {
  $scope.title = 'Age Friendly Manchester';
}]);
