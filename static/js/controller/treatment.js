$('main').height(window.innerHeight - $('header').height() - $('fieldset').outerHeight(true) - 25)

$(window).resize(function () {
  $('main').height(window.innerHeight - $('header').height() - $('fieldset').outerHeight(true) - 25)
})

function sanitizeHtml (str) {
  return $('<p></p>').text(str)[0].innerHTML
}

function hostname (url) {
  var h = $('<a href="' + sanitizeHtml(url) + '"></a>')[0].hostname
  var splitted = h.split('.')
  if (splitted.length === 3 && splitted[0] === 'www') {
    splitted = splitted.slice(1)
  }
  return splitted.join('.')
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

      var curLocIcon = {
        url: '/img/current-location.svg',
        size: new google.maps.Size(22, 22),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(11, 11)
      }

      new google.maps.Marker({
        position: pos,
        map: map,
        icon: curLocIcon,
        title: 'Current location'
      })

      var request = {
        location: pos,
        radius: 10000,
        types: ['pharmacy']
      }

      placeService.nearbySearch(request, function (results, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) return
        results.forEach(function (place) {
          // If the request succeeds, draw the place location on
          // the map as a marker, and register an event to handle a
          // click on the marker.
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
          })
          // Quadratic timeout needed to prevent OVER_QUERY_LIMIT errors.
          marker.addListener('click', function () {
            placeService.getDetails({ placeId: place.place_id }, function (place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) return
              var _ = sanitizeHtml
              var infowindow = new google.maps.InfoWindow({
                content:
                  '<div class="place">' +
                    '<h1>' + _(place.name) + '</h1>' +
                    '<p>' + _(place.formatted_address) + '</p>' +
                    '<p class="website"><a href="' + _(place.website) + '">' + hostname(place.website) + '</a></p>' +
                    '<p class="phone">' + _(place.formatted_phone_number) + '</p>' +
                  '</div>'
              })
              infowindow.open(map, marker)
            })
          })
        })
      })
    })
  }
}
