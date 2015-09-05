var app = angular.module('treatment', []);
app.controller('results', ['$scope', '$http', function($scope, $http) {
	$scope.fullScreen = false;

	$scope.submit = function() {
		if ($scope.text) {
			$http.get('/search?q='+$scope.text).success(function(response) {
				$scope.results = response
			})
		}
	}

	$scope.blur = function ($event) {
		if ($scope.text) return;
		$scope.fullScreen = false;
	}

	$scope.focus = function ($event) {
		$scope.fullScreen = true;
	}
}])
