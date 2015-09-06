var app = angular.module('main', [])
$('#search_results').hide()
app.controller('results', ['$scope', '$http', function($scope, $http) {
	$scope.fullScreen = false;

	$http.get('https://data.phila.gov/resource/9hed-4ffe.json').success(function(response) {
		console.log('lat: '+response[0].location_1.latitude)
		console.log('lon: '+response[0].location_1.longitude)
	})

	$scope.load = function() {
	 	if ($scope.text) {
			$http.get('/search?q='+$scope.text).success(function(response) {
				$scope.results = response
			})
		}
	}

	$scope.blur = function ($event) {
		if ($scope.text) {
			$scope.fullScreen = true
			return
		}
		$scope.fullScreen = false
		$('#search_results').slideUp()
	}

	$scope.focus = function ($event) {
		$scope.fullScreen = true
		$scope.recalc()
		$('#search_results').slideDown()
	}

	$scope.recalc = function () {
		var h = $scope.fullScreen ? window.innerHeight - $('header').height() - $('fieldset').outerHeight(true) - 25 : 0
		$('#search_results').height(h)
	}

	$(window).resize($scope.recalc)
}])
