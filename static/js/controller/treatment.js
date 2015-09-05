// var app = angular.module('treatment', [])
$('main').height(window.innerHeight - $('header').height() - $('fieldset').outerHeight(true) - 25)

function sanitizeHtml (str) {
  return $('<p></p>').text(str)[0].innerHTML
}

var map, placeService
function initMap () {
  map = new google.maps.Map(document.getElementById('map_container'), {
    center: new google.maps.LatLng(39, -98),
    zoom: 4
  })
  placeService = new google.maps.places.PlacesService(map)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)

      map.setCenter(pos)
      map.setZoom(12)

      var request = {
        location: pos,
        radius: 10000,
        types: ['pharmacy']
      }

      placeService.nearbySearch(request, function (results, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) return
        results.forEach(function (place, index) {
          // If the request succeeds, draw the place location on
          // the map as a marker, and register an event to handle a
          // click on the marker.
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
          })
          // Quadratic timeout needed to prevent OVER_QUERY_LIMIT errors.
          setTimeout(placeService.getDetails.bind(placeService), index * index * 15 + 200, { placeId: place.place_id }, function (place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              return
            }
            var infowindow = new google.maps.InfoWindow({
              content:
                '<div class="place">' +
                  '<h1>' + sanitizeHtml(place.name) + '</h1>' +
                  '<div>' + sanitizeHtml(place.formatted_address) + '</div>' +
                '</div>'
            })
            marker.addListener('click', function () {
              infowindow.open(map, marker)
            })
          })
        })
      })
    })
  }
}
