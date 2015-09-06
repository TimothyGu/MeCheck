var app = angular.module('main', [])
$('#search_results').hide()
app.controller('results', ['$scope', '$http', function($scope, $http) {
	$scope.fullScreen = false;
	$scope.searching = false;

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
			return
		}
		$('#search_results').slideUp()
	}

	$scope.focus = function ($event) {
		$scope.searching = true;
		$('#search_results').height(window.innerHeight - $('header').height() - $('fieldset').outerHeight(true) - 25)
		$('#search_results').slideDown()
	}
}])
