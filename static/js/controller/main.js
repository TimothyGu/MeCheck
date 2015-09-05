var app = angular.module('treatment', [])
$('#search_results').hide()
app.controller('results', ['$scope', '$http', function($scope, $http) {
	$scope.fullScreen = false;
	$scope.searching = false;

	$scope.submit = function() {
		if ($scope.text) {
			$http.get('/search?q='+$scope.text).success(function(response) {
				$scope.results = response
			})
		}
	}

	$scope.blur = function ($event) {
		if ($scope.text) {
			return
		}
		$('#search_results').slideUp()
	}

	$scope.focus = function ($event) {
		$scope.searching = true;
		$('#search_results').height(window.innerHeight - $('header').height() - $('fieldset').outerHeight(true) - 20)
		$('#search_results').slideDown()
	}

}])
